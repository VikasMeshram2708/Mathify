import { Metadata, NextPage } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Mathify - Get in Touch with Your AI Math Assistant",
  description:
    "Have questions or need help with Mathify? Reach out to us through our contact page. We're here to assist you with all your math-related queries and support needs.",
  keywords: [
    "Contact Mathify, Mathify support, math assistant help, AI math assistant contact, math problem support, customer support for Mathify, Mathify queries.",
  ],
};

const ContactPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1>Contact Page</h1>
    </div>
  );
};

export default ContactPage;
