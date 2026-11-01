import { NextResponse } from "next/server";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  industry?: unknown;
  teamSize?: unknown;
  users?: unknown;
  message?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const industry = clean(body.industry, 120);
  const teamSize = clean(body.teamSize, 60);
  const users = clean(body.users, 20);
  const message = clean(body.message, 3000);

  if (!name || !company || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please complete all required fields with a valid email." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_EMAIL.");
    return NextResponse.json({ error: "Service unavailable." }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Ovelah Website <website@ovelah.com>",
        to,
        reply_to: email,
        subject: `New Demo Request from ${name} - ${company}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company}`,
          `Area of interest: ${industry}`,
          `Team size: ${teamSize}`,
          `Expected users: ${users || "Not given"}`,
          "",
          "Current operations:",
          message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      // Log the provider error on the server only. Never send it to the browser.
      console.error("Resend error:", res.status, await res.text());
      return NextResponse.json({ error: "Could not send your message." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
