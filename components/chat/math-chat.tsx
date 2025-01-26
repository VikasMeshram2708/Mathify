"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import ResponseBox from "./response-box";

export default function MathChat() {
  const [toggleDialog, setToggleDialog] = useState<dialogToggle>(false);
  const [showResponse, setShowResponse] = useState<responseToggle>(false);

  function handleSubmit() {
    setToggleDialog(true);
    return setTimeout(() => {
      setShowResponse(true);
    }, 5000);
  }

  function handleClose() {
    setShowResponse(false);
    setToggleDialog(false);
  }
  return (
    <div className="w-full relative">
      <Card className="container mt-10 mx-auto max-w-screen-2xl">
        <CardHeader className="flex items-center ">
          <CardTitle className="text-lg md:text-2xl lg:text-4xl font-bold">
            Math AI Assistant
          </CardTitle>
          <CardDescription className="text-base">
            Your AI Math Tutor. Get help with math problems, explore examples,
            and practice for tests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Ask a math question" rows={4} />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} size="lg" className="font-bold">
            Submit
          </Button>
        </CardFooter>
      </Card>
      {toggleDialog && (
        <ResponseBox
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, beatae?"
          showResponse={showResponse}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
