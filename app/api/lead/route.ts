import { NextResponse } from "next/server";

/**
 * Lead intake. Validates the payload and forwards it to a GoHighLevel inbound
 * webhook (set GHL_WEBHOOK_URL in the environment). Until that's configured the
 * route still responds gracefully so the UI can show a sensible message.
 */

export const runtime = "nodejs";

type LeadPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  agency?: string;
  message?: string;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: LeadPayload;
  try {
    data = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const firstName = data.firstName?.trim();
  const lastName = data.lastName?.trim();
  const email = data.email?.trim();

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { ok: false, message: "Please fill in your name and email." },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  const lead = {
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    email,
    phone: data.phone?.trim() ?? "",
    agency: data.agency?.trim() ?? "",
    message: data.message?.trim() ?? "",
    source: data.source ?? "website",
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.GHL_WEBHOOK_URL;

  // Not wired up yet: don't lose the lead silently — log it and tell the user
  // honestly rather than faking success.
  if (!webhook) {
    console.warn("[lead] GHL_WEBHOOK_URL not set; lead not forwarded:", lead);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Form isn't connected to a backend yet. Set GHL_WEBHOOK_URL to start receiving leads.",
      },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      console.error("[lead] GHL webhook returned", res.status);
      return NextResponse.json(
        { ok: false, message: "We couldn't submit your details. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[lead] GHL webhook error", err);
    return NextResponse.json(
      { ok: false, message: "We couldn't reach our servers. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
