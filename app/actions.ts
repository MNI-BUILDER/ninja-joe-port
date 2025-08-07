"use server"

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Get the webhook URL from environment variables properly
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) {
    return { success: false, message: "Contact form not configured" }
  }

  try {
    // Simple validation
    if (!name || !email || !message) {
      return { success: false, message: "All fields are required" }
    }

    // Create a simple message payload
    const payload = {
      content: `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
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
      return { success: false, message: "Failed to send message" }
    }

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending message:", error)
    return { success: false, message: "An error occurred while sending your message" }
  }
}
