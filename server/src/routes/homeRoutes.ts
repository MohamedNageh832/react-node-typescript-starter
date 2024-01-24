import { test } from "../controllers";
import * as express from "express";
const router = express.Router();

router.get("/", test);

export { router };
