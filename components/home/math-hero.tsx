import React from "react";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function MathHero() {
  const words = [
    {
      text: "Your",
    },
    {
      text: "Math",
    },
    {
      text: "AI",
    },
    {
      text: "Assistant",
    },
  ];
  return (
    <CardHeader className="flex items-center">
      <CardTitle className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
        <TypewriterEffect words={words} />
        {/* Math Problem Solver AI: Your Personal Tutor for Homework & Test Prep */}
      </CardTitle>
      <CardDescription>
        <p className="text-sm md:text-base">
          Your AI Math Tutor. Get help with math problems, explore examples, and
          practice for tests.
        </p>
      </CardDescription>
    </CardHeader>
  );
}
