
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, PROJECTS, SKILLS, AWARDS } from "./constants";

const RESUME_CONTEXT = `
You are an AI assistant representing K J Nikhil, a professional Prompt Engineer and Automation Specialist.
Here is Nikhil's resume data for your reference:

Name: ${RESUME_DATA.name}
Title: ${RESUME_DATA.title}
Summary: ${RESUME_DATA.summary}
Experience: 4.5 years (since June 2021) at Accenture.
Education: ${RESUME_DATA.education.degree} from ${RESUME_DATA.education.college} (${RESUME_DATA.education.graduation}).

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.name}: ${p.role} for ${p.client}. ${p.description}`).join('\n')}

Awards:
${AWARDS.map(a => `- ${a.title} by ${a.organization} (${a.date})`).join('\n')}

Guidelines:
1. Be professional, polite, and enthusiastic about Nikhil's skills.
2. If asked about contact info, provide: Email: ${RESUME_DATA.email}, Mobile: ${RESUME_DATA.mobile}.
3. Keep responses concise and focused on the resume data.
4. If asked something not in the resume, politely steer the conversation back to his professional skills or suggest contacting him.
5. Highlight his expertise in Gemini AI, RAG systems, and Agentic AI workflows.
`;

export const chatWithResume = async (message: string) => {
  // Initialize GoogleGenAI right before the call to ensure the latest API key from the environment is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: RESUME_CONTEXT,
      },
    });
    // Use the .text property directly to get the generated content.
    return response.text || "I couldn't generate a response. Please try asking again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please try again later or reach out to Nikhil directly.";
  }
};
