const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const POST = async (req) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const { image: imageData, mimeType, question } = await req.json();

    // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");

    const fileData = {
      inlineData: {
        data: base64Data,
        mimeType,
      },
    };

    const result = await model.generateContent([question, fileData]);
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
};
