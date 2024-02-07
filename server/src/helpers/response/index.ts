import { Cookie, StatusMessage } from "./types";
import { STATUS_CODE_MSG } from "./constants";
import { Response } from "../server/types";

class ResponseManger {
  res: Response;
  cookie: Cookie | null;
  statusMessage: StatusMessage;

  constructor(res: Response, statusMessage: StatusMessage = "OK") {
    this.res = res;
    this.cookie = null;
    this.statusMessage = statusMessage;
  }

  send(body?: string | object) {
    const { code, message } = STATUS_CODE_MSG[this.statusMessage];

    if (this.statusMessage === "OK") {
      if (!this.cookie) return this.res.status(code).json(body);

      const { name, value } = this.cookie;
      return this.res.cookie(name, value).status(code).json(body);
    }

    if (body) return this.res.status(code).json(body);

    this.res.status(code).send(message);
  }
}

export default ResponseManger;
