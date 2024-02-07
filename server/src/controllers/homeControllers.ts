import { RouteController } from "../types";

const test: RouteController = (req, res) => {
  res.send("hi there");
};

export { test };
