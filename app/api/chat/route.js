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
          parts: "this is about rishab gupta he is jai sharmas friend",
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
