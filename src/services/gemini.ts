const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
if (!GEMINI_API_KEY) throw new Error('Missing VITE_GEMINI_API_KEY in .env.local');
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `
You are a smart task scheduling assistant. The user will describe tasks in plain English.
Extract tasks and return ONLY a valid JSON array. No markdown, no explanation.

Each task must follow this exact shape:
[
  {
    "title": "short task title",
    "description": "more detail if available, else empty string",
    "dueDate": "YYYY-MM-DD",
    "priority": "Low" | "Medium" | "High" | "Critical",
    "status": "Pending",
    "reminder": true | false
  }
]

Rules:
- If the user mentions a day like "tomorrow", "Friday", or "next week", convert it to a real date relative to today (${new Date().toISOString().split('T')[0]}).
- If no date is mentioned, set dueDate to 3 days from today.
- If no priority is mentioned, default to "Medium".
- If the user says "remind me", set reminder to true.
- Always return an array, even for a single task.
- Return ONLY the JSON array. No other text.
`;

export async function scheduleTasksWithAI(userMessage: string) {
  const response = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            { text: SYSTEM_PROMPT + '\n\nUser: ' + userMessage }
          ]
        }
      ]
    })
  });

  if (!response.ok) throw new Error('Gemini API request failed');

  const data = await response.json();
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

  // Strip markdown code fences if Gemini wraps in ```json
  const clean = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}