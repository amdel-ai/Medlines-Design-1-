import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://medlines.io"),
  title: "Medlines — Medical Transcription & Billing",
  description: "Medical transcription and billing you can actually rely on.",
  icons: { icon: "/icon.png", shortcut: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "Medical Transcription & Billing You Can Actually Rely On",
    description: "HIPAA-Certified • Since 2005 • U.S.-Based Team",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Medlines medical transcription and billing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Transcription & Billing You Can Actually Rely On",
    description: "HIPAA-Certified • Since 2005 • U.S.-Based Team",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={manrope.variable}>{children}</body></html>;
}
