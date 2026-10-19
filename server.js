
import express from "express";
import { GoogleGenAI } from "@google/genai";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json({ limit: "20kb" }));
app.use(express.static(__dirname));

app.post("/api/chat", async (req, res) => {
  const message = req.body?.message;

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Escribí una pregunta." });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(503).json({
      error: "Falta configurar GEMINI_API_KEY."
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY
    });

    const response = await ai.models.generateContent({
     model: "gemini-3.8-flash",
      contents: message.trim(),
      config: {
        systemInstruction:
          "Sos un asistente útil integrado en una calculadora. Respondé en español."
      }
    });

    res.json({
      reply: response.text || "No se recibió una respuesta."
    });
  } catch (error) {
    console.error("Error completo de Gemini:", error);
    res.status(502).json({
      error: "Gemini no pudo responder. Revisá la clave y el modelo."
    });
  }
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`Calculadora lista en http://localhost:${port}`);
});

