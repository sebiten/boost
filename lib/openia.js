import OpenAI from "openai-api";

export async function askGpt(prompt) {
  const openai = new OpenAI(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
  const response = await openai.complete({
    engine: "davinci",
    prompt: prompt,
    temperature: 0.9,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
  
  });
  return response.data.choices[0].text;
}
