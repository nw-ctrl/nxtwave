export async function POST(request: Request) {
  try {
    const data = await request.json();

    const adminEmailContent = `
<h2>New Service Inquiry - NextWave</h2>

<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>

<p><strong>Service Interested:</strong> ${data.service}</p>
<p><strong>Budget:</strong> ${data.budget}</p>

<h3>Message:</h3>
<p>${data.message.replace(/\n/g, '<br>')}</p>

<p><strong>Time:</strong> ${new Date().toLocaleString()}</p>

<hr>
<p>Reply to: ${data.email}</p>
    `;

    const customerEmailContent = `
<h2>Thank you for your inquiry!</h2>

<p>Hi ${data.name},</p>

<p>We've received your request for <strong>${data.service}</strong> services.</p>

<p>We'll review your project details and get back to you within 24 hours at this email address.</p>

<p>In the meantime, feel free to explore our services or reach out if you have any questions.</p>

<p>Best regards,<br><strong>NextWave Team</strong></p>

<p>---<br>Email: ns@nextwave.au</p>
    `;

    // Send admin notification
    if (process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "noreply@nextwave.au",
          to: process.env.ADMIN_EMAIL,
          subject: `New Inquiry from ${data.name} - ${data.service}`,
          html: adminEmailContent,
        }),
      });
    }

    // Send customer confirmation
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "noreply@nextwave.au",
          to: data.email,
          subject: "We received your inquiry - NextWave",
          html: customerEmailContent,
        }),
      });
    }

    console.log("Inquiry received and emails sent:", data);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
