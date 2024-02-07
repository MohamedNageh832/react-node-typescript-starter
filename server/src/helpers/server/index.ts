import { ExpressHandlers } from "./types";
import express, { Express, RequestHandler } from "express";

class EServer {
  port: string | number;
  app: Express;

  constructor(port: string | number) {
    this.port = port;
    this.app = express();
  }

  static Router = express.Router;

  static json = express.json;

  listen(cb: () => void) {
    this.app.listen(this.port, cb);
  }

  use(...handlers: ExpressHandlers) {
    for (let i = 0; i < handlers.length; i++) {
      const handler = handlers[i];

      if (typeof handler === "string") {
        this.app.use(handler, handlers[i + 1] as RequestHandler);
      } else {
        this.app.use(handler as RequestHandler);
      }
    }
  }

  get(path: string, cb: RequestHandler) {
    this.app.get(path, cb);
  }

  post(path: string, cb: RequestHandler) {
    this.app.post(path, cb);
  }

  put(path: string, cb: RequestHandler) {
    this.app.put(path, cb);
  }

  delete(path: string, cb: RequestHandler) {
    this.app.delete(path, cb);
  }

  head(path: string, cb: RequestHandler) {
    this.app.head(path, cb);
  }

  patch(path: string, cb: RequestHandler) {
    this.app.patch(path, cb);
  }
}

export default EServer;
