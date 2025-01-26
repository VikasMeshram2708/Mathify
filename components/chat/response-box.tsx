import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { X } from "lucide-react";

type responseBoxProps = {
  showResponse: boolean;
  handleClose: () => void;
  content: string;
};

export default function ResponseBox({
  showResponse,
  handleClose,
  content,
}: responseBoxProps) {
  return (
    <div className="absolute inset-0 -top-10 shadow shadow-gray-500  bg-background h-80 p-4 rounded-xl container mt-10 mx-auto max-w-screen-2xl">
      {!showResponse ? (
        <section className="grid gap-4">
          <Skeleton className="h-8 w-[350px]" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </section>
      ) : (
        <section className="">
          <Button
            onClick={handleClose}
            variant={"destructive"}
            className="absolute right-5 top-5"
          >
            <X size={36} />
          </Button>
          <article className="p-4 mt-14">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Title</h1>
            <p className="text-lg">{content}</p>
          </article>
        </section>
      )}
    </div>
  );
}
