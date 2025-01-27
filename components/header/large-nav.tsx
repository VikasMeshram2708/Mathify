"use client";

import { largeNav } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LargeNav() {
  const path = usePathname();
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-4">
        {largeNav.map((item) => (
          <li
            key={item.href}
            className={cn(
              "px-4 py-2 rounded",
              path === item.href && "bg-muted"
            )}
          >
            <Link href={item.href} className="">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
