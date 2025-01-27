/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import "katex/dist/katex.min.css";

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
    <div className="w-full px-6 py-4">
      <Card className="container mx-auto mt-10 max-w-screen-2xl">
        <CardHeader className="flex items-center text-center space-y-2">
          <CardTitle className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            Math AI Assistant
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed text-muted-foreground md:text-base">
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
              <div className="p-4 rounded-lg bg-muted/50 prose prose-sm max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    // Add custom rendering for code blocks if needed
                    code({ node, className, children, ...props }) {
                      if (className?.includes("math")) {
                        return <>{children}</>;
                      }
                      return <code {...props}>{children}</code>;
                    },
                  }}
                  className="whitespace-pre-wrap"
                >
                  {response}
                </ReactMarkdown>
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