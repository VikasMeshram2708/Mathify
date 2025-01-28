"use server";

import prisma from "@/lib/prisma";
import { ContactSchema } from "@/models/contact";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";

export async function actContact(prevState: unknown, formData: FormData) {
  const recaptchaToken = formData.get("recaptchaToken") as string;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    { method: "POST" }
  );

  const catpchaData = await response.json();

  if (!catpchaData.success) {
    return { error: "reCAPTCHA validation failed" };
  }

  const raw = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  // Sanity check
  const sanitize = ContactSchema.safeParse(raw);

  if (!sanitize.success) {
    const er = sanitize.error.flatten().fieldErrors;
    return {
      sanitizeError: {
        firstName: er.firstName,
        lastName: er.lastName,
        email: er.email,
        message: er.message,
      },
    };
  }

  const { email, firstName, lastName, message } = sanitize.data;

  const alreadyExist = await prisma.contact.findFirst({
    where: {
      email,
    },
  });

  if (alreadyExist) {
    return {
      success: false,
      error: "Email already exist",
    };
  }

  try {
    await prisma.contact.create({
      data: {
        firstName,
        lastName,
        email,
        message,
      },
    });

    revalidatePath("/contact");

    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      const er = error.message;
      return {
        error: er,
      };
    }
    return {
      error: `Something went wrong. Please try again. ${error}`,
    };
  }
}
