import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

type MathClearChatProps = {
  handleClear: () => void;
};
export default function MathClearChat({ handleClear }:MathClearChatProps) {
  return (
    <Button onClick={handleClear} variant={"destructive"}>
      <Trash2 />
    </Button>
  );
}
