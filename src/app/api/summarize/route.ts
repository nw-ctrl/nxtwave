// src/app/api/summarize/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PdfReader } from 'pdfreader';

if (!process.env.GOOGLE_API_KEY) {
  throw new Error("GOOGLE_API_KEY is not defined in .env.local");
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function getTextFromPdf(fileBuffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    let fullText = '';
    // --- THIS IS THE FIX ---
    // We cast 'new PdfReader(null)' to 'any' to resolve the TypeScript error
    // caused by the lack of official type definitions for this library.
    new (PdfReader as any)(null).parseBuffer(fileBuffer, (err: any, item: any) => {
      if (err) {
        reject(err);
      } else if (!item) {
        resolve(fullText);
      } else if (item.text) {
        fullText += item.text + ' ';
      }
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let text = '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      if (!file) { return NextResponse.json({ error: 'No file was uploaded.' }, { status: 400 }); }

      if (file.type === 'application/pdf') {
        const fileBuffer = Buffer.from(await file.arrayBuffer());
        text = await getTextFromPdf(fileBuffer);
      } else if (file.type === 'text/plain' || file.name.endsWith('.md')) {
        text = await file.text();
      } else {
        return NextResponse.json({ error: `Unsupported file type: ${file.type}.` }, { status: 400 });
      }

    } else if (contentType.includes('application/json')) {
      const { text: jsonText } = await req.json();
      text = jsonText;
    }

    if (!text) { return NextResponse.json({ error: 'Could not extract text from the source.' }, { status: 400 }); }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `Summarize the following text concisely: "${text}"`;
    const result = await model.generateContent(prompt);
    const summary = result.response.text();

    if (!summary) { return NextResponse.json({ error: 'The API did not return a valid summary.' }, { status: 500 }); }

    return NextResponse.json({ summary });

  } catch (error) {
    console.error('[API/SUMMARIZE] Error:', error);
    let errorMessage = 'Failed to process the request on the server.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
