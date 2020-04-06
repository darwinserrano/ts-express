import { Response, Request, Router } from 'express';

class Home {
  router: Router;

  constructor(router: Router = Router()) {
    this.router = router;
    this.setRouter();
  }

  index(req: Request, res: Response) {
    res.send('Hola home');
  }

  detail(req: Request, res: Response) {
    res.send('Hola home');
  }

  create(req: Request, res: Response) {
    res.send('Hola home');
  }

  update(req: Request, res: Response) {
    res.send('Hola home');
  }

  delete(req: Request, res: Response) {
    res.send('Hola home');
  }

  setRouter() {
    this.router.get('/', this.index);
    this.router.get('/:id', this.detail);
    this.router.post('/', this.create);
    this.router.put('/', this.update);
    this.router.delete('/:id', this.delete);
  }

  getRouter() {
    return this.router;
  }
}

const home = new Home();
export default home.getRouter();