import * as express from 'express';
import { Request, Response } from 'express';
import { User } from '../src/entity/User';
import { AppDataSource } from './data-source';
import * as path from 'path';

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source initialization:', err);
  });

// create and setup express app
const app = express();
app.use(express.json());

// register routes
app.get('/users', async function (_req: Request, res: Response) {
  const users = await AppDataSource.getRepository(User).find();
  res.json(users);
});

app.get('/users/:id', async function (req: Request, res: Response) {
  const id = {
    id: parseInt(req.params.id),
  };
  const results = await AppDataSource.getRepository(User).findOneBy(id);
  return res.send(results);
});

app.post('/users', async function (req: Request, res: Response) {
  const user = await AppDataSource.getRepository(User).create(req.body);
  const results = await AppDataSource.getRepository(User).save(user);
  return res.send(results);
});

app.put('/users/:id', async function (req: Request, res: Response) {
  const id = {
    id: parseInt(req.params.id),
  };
  const user = await AppDataSource.getRepository(User).findOneBy(id);
  AppDataSource.getRepository(User).merge(user, req.body);
  const results = await AppDataSource.getRepository(User).save(user);
  return res.send(results);
});

app.delete('/users/:id', async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(User).delete(req.params.id);
  return res.send(results);
});

app.use(express.static(path.join(__dirname, '../www')));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../www', 'index.html'));
});

// start express server
app.listen(3000, () => {
  console.log('listening to http://loalhost:3000');
});
