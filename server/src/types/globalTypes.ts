import { Request, Response } from "express";

type RouteController = (req: Request, res: Response) => void;

export type { RouteController };
