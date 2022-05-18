import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { AppDataSource } from '../src/data-source';
import { Routes } from '../src/routes';
import { User } from '../src/entity/User';
import * as path from 'path';

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
      (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = new (route.controller as any)()[route.action](req, res, next);
        if (result instanceof Promise) {
          result.then(result => (result !== null && result !== undefined ? res.send(result) : undefined));
        } else if (result !== null && result !== undefined) {
          res.json(result);
        }
      });
    });

    // setup express app here
    app.use(express.static(path.join(__dirname, '../www')));

    app.get('/*', (_req, res) => {
      res.sendFile(path.join(__dirname, '../www', 'index.html'));
    });

    // start express server
    app.listen(3000);

    // insert new users for test
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        firstName: 'Florian',
        lastName: 'Dugann',
        age: 281067,
      }),
    );

    console.log('Express server has started on http://localhost:3000');
  })
  .catch(error => console.log(error));
