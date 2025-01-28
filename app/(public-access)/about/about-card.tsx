import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calculator,
  BrainCircuit,
  BookOpen,
  ChartBar,
  PenTool,
  History,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type FeatureType = {
  icon: React.JSX.Element;
  title: string;
  description: string;
};

const AboutCard = () => {
  const features: FeatureType[] = [
    {
      icon: <Calculator className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Universal Math Solver",
      description:
        "From basic arithmetic to advanced calculus, get step-by-step solutions for any math problem.",
    },
    {
      icon: <BrainCircuit className="w-8 h-8 mb-4 text-blue-600" />,
      title: "AI-Powered Learning",
      description:
        "Our intelligent system adapts to your learning style, providing personalized explanations.",
    },
    {
      icon: <BookOpen className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Comprehensive Coverage",
      description:
        "Master algebra, geometry, statistics, and more with detailed tutorials and practice problems.",
    },
    {
      icon: <ChartBar className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Visual Learning",
      description:
        "Understand complex concepts through interactive graphs and visual representations.",
    },
    {
      icon: <PenTool className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Step-by-Step Solutions",
      description:
        "Follow detailed explanations that break down each problem-solving step.",
    },
    {
      icon: <History className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey and identify areas for improvement.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHero />

      {/* Features Grid */}
      <AboutFeaturesGrid features={features} />

      {/* CTA Section */}
      <AboutCTA />
    </div>
  );
};

export default AboutCard;

const AboutHero = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Solve Any Math Problem</span>
            <span className="block">With AI-Powered Assistance</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base dark:text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your personal AI math tutor that helps you understand and master
            mathematics. Get instant solutions, detailed explanations, and
            step-by-step guidance.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button size={"lg"}>
                <Link href="/chat">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutFeaturesGrid = ({ features }: { features: FeatureType[] }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="p-6">
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const AboutCTA = () => {
  return (
    <div className="bg-muted dark:bg-muted/30 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold  sm:text-4xl">
            Ready to excel in mathematics?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-6">
            Join thousands of students who are mastering math with Mathify.
          </p>
          <Button className="my-5">
            <Link href="/chat">Try Mathify Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
