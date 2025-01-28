"use client";
import { dashboardLinks } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardLinks() {
  const path = usePathname();
  return (
    <ul className="h-screen flex flex-col gap-4 w-80 bg-muted dark:bg-muted/30 p-4">
      {dashboardLinks.map((item) => (
        <li
          key={item.title}
          className={cn(
            "px-4 p-2 rounded-xl",
            path === item.href && "bg-muted"
          )}
        >
          <Link href={item.href} className="flex items-center gap-2">
            {item.icon}
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
