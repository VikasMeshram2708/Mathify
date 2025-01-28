import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "./context/auth-provider";
// import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathify: AI Math Assistant for Solving All Mathematical Problems",
  description:
    "Discover Mathify, your friendly AI math assistant. Solve equations, master calculus, geometry, statistics, and more with step-by-step explanations and clear insights. Perfect for students and professionals!",
  keywords: [
    "AI math assistant, solve mathematical equations, step-by-step math solutions, calculus solver, algebra solver, geometry problem solver, math learning AI, statistics problem solver, math tutoring AI, solve math problems AI.",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        {/* <Script src="https://www.google.com/recaptcha/api.js"></Script> */}
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
