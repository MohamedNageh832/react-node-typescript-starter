import dotenv from "dotenv";
dotenv.config();
import { homeRoutes } from "./routes";
import { CorsManager, EServer } from "./helpers";
import { IOrigin } from "./helpers/cors-manager/types";

const PORT = process.env.PORT || 3000;
const app = new EServer(PORT);

const origins: IOrigin[] = [{ name: "http://localhost:5173", methods: ["POST"] }];
new CorsManager(app, origins);

app.listen(() => console.log(`Listening at: http://localhost:${PORT}`));

app.use("/", homeRoutes);
