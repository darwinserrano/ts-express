import { Express } from 'express';
import home from './controllers/home';


export default (app: Express): void => {
  app.use('/home', home);
};
