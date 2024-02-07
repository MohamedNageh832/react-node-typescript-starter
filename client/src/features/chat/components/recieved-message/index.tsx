import { Image } from "@/components";
import { FC, ReactNode } from "react";
import Message from "../message";

interface Message {
  id: number;
  text: string;
  date: Date;
}

interface IRecievedMessage {
  children?: ReactNode;
  messages: Message[];
  username: string;
  profilePictureURL: string;
}

const RecievedMessage: FC<IRecievedMessage> = (props) => {
  const { messages, username, profilePictureURL } = props || {};

  return (
    <section className="flex gap-3">
      <Image className="rounded-full" src={profilePictureURL} />
      <section className="flex flex-col gap-2">
        <span>{username}</span>
        {messages.map((msg) => (
          <Message key={msg.id} date={msg.date} msgType="recieved">
            {msg.text}
          </Message>
        ))}
      </section>
    </section>
  );
};

export default RecievedMessage;
