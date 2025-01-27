import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import googleImg from "@/public/header/image.png";

export default function AuthButton() {
  return (
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
  );
}
