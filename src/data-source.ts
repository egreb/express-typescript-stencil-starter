import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../src/entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  entities: [User],
  migrations: [],
  subscribers: [],
  logging: 'all',
});
