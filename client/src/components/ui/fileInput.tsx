import { ChangeEvent, ComponentProps, useState } from "react";
import { UploadIcon } from "lucide-react";
import { Button, Input } from "..";

type FileInputProps = ComponentProps<any>;

const FileInput = ({ children, onChange, ...otherProps }: FileInputProps) => {
  const [filesCount, setFilesCount] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || !files[0]) return;

    setFilesCount(files.length);

    if (onChange) onChange(e);
  };

  return (
    <Button
      type="button"
      className="relative flex gap-2 bg-blue-700 hover:bg-blue-800"
    >
      {filesCount > 0 ? (
        `${filesCount} files selected`
      ) : (
        <>
          <UploadIcon size={16} />

          {children}
          <Input
            className="absolute top-0 left-0 w-full h-full opacity-0 z-10"
            type="file"
            multiple
            onChange={handleChange}
            {...otherProps}
          />
        </>
      )}
    </Button>
  );
};

export { FileInput };
