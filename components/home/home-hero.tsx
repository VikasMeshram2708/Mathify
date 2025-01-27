import React from "react";
import { Button } from "../ui/button";
import { RetroGrid } from "../ui/retro-grid";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function HomeHero() {
  const words = [
    {
      text: "Mathify: ",
    },

    {
      text: "Your",
    },
    {
      text: "Personal",
    },
    {
      text: "Math",
    },
    {
      text: "Tutor",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl px-4 py-16">
        <header className="text-center mb-12">
          <TypewriterEffect words={words} />
          <p className="mt-4 text-base sm:text-lg leading-relaxed">
            Master math concepts with ease. Mathify is your interactive,
            personalized tutor for all things math.
          </p>
        </header>

        <main className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button size="lg" className="px-6 sm:px-8 py-3 sm:py-4 border-2">
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2"
          >
            See Demo
          </Button>
        </main>
      </div>
      <RetroGrid />
    </div>
  );
}
