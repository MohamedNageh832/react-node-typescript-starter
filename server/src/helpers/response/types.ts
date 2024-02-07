import { STATUS_CODE_MSG } from "./constants";

type StatusMessage = keyof typeof STATUS_CODE_MSG;
type Cookie = { name: string; value: string };

export type { StatusMessage, Cookie };
