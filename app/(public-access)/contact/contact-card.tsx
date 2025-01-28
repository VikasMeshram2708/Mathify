"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { actContact } from "@/data-access/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React, { useActionState, startTransition } from "react";
import { Terminal } from "lucide-react";
import { useFormStatus } from "react-dom";
import { useReCaptcha } from "next-recaptcha-v3";

export default function ContactCard() {
  const [state, myAction, isPending] = useActionState(actContact, null);
  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = async (formData: FormData) => {
    // Generate reCAPTCHA token
    const token = await executeRecaptcha("form_submit");

    // Append the reCAPTCHA token to the form data
    formData.append("recaptchaToken", token);

    // Dispatch the action within startTransition
    startTransition(() => {
      myAction(formData);
    });
  };

  return (
    <Card className="max-w-xl mx-auto shadow-lg">
      {state && state?.error && (
        <Alert
          variant={"destructive"}
          className="font-boldt text-red-500 max-w-lg my-3 mx-auto"
        >
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state && state?.success && (
        <Alert className="max-w-lg my-3 mx-auto">
          <Terminal className="h-4 w-4" />
          <AlertTitle className="text-lg font-bold">Success</AlertTitle>
          <AlertDescription>
            <span className="font-bold">
              Contact form submitted successfully.
            </span>
          </AlertDescription>
        </Alert>
      )}

      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          {isPending ? "Processing..." : "Contact Us"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <Input placeholder="First Name" name="firstName" />
            {state?.sanitizeError?.firstName && (
              <span className="text-sm text-red-500 font-bold">
                {state.sanitizeError.firstName}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Input placeholder="Last Name" name="lastName" />
            {state?.sanitizeError?.lastName && (
              <span className="text-sm text-red-500 font-bold">
                {state.sanitizeError.lastName}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Input placeholder="Email" name="email" />
            {state?.sanitizeError?.email && (
              <span className="text-sm text-red-500 font-bold">
                {state.sanitizeError.email}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Textarea rows={4} placeholder="Message" name="message" />
            {state?.sanitizeError?.message && (
              <span className="text-sm text-red-500 font-bold">
                {state.sanitizeError.message}
              </span>
            )}
          </div>

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
      {pending ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          <span>Processing...</span>
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
