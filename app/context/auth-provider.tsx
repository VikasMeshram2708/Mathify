"use client";

import React from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { config } from "dotenv";
config({ path: ".env.local" });

if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
  throw new Error("Google recaptcha site key not found");
}

// console.log('onr', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <KindeProvider>{children}</KindeProvider>
    </ReCaptchaProvider>
  );
}
