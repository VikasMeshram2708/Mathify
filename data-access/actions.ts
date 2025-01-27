"use server";
import OpenAI from "openai";
import { config } from "dotenv";
import { mathifyContent } from "@/data";
config({ path: ".env.local" });

if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
  throw new Error("NEXT_PUBLIC_OPENAI_API_KEY is not defined");
}

const client = new OpenAI({
  defaultHeaders: {
    'authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
  },
  baseURL: "https://integrate.api.nvidia.com/v1",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const mather = async (problem: problemType) => {
  console.log("pr-given", problem);
  try {
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: mathifyContent },
        {
          role: "user",
          content: problem,
        },
      ],
      model: "nvidia/llama-3.1-nemotron-70b-instruct",
      stream: true,
    });

    console.log("Streaming response:");
    const answers: string[] = [];
    for await (const chunk of response) {
      const answers = chunk.choices[0]?.delta?.content;

      if (answers) {
        process.stdout.write(answers); // Write the content to stdout
      }
    }
    // console.log("\nDone streaming response.");
    return answers.join("");
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

mather("who are you?").then(() => console.log("Finished execution."));
