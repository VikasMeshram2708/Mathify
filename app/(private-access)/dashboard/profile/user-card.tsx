import React from "react";
import { OctagonX, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

type UserCardProps = {
  data: KindeUser;
};
export default function UserCard({ data }: UserCardProps) {
  const { email, picture, given_name, family_name } = data;
  return (
    <Card>
      <CardHeader>
        <section>
          <div className="bg-muted/30 p-4 rounded-xl">
            <Image
              src={picture as string}
              alt={given_name as string}
              width={100}
              height={100}
              className="bg-cover rounded-full border-4 border-purple-500 p-4"
            />
          </div>
        </section>
        <CardTitle className="flex items-center gap-1">
          <p className="capitalize">{given_name}</p>
          <p className="capitalize">{family_name}</p>
        </CardTitle>
        <CardDescription>
          <Badge>{email}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="flex gap-2">
          <Star />
          <p>300 Credits Left</p>
        </section>
      </CardContent>
      <CardFooter>
        <Button variant={"destructive"}>
          <span>
            <OctagonX />
          </span>
          <span>Delete Account</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
