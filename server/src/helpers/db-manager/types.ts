import { QueryError } from "mysql2";

type ConnectCallback = (err: QueryError | null) => void;
type QueryReturnType = [null | Error, null | any[]];

export type { ConnectCallback, QueryReturnType };
