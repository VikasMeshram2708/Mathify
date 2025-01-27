import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '../ui/button';
import { LogOut, Menu } from 'lucide-react';
import Link from 'next/link';
import { mobileNav } from '@/data';

export default function MobileNav() {
  return (
    <Sheet>
          <SheetTrigger className={cn(buttonVariants({ variant: "default" }), "block lg:hidden")}>
            <Menu size={36} />
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between">
            <SheetHeader>
              <SheetTitle className="text-4xl font-bold text-center py-10">
                Mathify
              </SheetTitle>
              <SheetDescription className="bg-muted/30 rounded-xl flex flex-col items-start gap-4">
                {mobileNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(buttonVariants({ variant: "ghost" }), "text-lg")}
                  >
                    {item.title}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <Button className="w-full" variant={"destructive"}>
                Sign out
                <span>
                  <LogOut />
                </span>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
  )
}
