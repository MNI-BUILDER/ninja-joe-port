export function getGreeting(): string {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return "おはよう" // Good morning
  } else if (hour >= 12 && hour < 17) {
    return "こんにちは" // Good afternoon
  } else if (hour >= 17 && hour < 22) {
    return "こんばんは" // Good evening
  } else {
    return "おやすみ" // Good night
  }
}
