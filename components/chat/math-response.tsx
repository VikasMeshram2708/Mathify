/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

type MathResponseProps = {
  response: string;
};
export default function MathResonse({ response }: MathResponseProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        code({ node, className, children, ...props }) {
          const isMath = className?.includes("math");
          return (
            <code
              {...props}
              className={`${className} ${
                isMath
                  ? "bg-transparent p-0"
                  : "bg-muted/70 px-2 py-0.5 rounded text-sm font-mono"
              }`}
            >
              {children}
            </code>
          );
        },
        h1: ({ children }) => (
          <h1 className="text-2xl font-bold mt-6 mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-semibold mt-5 mb-3">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-medium mt-4 mb-2">{children}</h3>
        ),
        p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
        ul: ({ children }) => (
          <ul className="mb-4 pl-6 list-disc space-y-2">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 pl-6 list-decimal space-y-2">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary/30 pl-4 italic my-4">
            {children}
          </blockquote>
        ),
      }}
      className="p-6 prose prose-sm max-w-none text-base 
                  prose-headings:font-medium 
                  prose-code:before:hidden 
                  prose-code:after:hidden
                  prose-p:text-base
                  prose-ul:my-4
                  prose-ol:my-4
                  prose-li:my-1
                  prose-blockquote:my-6
                  prose-hr:my-8"
    >
      {response}
    </ReactMarkdown>
  );
}
