"use client";

import { CardContent, CardFooter } from "../ui/card";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Trash2 } from "lucide-react";
import MathResonse from "./math-response";

export default function MathChatBox() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const responseRef = useRef<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [response]);

  const handleClear = () => {
    // textareaRef.current = null;
    setInput("");
    setResponse("");
    responseRef.current = "";
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError("");
      setResponse("");
      responseRef.current = "";

      try {
        const res = await fetch("/api/mathify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: input }),
        });

        if (!res.ok) throw new Error(await res.text());
        if (!res.body) return;

        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        const processStream = async () => {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value);
            responseRef.current += chunk;
            setResponse((prev) => prev + chunk);
          }
          setIsLoading(false);
        };

        setInput("");
        await processStream();
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to process request. Please try again.");
        setIsLoading(false);
      }
    },
    [input]
  );

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col p-4">
      <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
        <div className="flex-1 overflow-hidden flex flex-col">
          <section className="flex px-6 gap-2 flex-wrap">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a math question..."
              rows={1}
              disabled={isLoading}
              className="resize-none min-h-[60px] max-h-[200px] overflow-y-auto border-2 mt-5 focus:border-primary/50 rounded-lg p-3"
              aria-label="Math problem input"
            />
            <Button
              type="submit"
              size="lg"
              className="font-bold gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading || !input.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit"
              )}
            </Button>
            {response && (
              <>
                <Button onClick={handleClear} variant={"destructive"}>
                  <Trash2 />
                </Button>
              </>
            )}
          </section>

          {error && (
            <div className="mt-2 p-3 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
              {error}
            </div>
          )}

          {response && (
            <ScrollArea
              ref={scrollRef}
              className="flex-1 rounded-lg border-2 mt-4 bg-muted/30"
            >
              <MathResonse response={response} />
            </ScrollArea>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          AI-generated, for reference only
        </p>
      </CardFooter>
    </form>
  );
}
