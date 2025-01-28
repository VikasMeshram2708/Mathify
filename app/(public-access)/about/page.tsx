import { Metadata, NextPage } from "next";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AboutCard from "./about-card";

export const metadata: Metadata = {
  title: "About Mathify - Your Trusted AI Math Assistant",
  description:
    "Learn more about Mathify, the AI math assistant designed to simplify your mathematical journey. Discover how we solve equations, explain concepts, and make math easy for everyone.",
  keywords: [
    "About Mathify, AI math assistant, math-solving AI, how Mathify works, AI math tutor, Mathify features, math learning assistant.",
  ],
};

const AboutPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="container max-w-screen-2xl mx-auto px-6 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/about">About</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="my-10">
          <AboutCard />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
