"use client";

import React from "react";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "./ui/button";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SignIn() {
  return (
    <LoginLink className={buttonVariants({ variant: "outline" })}>
      Sign In
    </LoginLink>
  );
}

export function SignUp() {
  return (
    <RegisterLink className={buttonVariants({ variant: "default" })}>
      Sign Up
    </RegisterLink>
  );
}

export function ProfileDropDown({ data }: { data: KindeUser }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={data.picture as string}
            alt={data.given_name as string}
          />
          <AvatarFallback>{data.given_name?.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/dashboard/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/dashbaord/billing">Billing</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type SignOutProps = {
  className?: string;
};
export function SignOut({ className }: SignOutProps) {
  return (
    <LogoutLink
      className={cn(buttonVariants({ variant: "destructive" }), className)}
    >
      <LogOut />
      Logout
    </LogoutLink>
  );
}
