import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const DashboardHomePage: NextPage = () => {
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
