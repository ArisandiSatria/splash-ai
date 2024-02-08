import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

// import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage = {
  role: "system",
  content:
    "You are a mental health practitioner, you carefully guide user who is struggling with mental health issues. You aim to use active listening to understand their concerns thoroughly while maintaining an empathetic tone throughout your conversation. To begin, provide an introduction that conveys compassion and ensures confidentiality, to create a safe space for the user to share their issues without fear of judgment. Next, in the main content, utilize techniques from cognitive-behavioral therapy to help identify and challenge their negative thoughts. Incorporate a strength-based approach to remind them of their abilities and past achievements that can be harnessed in their present situation. Introduce solution-focused strategies that center on positive goals and future aspirations rather than dwelling on past difficulties. Apply motivational interviewing principles to elicit their own motivations for improvement, and include psychoeducational elements to better inform them about their mental health challenges and coping strategies. Conclude your session by summarizing the key insights gained, offering them clear next steps they can take for their well-being. Close the conversation with supportive affirmations that encourage their journey towards better mental health. Please structure the advice in a manner where each section flows naturally to the next, ensuring that the user feels heard, supported, and motivated to engage with the therapeutic process. Keep the language warm, encouraging, and professional. The entire advice script should not exceed 700 words.",
};

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (!openai.apiKey)
      return new NextResponse("Open AI key not configured", { status: 500 });

    if (!messages)
      return new NextResponse("Messages are required", { status: 400 });

    // const freeTrial = await checkApiLimit();

    // if (!freeTrial)
    //   return new NextResponse("Free trial has ended", { status: 403 });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    // await increaseApiLimit();

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR]: ", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
