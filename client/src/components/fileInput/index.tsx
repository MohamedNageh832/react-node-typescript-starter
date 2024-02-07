import { FC } from "react";
import { IFileInput } from "./types";
import { Button } from "..";
import "./styles.scss";

const FileInput: FC<IFileInput> = ({ children }) => {
  return (
    <Button className="file-input">
      {children}
      <input className="file-input__input" type="file" multiple />
    </Button>
  );
};

export default FileInput;
