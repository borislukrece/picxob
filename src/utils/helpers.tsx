import { Gallery } from "./interface";
import crypto from "crypto";

/**
 * Random prompt for home page.
 * @returns string
 */
export function getRandomPrompt() {
  const phrases = [
    "What would you like to imagine today?",
    "What type of image would you like to create?",
    "Tell me, what do you wish to design today?",
    "What creation inspires you today?",
    "Do you have an image idea in mind?",
    "What is your artistic project for the day?",
    "What do you want to explore visually?",
    "Share your vision for a new creation!",
    "What story would you like to see illustrated?",
    "What elements would you like to combine in your image?",
    "How do you envision your next artwork?",
    "Do you have a theme in mind for your creation?",
    "What do you want to highlight in your image?",
    "What atmosphere do you want to create today?",
    "What details would you like to include in your design?",
  ];

  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

/**
 * Format a date string to a human-readable format
 * @param dateString string
 * @returns string
 */
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-EN", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
}

/**
 * Download generated images
 * @param showImg Gallery
 */
export const handleDownload = (showImg: Gallery) => {
  if (!showImg) return;

  const imageUrl = showImg.name.startsWith("http")
    ? showImg.name
    : process.env.NEXT_PUBLIC_APP_URL + "/images/" + showImg.name;

  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = showImg.name;
  link.target = "_blank";
  link.style.display = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Generate UUID string
 * @returns string
 */
export function generateUUID() {
  return `${crypto.randomBytes(16).toString("hex")}`;
}

export function APP_URL() {
  if (process.env.NEXT_PUBLIC_APP_ENV === "local") {
    return process.env.NEXT_PUBLIC_APP_URL_LOCAL;
  } else {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
}

export function APP_ENDPOINT() {
  if (process.env.NEXT_PUBLIC_APP_ENV === "local") {
    return process.env.NEXT_PUBLIC_DB_ENDPOINT_LOCAL;
  } else {
    return process.env.NEXT_PUBLIC_DB_ENDPOINT;
  }
}
