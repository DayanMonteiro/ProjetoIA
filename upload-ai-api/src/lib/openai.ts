import "dotenv/config";
import { OpenAI } from "openai";

export const openai = new OpenAI({
  organization: "org-34eYpFlQHDLTD11rXjm1Dk6d",
  apiKey: process.env.OPENAI_KEY,
});
