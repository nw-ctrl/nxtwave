export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("=== FORM SUBMITTED ===");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone);
    console.log("Service:", data.service);
    console.log("Budget:", data.budget);
    console.log("Message:", data.message);
    console.log("====================");

    // Check if env vars exist
    if (!process.env.RESEND_API_KEY) {
      console.log("⚠️ RESEND_API_KEY not set");
      return Response.json({ success: true, message: "Logged (no email - API key missing)" });
    }

    if (!process.env.ADMIN_EMAIL) {
      console.log("⚠️ ADMIN_EMAIL not set");
      return Response.json({ success: true, message: "Logged (no email - admin email missing)" });
    }

    console.log("✓ Sending email to:", process.env.ADMIN_EMAIL);

    // Send to admin
    const adminRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@nextwave.au",
        to: process.env.ADMIN_EMAIL,
        subject: `New Inquiry from ${data.name}`,
        html: `
          <h2>New Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Budget:</strong> ${data.budget}</p>
          <h3>Message:</h3>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    const adminData = await adminRes.json();
    console.log("Admin email response:", adminData);

    // Send confirmation to customer
    const custRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@nextwave.au",
        to: data.email,
        subject: "We received your inquiry - NextWave",
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${data.name},</p>
          <p>We've received your inquiry for <strong>${data.service}</strong> services.</p>
          <p>We'll get back to you within 24 hours.</p>
          <p>Best regards,<br><strong>NextWave Team</strong><br>ns@nextwave.au</p>
        `,
      }),
    });

    const custData = await custRes.json();
    console.log("Customer email response:", custData);

    return Response.json({ 
      success: true, 
      message: "Emails sent successfully"
    });

  } catch (error) {
    console.error("❌ Error:", error);
    return Response.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}
