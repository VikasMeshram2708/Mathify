import React from "react";
import { Button } from "../ui/button";
import { StopCircle } from "lucide-react";

const MathAbortController = () => {
  return (
    <Button type="button" variant={"destructive"}>
      <span>Stop</span>
      <StopCircle />
    </Button>
  );
};

export default MathAbortController;
