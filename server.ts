import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini API client
  const apiKey = process.env.GEMINI_API_KEY || "AIzaSyCLKX2tohQTHF9Gk06XqqlT-tXUjVSOYBU";
  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Chat API endpoint
  app.post("/api/chat", async (req: express.Request, res: express.Response) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "Invalid messages format" });
        return;
      }

      // Format messages history cleanly
      const promptParts = messages.map((m: any) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join("\n");
      
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `You are 'FarmsFriend AI', the official AI Assistant for FarmsFriend.com. You are professional, rustically friendly, and knowledgeable about Pennsylvania (PA) agriculture, farming, crops, soils, fertilizers, and tools.

Business Context:
- FarmsFriend.com is based in Pennsylvania, USA
- FarmsFriend Phone: 484-478-1719
- FarmsFriend Emails: krishnakishore.t@gmail.com, kthanneru@ksquaregroup.org
- Services include: Seeds & Crop Supplies, Fertilizers & Nutrients, Farming Equipment Support, Irrigation Solutions, Livestock & Farm Essentials, Agricultural Consulting.

Conversation history:
${promptParts}
Assistant:`,
        config: {
          systemInstruction: "You are the FarmsFriend AI Assistant. Keep answers concise, highly structured (using short bullets if helpful), rustically friendly yet professional, and extremely helpful. Always give local PA context if applicable. Promote FarmsFriend's services and invite them to call 484-478-1719 or write to krishnakishore.t@gmail.com.",
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to communicate with AI model. Please try again." });
    }
  });

  // Contact API endpoint (to simulate a real inquiry database capture)
  app.post("/api/contact", (req: express.Request, res: express.Response) => {
    const { name, email, phone, message } = req.body;
    console.log(`[Contact Inquiry received] Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
    res.json({ success: true, message: "Thank you for contacting FarmsFriend! We will get in touch with you shortly." });
  });

  // Request Quote API endpoint
  app.post("/api/quote", (req: express.Request, res: express.Response) => {
    const { name, email, phone, service, message } = req.body;
    console.log(`[Quote Request received] Name: ${name}, Email: ${email}, Phone: ${phone}, Service: ${service}, Message: ${message}`);
    res.json({ success: true, message: "Your quote request has been captured! Our local Pennsylvanian experts will contact you soon." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the compiled build from dist/
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[FarmsFriend Server] Server running on http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || 'development'} mode.`);
  });
}

startServer();
