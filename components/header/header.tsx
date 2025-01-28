import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { ModeToggle } from "../mode-toggle";
import { SparklesText } from "../ui/sparkles-text";

import MobileNav from "./mobile-nav";
import LargeNav from "./large-nav";
import { ProfileDropDown, SignIn, SignUp } from "../auth-button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export default async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const session = await isAuthenticated();

  const data: KindeUser = await getUser();

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
            {session ? (
              <ProfileDropDown data={data} />
            ) : (
              <>
                <SignIn />
                <SignUp />
              </>
            )}
          </section>
          <ModeToggle />
        </section>
      </div>
    </header>
  );
}
