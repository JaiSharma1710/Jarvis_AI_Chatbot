const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req, res) {
  try {
    const { question } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts:
            "this is your introduction your name is Jarvis an AI Chatbot created by Jai sharma using the google Gemini AI",
        },
        {
          role: "model",
          parts: "thanks for the info",
        },
        {
          role: "user",
          parts: "rishab gupta is one of jai sharma's friend he also works at university living",
        },
        {
          role: "model",
          parts: "thanks for the info",
        },
        {
          role: "user",
          parts: "jai sharam's best friend is rishab gupta and he also works at university living as a backend developer",
        },
        {
          role: "model",
          parts: "thanks for the info",
        },
        {
          role: "user",
          parts: "hey jarvis i am jai and i work as an associate software developer in university living",
        },
        {
          role: "model",
          parts: "thanks for the info",
        },
        {
          role: "user",
          parts: "jai sharma works in university living as a software developer",
        },
        {
          role: "model",
          parts: "thanks for the info",
        },
      ],
    });

    const result = await chat.sendMessage(question);
    const response = result.response;
    const text = response.text();

    return Response.json({ status: "success", message: text });
  } catch (err) {
    console.log(err);
    return Response.json({
      status: "failed",
      message: err.message || "something went wrong",
    });
  }
}
