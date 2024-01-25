import dotenv from "dotenv";
import { homeRoutes } from "./routes";
import { CorsManager, EServer } from "./helpers";
import { IOrigin } from "./helpers/cors-manager/types";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = new EServer(PORT);

const origins: IOrigin[] = [{ name: "http://localhost:5173", methods: ["POST"] }];
const corsManager = new CorsManager(app, origins);

app.listen(() => console.log(`Listening at: http://localhost:${PORT}`));

app.use("/", homeRoutes);
