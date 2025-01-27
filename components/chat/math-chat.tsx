"use client";

import { useState, useRef } from "react";
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
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const responseRef = useRef<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse("");
    responseRef.current = "";

    try {
      const res = await fetch("/api/mathify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      if (!res.body) return;

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      const processStream = async () => {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value);
          responseRef.current += chunk;
          setResponse(responseRef.current);
        }
        setIsLoading(false);
      };

      await processStream();
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full relative px-6 py-4">
      <Card className="container mt-10 mx-auto max-w-screen-2xl">
        <CardHeader className="flex items-center">
          <CardTitle className="text-lg md:text-2xl lg:text-4xl font-bold">
            Math AI Assistant
          </CardTitle>
          <CardDescription className="text-base">
            Your AI Math Tutor. Get help with math problems, explore examples,
            and practice for tests.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a math question"
              rows={4}
              disabled={isLoading}
            />
            {response && (
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-sm whitespace-pre-wrap">{response}</p>
              </div>
            )}
          </CardContent>

          <CardFooter>
            <Button
              type="submit"
              size="lg"
              className="font-bold"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Submit"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}