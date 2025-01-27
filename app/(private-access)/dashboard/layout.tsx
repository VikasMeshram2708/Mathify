import DashboardLinks from "@/components/dashboard/dashboard-links";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className="container flex mx-auto max-w-screen-2xl">
        <DashboardLinks />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
