import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { mobLinks } from "@/data";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { SignIn, SignOut, SignUp } from "../auth-button";

export default async function MobileNav() {
  const { isAuthenticated } = getKindeServerSession();
  const session = await isAuthenticated();

  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "default" }),
          "block lg:hidden"
        )}
      >
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="text-4xl font-bold text-center py-10">
            Mathify
          </SheetTitle>
          <SheetDescription
            asChild
            className="bg-muted/30 rounded-xl flex flex-col items-start gap-4"
          >
            <nav>
              {mobLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-lg"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          {session ? (
            <SignOut className="w-full" />
          ) : (
            <>
              <SignIn />
              <SignUp />
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
