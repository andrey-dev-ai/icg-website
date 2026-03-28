import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Simple rate limiting
const ipRequests = new Map<string, { count: number; resetAt: number }>();

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, "\\$&");
}

export async function POST(req: NextRequest) {
  // Rate limit: 3 requests per 5 minutes per IP
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const limit = ipRequests.get(ip);

  if (limit && now < limit.resetAt) {
    if (limit.count >= 3) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }
    limit.count++;
  } else {
    ipRequests.set(ip, { count: 1, resetAt: now + 5 * 60 * 1000 });
  }

  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const text = [
      "📩 *Нова заявка з сайту ICG*",
      "",
      `👤 *Ім'я:* ${escapeMarkdown(name)}`,
      `📞 *Телефон:* ${escapeMarkdown(phone)}`,
      email ? `✉️ *Email:* ${escapeMarkdown(email)}` : "",
      "",
      "💬 *Повідомлення:*",
      escapeMarkdown(message),
    ]
      .filter(Boolean)
      .join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "MarkdownV2",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const err = await telegramResponse.text();
      console.error("Telegram API error:", err);
      throw new Error("Telegram API error");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
