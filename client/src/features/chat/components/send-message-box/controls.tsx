import { Button } from "@/components";
import { SendHorizonal } from "lucide-react";

const Controls = () => {
  return (
    <section>
      <Button type="submit" className=" w-10 rounded bg-green-600">
        <SendHorizonal />
      </Button>
    </section>
  );
};

export default Controls;
