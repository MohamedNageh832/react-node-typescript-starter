import { FC, ReactNode, useMemo } from "react";
import { getTimeFromDate } from "./utils";

interface IMessage {
  children?: ReactNode;
  date: Date;
  msgType: "sent" | "recieved";
}

const Message: FC<IMessage> = (props) => {
  const { children, date, msgType } = props || {};

  const time = useMemo(() => getTimeFromDate(date), [date]);
  const msgColor =
    msgType === "sent" ? "bg-green-300 text-black" : "bg-white text-black";

  return (
    <p className={`flex flex-col gap-2 p-3 rounded ${msgColor}`}>
      {children}
      <span>{time}</span>
    </p>
  );
};

export default Message;
