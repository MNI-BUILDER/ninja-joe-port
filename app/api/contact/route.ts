import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Get the webhook URL from environment variables
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      return NextResponse.json({ success: false, message: "Webhook URL not configured" }, { status: 500 })
    }

    // Parse the request body
    const body = await request.json()
    const { name, email, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Format message for Discord
    const payload = {
      content: `New contact form submission from ${name} (${email}): ${message}`,
    }

    // Send to Discord webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ success: false, message: "An unexpected error occurred" }, { status: 500 })
  }
}
