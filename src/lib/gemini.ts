import { AstroPrediction } from '../types';

const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!geminiApiKey) {
  throw new Error('VITE_GEMINI_API_KEY is missing in environment variables. Please set it in your .env file.');
}

// Helper to extract JSON from markdown/code block
function extractJsonFromMarkdown(text: string): string {
  // Remove code block markers if present
  return text
    .replace(/^```json[\r\n]*/i, '')
    .replace(/^```[\r\n]*/i, '')
    .replace(/```\s*$/i, '')
    .trim();
}

// Fetch-based function for Gemini 2.0 Flash REST API
export async function fetchAstroNumPredictionREST(userData: {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;
  const prompt = `You are an expert in both astrology and numerology. Given the following birth details, provide a comprehensive, insightful, and actionable prediction that combines both disciplines. Use both Western astrology and Pythagorean numerology principles. Be specific, personal, and practical, but also include mystical and spiritual insights.\n\nUser Details:\n- Name: ${userData.name}\n- Birth Date: ${userData.birthDate}\n- Birth Time: ${userData.birthTime}\n- Birth Place: ${userData.birthPlace}\n\nReturn your answer as a JSON object with the following structure:\n{\n  "astrology": {\n    "sunSign": "...",\n    "moonSign": "...",\n    "risingSign": "...",\n    "lifePath": "Detailed life path and personality analysis based on astrology",\n    "career": "Career opportunities and professional path (astrological)",\n    "relationships": "Relationship insights and compatibility (astrological)",\n    "spiritual": "Spiritual growth and personal development (astrological)",\n    "lucky": "Lucky numbers, colors, and spiritual mantras (astrological)"\n  },\n  "numerology": {\n    "lifePathNumber": "...",\n    "expressionNumber": "...",\n    "soulUrgeNumber": "...",\n    "personalityNumber": "...",\n    "summary": "Detailed numerology reading, including strengths, challenges, and advice for the user"\n  },\n  "combinedAdvice": "A synthesis of both astrology and numerology, with practical steps and spiritual guidance for the user."\n}\n\nMake sure each field is filled with detailed, personalized content. Do not include any text outside the JSON object.`;

  const body = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  text = extractJsonFromMarkdown(text);
  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error('Failed to parse Gemini response');
  }
}

// Main function for generating advanced predictions
export async function generateAstroNumPrediction(userData: {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}) {
  return fetchAstroNumPredictionREST(userData);
}