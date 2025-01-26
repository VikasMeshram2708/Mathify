import React from "react";
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

export default function MathChat() {
  return (
    <div className="w-full">
      <Card className="container mt-10 mx-auto maxwsx2xl">
        <CardHeader className="flex items-center ">
          <CardTitle>Math Chat</CardTitle>
          <CardDescription>
            Your AI Math Tutor. Get help with math problems, explore examples,
            and practice for tests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Ask a math question" rows={4} />
        </CardContent>
        <CardFooter>
          <Button size="lg" className="font-bold">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
