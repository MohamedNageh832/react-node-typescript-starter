import mysql, { Connection } from "mysql2/promise";
import { QueryReturnType } from "./types";

class DBManager {
  private connection: Connection | null;

  constructor() {
    this.connection = null;
    // this.#init();
  }

  async #init() {
    try {
      this.connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER,
      });

      console.log("Database connected.");
    } catch (err) {
      if (err instanceof Error) console.log(`${err}\n Still listening`);
    }
  }

  async query(sql: string, params?: string[]) {
    try {
      if (!this.connection) throw Error("No connection was found");
      const result = await this.connection.query(sql, params);

      return [null, result] as QueryReturnType;
    } catch (err) {
      if (err instanceof Error) console.log(err);
      return [err, null] as QueryReturnType;
    }
  }
}

export default DBManager;
