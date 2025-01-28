import { Metadata, NextPage } from "next";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MathChat from "@/components/chat/math-chat";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Chat with Mathify - Your AI Math Solver in Real-Time",
  description:
    "Chat live with Mathify to solve your math problems in real-time. Get instant, step-by-step solutions for arithmetic, algebra, calculus, and more.",
  keywords: [
    "Chat with Mathify, live math solver, real-time math solutions, math chat AI, instant math help, solve math problems live, AI-powered math tutor.",
  ],
};

const ChatPage: NextPage = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-screen-2xl px-6 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/chat">Chat</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Chat Box  */}
        <MathChat />
      </div>
    </div>
  );
};

export default ChatPage;
