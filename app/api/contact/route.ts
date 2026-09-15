import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, industry, teamSize, message } = body;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Ovelah Website <website@ovelah.com>", // Make sure this is verified!
        to: process.env.CONTACT_EMAIL,
        reply_to: email,
        subject: `New Demo Request from ${name} - ${company}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nIndustry: ${industry}\nTeam Size: ${teamSize}\n\nCurrent Operations:\n${message}`,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: data }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    // THIS IS THE NEW PART: Spitting out the exact raw error
    console.error("Edge Function Error:", error);
    return NextResponse.json(
      { 
        raw_error_message: error.message || "No error message", 
        raw_error_name: error.name || "Unknown Name" 
      },
      { status: 500 }
    );
  }
}