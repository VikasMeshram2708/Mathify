import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextPage } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const DashboardHomePage: NextPage = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="h-screen p-5">
      <header>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center">
          <Link href="/">Dashboard</Link>
        </h1>
      </header>
    </div>
  );
};

export default DashboardHomePage;
