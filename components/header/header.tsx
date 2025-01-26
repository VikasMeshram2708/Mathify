import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import googleImg from "@/public/header/image.png";
import Image from "next/image";
import { Badge } from "../ui/badge";

export default function Header() {
  return (
    <header className="border-b shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <h1 className="text-lg md:text-2xl relative w-[10.5rem] lg:text-3xl xl:text-4xl font-bold">
          <Link href="/">Mathify</Link>
          <Badge className="text-sm absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600">AI</Badge>
        </h1>
        <section>
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
      </div>
    </header>
  );
}
