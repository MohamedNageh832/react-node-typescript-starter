import { RouteController } from "../types";

const test: RouteController = (req, res) => {
  res.send("hi");
};

export { test };
