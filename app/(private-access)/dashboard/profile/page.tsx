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
import { OctagonX, Star } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const ProfilePage: NextPage = () => {
  return (
    <div className="w-full h-screen p-5">
      <Card>
        <CardHeader>
          <section>
            <div className="bg-muted/30 p-4 rounded-xl">
              <Image
                src="https://is.gd/vWPmMj"
                alt="user-profile"
                width={100}
                height={100}
                className="bg-cover rounded-full border-4 border-purple-500 p-4"
              />
            </div>
          </section>
          <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            laboriosam.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <section className="flex gap-2">
            <Star />
            <p>300 Credits Left</p>
          </section>
          <Badge>xyz@gmail.com</Badge>
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
    </div>
  );
};

export default ProfilePage;
