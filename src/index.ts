import 'reflect-metadata';
import Server from './Server';

const server = new Server();

export default server;

if (!module.parent) {
  server.start();
}
