export async function POST(request: Request) {
  try {
    const data = await request.json();

    const emailContent = `
New Message from Chat

From: ${data.name} (${data.email})
Phone: ${data.phone}

Message:
${data.userMessage}

Time: ${new Date(data.timestamp).toLocaleString()}
    `;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@nextwave.au",
        to: process.env.ADMIN_EMAIL || "admin@nextwave.au",
        subject: `New message from ${data.name}`,
        html: emailContent,
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Failed to save message" }, { status: 500 });
  }
}
