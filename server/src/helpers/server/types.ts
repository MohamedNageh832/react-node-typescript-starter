import express, { Express, RequestHandler, Router } from "express";

type ExpressHandlers = (RequestHandler | string)[];

type Request = express.Request;
type Response = express.Response;

interface IEServer {
  port: string | number;
  app: Express;

  listen: (cb: () => void) => void;
  use: (...handlers: ExpressHandlers) => void;
  get: (path: string, cb: RequestHandler) => void;
  post: (path: string, cb: RequestHandler) => void;
  put: (path: string, cb: RequestHandler) => void;
  delete: (path: string, cb: RequestHandler) => void;
  head: (path: string, cb: RequestHandler) => void;
  patch: (path: string, cb: RequestHandler) => void;
}

export type { IEServer, ExpressHandlers, Request, Response };
