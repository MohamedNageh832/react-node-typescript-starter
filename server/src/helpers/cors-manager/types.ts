import { CorsOptions } from "cors";
import { Express } from "express";
import { IEServer } from "../server/types";

type Method = "GET" | "POST" | "DELETE" | "PUT" | "PATCH" | "HEAD" | "*";

type CorsCallbackFn = (_: Error | null, corsOptions?: CorsOptions) => void;

interface IOrigin {
  name: string;
  methods: Method[];
}

interface ICorsManager {
  app: IEServer;
  addOrigin: (origin: string, methods?: Method[]) => void;
  removeOrigin: (origin: string) => void;
}

export type { ICorsManager, Method, IOrigin, CorsCallbackFn };
