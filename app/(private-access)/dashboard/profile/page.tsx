import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextPage } from "next";
import { redirect } from "next/navigation";
import React from "react";
import UserCard from "./user-card";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

const ProfilePage: NextPage = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  
  if (!(await isAuthenticated())) {
    redirect("/api/auth/signin");
  }

  const data:KindeUser = await getUser();
  
  return (
    <div className="w-full h-screen p-5">
      <UserCard data={data}/>
    </div>
  );
};

export default ProfilePage;
