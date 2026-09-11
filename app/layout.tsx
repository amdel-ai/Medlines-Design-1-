import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://medlines.io"),
  title: "Medlines Transcription | Human-Verified Medical Transcription",
  description: "AI-assisted, human-verified medical and medicolegal transcription with next-morning standard turnaround and direct EMR/EHR integration.",
  keywords: ["Medlines Transcription", "Medical Transcription", "Human-Verified Medical Transcription", "AI-Assisted Medical Transcription", "Medicolegal Transcription", "EMR/EHR Transcription"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/icon.png" },
  openGraph: { title: "Medlines Transcription | AI for Speed. Humans for Accuracy.", description: "Human-verified medical transcription from 40+ certified MTs, with next-morning standard turnaround.", siteName: "Medlines Transcription", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Medlines Transcription — AI for speed. Humans for accuracy." }] },
  twitter: { card: "summary_large_image", title: "Medlines Transcription | AI for Speed. Humans for Accuracy.", description: "Human-verified medical transcription from 40+ certified MTs.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
