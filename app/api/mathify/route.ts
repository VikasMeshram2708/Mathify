import { NextRequest } from "next/server";
import OpenAI from "openai";
import { mathifyQuestionSchema } from "@/models/mathify";
import { mathifyContent } from "@/data";

const client = new OpenAI({
  baseURL: "https://integrate.api.nvidia.com/v1",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const sanitize = mathifyQuestionSchema.safeParse(reqBody);

    if (!sanitize.success) {
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
      });
    }

    const { question } = sanitize.data;
    console.log('que', question);

    const response = await client.chat.completions.create({
      model: "nvidia/llama-3.1-nemotron-70b-instruct",
      messages: [
        { role: "system", content: mathifyContent },
        { role: "user", content: question }, // Fixed to use actual question
      ],
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(encoder.encode(content));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
