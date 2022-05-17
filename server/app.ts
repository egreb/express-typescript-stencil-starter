import * as express from 'express';
import { Request, Response } from 'express';
import { User } from '../src/entity/User';
import { AppDataSource } from '../src/data-source';
import * as path from 'path';

// establish database connection
AppDataSource.initialize()

  .catch(err => {
    console.error('Error during Data Source initialization:', err);
  })
  .then(() => {
    const users = AppDataSource.getRepository(User);
    const user = new User();
    user.firstName = 'Florian';
    user.lastName = 'Dugann';
    user.age = 50;
    users.save(user);

    console.log('Data Source has been initialized!');

    // create and setup express app
    const app = express();
    app.use(express.json());

    function registerAPI(klass, path) {
      // register routes
      const pathid = path + '/:id';
      app.get(path, async function (_req: Request, res: Response) {
        const users = await AppDataSource.getRepository(klass).find();
        res.json(users);
      });

      app.get(pathid, async function (req: Request, res: Response) {
        const id = {
          id: parseInt(req.params.id),
        };
        const results = await AppDataSource.getRepository(klass).findOneBy(id);
        return res.send(results);
      });

      app.post(path, async function (req: Request, res: Response) {
        const user = await AppDataSource.getRepository(klass).create(req.body);
        const results = await AppDataSource.getRepository(klass).save(user);
        return res.send(results);
      });

      app.put(pathid, async function (req: Request, res: Response) {
        const id = {
          id: parseInt(req.params.id),
        };
        const user = await AppDataSource.getRepository(klass).findOneBy(id);
        AppDataSource.getRepository(klass).merge(user, req.body);
        const results = await AppDataSource.getRepository(klass).save(user);
        return res.send(results);
      });
      app.delete(pathid, async function (req: Request, res: Response) {
        const results = await AppDataSource.getRepository(klass).delete(req.params.id);
        return res.send(results);
      });
    }

    registerAPI(User, 'users');

    app.use(express.static(path.join(__dirname, '../www')));

    app.get('/*', (_req, res) => {
      res.sendFile(path.join(__dirname, '../www', 'index.html'));
    });

    // start express server
    app.listen(3000, () => {
      console.log('listening to http://localhost:3000');
    });
  });
