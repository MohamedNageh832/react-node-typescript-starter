import { FC, ReactNode } from "react";

interface IContentHolder {
  children?: ReactNode;
}

const ContentHolder: FC<IContentHolder> = ({ children }) => {
  return <section className="p-5">{children}</section>;
};

export default ContentHolder;
