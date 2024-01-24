import express from "express";
import dotenv from "dotenv";
import { homeRoutes } from "./routes";

dotenv.config();

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});

app.use("/", homeRoutes);
