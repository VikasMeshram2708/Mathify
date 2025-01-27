import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import googleImg from "@/public/header/image.png";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ModeToggle } from "../mode-toggle";
import { SparklesText } from "../ui/sparkles-text";

import MobileNav from "./mobile-nav";
import LargeNav from "./large-nav";

export default function Header() {
  return (
    <header className="border-b shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <h1 className="relative w-64">
          <Link href="/">
            <SparklesText text="Mathify" />
          </Link>
          <Badge className="text-sm absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600">
            AI
          </Badge>
        </h1>

        <section className="flex gap-8">
          {/* Mobile Nav */}
          <MobileNav />

          {/* Large Nav */}
          <LargeNav />

          <section className="hidden lg:flex items-center gap-4">
            <Button type="button">
              <span>
                <Image
                  src={googleImg}
                  alt="Authentication with Google"
                  width={25}
                  height={25}
                  priority
                  className="bg-cover"
                />
              </span>
              Sign in with Google
            </Button>
          </section>
          <ModeToggle />
        </section>
      </div>
    </header>
  );
}
