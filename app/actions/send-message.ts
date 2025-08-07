"use server"

import { z } from "zod"

// Environment variable for webhook URL - this keeps it secure on the server
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL
if (!DISCORD_WEBHOOK_URL) {
  throw new Error("Discord webhook URL not configured")
}

// Form validation schema
const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
})

type FormData = z.infer<typeof FormSchema>

export async function sendMessage(formData: FormData) {
  try {
    // Validate form data
    const validatedData = FormSchema.parse(formData)

    // Format message for Discord
    const payload = {
      embeds: [
        {
          title: "New Contact Form Submission",
          color: 0xdc2626, // Red color to match your theme
          fields: [
            {
              name: "Name",
              value: validatedData.name,
              inline: true,
            },
            {
              name: "Email",
              value: validatedData.email,
              inline: true,
            },
            {
              name: "Message",
              value: validatedData.message,
            },
          ],
          footer: {
            text: "Sent from Aarab's Portfolio",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    }

    // Send to Discord webhook
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Discord webhook error:", errorData)
      return { success: false, message: "Failed to send message. Please try again later." }
    }

    return { success: true, message: "Message sent successfully! I'll get back to you soon." }
  } catch (error) {
    console.error("Error sending message:", error)

    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Please check your form inputs.",
        errors: error.errors.map((e) => ({ field: e.path[0], message: e.message })),
      }
    }

    return { success: false, message: "An unexpected error occurred. Please try again later." }
  }
}
