import cors from 'cors';
import logger from 'morgan';
import express, { Express } from 'express';
import { config } from 'dotenv';

const SETTINGS = config();

export default (app: Express): void => {
  app.disable('x-powered-by');

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.set('env', SETTINGS.parsed.ENV);
  app.set('config', SETTINGS.parsed);
  app.locals.env = app.get('env');
  app.locals.config = app.get('config');

  if (process.env.NODE_ENV !== 'test') {
    app.use(logger('combined'));
  }
};
