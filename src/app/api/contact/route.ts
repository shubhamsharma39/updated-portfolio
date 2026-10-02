import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER || process.env.GMAIL_USER;
    const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || emailUser || "sharmashubham99745@gmail.com";

    if (!emailUser || !emailPass) {
      console.warn("EMAIL_USER or EMAIL_PASS not configured in environment variables.");
      return NextResponse.json(
        {
          error: "Email service is not configured. Please set EMAIL_USER and EMAIL_PASS in your environment (.env or docker-compose.yml).",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${emailUser}>`,
      replyTo: email,
      to: emailTo,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b0f19; color: #f1f5f9; padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
          <div style="border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #00f0ff; margin: 0; font-size: 20px;">📬 New Message from Portfolio</h2>
            <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 14px;">Someone submitted the contact form on your portfolio.</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 14px; width: 90px; vertical-align: top;"><strong>Sender:</strong></td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 14px; vertical-align: top;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #38bdf8; font-size: 14px;"><a href="mailto:${email}" style="color: #00f0ff; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 14px; vertical-align: top;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">${subject}</td>
            </tr>
          </table>

          <div style="background-color: #010314; padding: 18px; border-radius: 8px; border: 1px solid rgba(0, 240, 255, 0.2);">
            <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message Body:</p>
            <div style="color: #e2e8f0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center; color: #64748b; font-size: 12px;">
            Sent directly from Shubham Sharma's Portfolio Contact Form
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
