import { Metadata, NextPage } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import PrivacyCard from "./privacy-card";

export const metadata: Metadata = {
  title: "Mathify Privacy Policy - Your Data, Our Responsibility",
  description:
    "Understand Mathify's privacy policy and how we ensure the safety of your data. Learn about data usage, security measures, and your rights as a user.",
  keywords: [
    "Mathify privacy policy, AI app privacy, data protection, user data security, privacy for math app, Mathify data safety, data usage policy.",
  ],
};

const PrivacyPage: NextPage = () => {
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
              <BreadcrumbLink href="/privacy">Privacy</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="py-10">
          <PrivacyCard />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
