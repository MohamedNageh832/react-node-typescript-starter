import { Input } from "@/components";
import Controls from "./controls";

const SendMessageBox = () => {
  return (
    <form className="flex items-center gap-4 border">
      <Input name="message" className="p-3 border-0 outline-none" />
      <Controls />
    </form>
  );
};

export default SendMessageBox;
