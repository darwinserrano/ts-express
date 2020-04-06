import express, { Express } from 'express';
import router from './router';
import serverConfig from '../src/config/server';

export default class Server {
  app: Express;

  constructor(app: Express = express()) {
    this.app = app;
    serverConfig(this.app);
  }

  setRouter() {
    router(this.app);
  }

  initServer() {
    const { HOST, PORT } = this.app.locals.config;
    this.app.listen(PORT, () => {
      console.log(`listen in http://${HOST}:${PORT}`);
    });
  }

  start() {
    this.setRouter();
    this.initServer();
  }

  stop() {
    this.app.close();
  }
}
