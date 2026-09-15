import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    // 1. Initialize Resend INSIDE the function so Cloudflare can read the Env Var
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const body = await request.json();
    const { name, email, company, industry, teamSize, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Ovelah Website <website@ovelah.com>", 
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email,
      subject: `New Demo Request from ${name} - ${company}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nIndustry: ${industry}\nTeam Size: ${teamSize}\n\nCurrent Operations / Message:\n${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
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