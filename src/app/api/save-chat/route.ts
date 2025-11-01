export async function POST(request: Request) {
  try {
    const data = await request.json();

    const emailContent = `
New Chat Started

Name: ${data.name}
Email: ${data.email}
Time: ${new Date(data.timestamp).toLocaleString()}

This chat has started. They will receive your response shortly.
    `;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@nextwave.au",
        to: process.env.ADMIN_EMAIL || "ns@nextwave.au",
        subject: `New Chat from ${data.name}`,
        html: emailContent,
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Failed to save chat" }, { status: 500 });
  }
}
