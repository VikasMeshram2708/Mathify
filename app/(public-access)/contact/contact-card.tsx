"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { actContact } from "@/data-access/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React, { useActionState } from "react";
import { Terminal } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function ContactCard() {
  const [state, myAction, isPending] = useActionState(actContact, null);
  return (
    <Card className="max-w-xl mx-auto">
      {state && state?.success && (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Contact Form Submitted Successfull.
          </AlertDescription>
        </Alert>
      )}

      {state && state?.error && (
        <Alert variant={"destructive"} className="font-boldt text-red-500">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      <CardHeader>
        <CardTitle className="text-center">
          {isPending ? "Processing..." : "Contact Us"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={myAction} className="flex flex-col gap-4">
          <Input placeholder="First Name" name="firstName" />
          {state?.sanitizeError && (
            <span className="text-sm text-red-500 font-bold">
              {state.sanitizeError.firstName}
            </span>
          )}
          <Input placeholder="Last Name" name="lastName" />
          {state?.sanitizeError && (
            <span className="text-sm text-red-500 font-bold">
              {state.sanitizeError.lastName}
            </span>
          )}
          <Input placeholder="Email" name="email" />
          {state?.sanitizeError && (
            <span className="text-sm text-red-500 font-bold">
              {state.sanitizeError.email}
            </span>
          )}
          <Textarea rows={4} placeholder="Message" name="message" />
          {state?.sanitizeError && (
            <span className="text-sm text-red-500 font-bold">
              {state.sanitizeError.message}
            </span>
          )}
          <SubmitBtn />
        </form>
      </CardContent>
    </Card>
  );
}

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "processing..." : "Submit"}
    </Button>
  );
}
