"use server";
import OpenAI from "openai";
import { config } from "dotenv";
config({ path: ".env.local" });

if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not defined");
}

const client = new OpenAI({
  baseURL: "https://integrate.api.nvidia.com/v1",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const mather = async () => {
  try {
    const response = await client.chat.completions.create({
      messages: [{ role: "user", content: "Hello, how are you?" }],
      model: "nvidia/llama-3.1-nemotron-70b-instruct",
      stream: true,
    });

    console.log("Streaming response:");
    for await (const chunk of response) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        process.stdout.write(content); // Write the content to stdout
      }
    }
    console.log("\nDone streaming response.");
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

mather().then(() => console.log("Finished execution."));
