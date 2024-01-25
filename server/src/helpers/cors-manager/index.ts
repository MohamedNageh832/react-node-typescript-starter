import cors from "cors";
import { CorsCallbackFn, ICorsManager, IOrigin, Method } from "./types";
import { Request } from "express";
import { IEServer } from "../server/types";

const ERR_MSG = "Not allowed by cors";

class CorsManager implements ICorsManager {
  app: IEServer;
  static origins: IOrigin[] = [];

  constructor(app: IEServer, origins?: IOrigin[]) {
    this.app = app;
    CorsManager.origins = origins || [];

    this.#init();
  }

  #init() {
    this.app.use(cors(this.#corsOptionsDelegate));
  }

  #corsOptionsDelegate(req: Request, callback: CorsCallbackFn) {
    const requestOrigin = req.header("Origin");

    const origin = CorsManager.origins.filter((o) => o.name === requestOrigin)[0];

    if (!origin) return callback(null, { origin: false });

    const allMethodsEnabled = origin.methods.includes("*");
    const isAllowedMethod = origin.methods.includes(req.method as Method);
    const isAllowedRequest = isAllowedMethod || allMethodsEnabled;

    if (!isAllowedRequest) return callback(null, { origin: false });

    callback(null, { origin: true });
  }

  addOrigin(origin: string, methods?: Method[]) {
    const data = {
      name: origin,
      methods: methods || ["*"],
    };

    CorsManager.origins.push(data);
  }

  removeOrigin(origin: string) {
    const SavedOrigin = CorsManager.origins.filter((o) => o.name === origin)[0];

    if (!SavedOrigin) throw Error(`Error: Origin "${origin}" doesn't exist!`);

    const index = CorsManager.origins.indexOf(SavedOrigin);
    CorsManager.origins.splice(index, 1);
  }
}

export default CorsManager;
