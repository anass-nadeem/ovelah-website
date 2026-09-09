import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // 1. Destructure the new fields from the incoming request
    const { name, email, company, industry, teamSize, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Ovelah Website <website@ovelah.com>", // Must be a verified domain in Resend
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email,
      subject: `New Demo Request from ${name} - ${company}`,
      // 2. Add the new fields to the email body
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nIndustry: ${industry}\nTeam Size: ${teamSize}\n\nCurrent Operations / Message:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}