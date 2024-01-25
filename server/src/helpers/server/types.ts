import { Express, RequestHandler } from "express";

type ExpressHandlers = (RequestHandler | string)[];

interface IEServer {
  port: string | number;
  app: Express;
  listen: (cb: () => void) => void;
  use: (...handlers: ExpressHandlers) => void;
}

export type { IEServer, ExpressHandlers };
