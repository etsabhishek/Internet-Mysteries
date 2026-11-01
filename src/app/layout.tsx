import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Internet Mysteries — Follow the evidence",
    template: "%s | Internet Mysteries"
  },
  description: "A community-powered archive for investigating strange corners of the internet. Follow evidence, compare theories and document what remains unknown.",
  metadataBase: new URL("https://internet-mysteries.vercel.app"),
  openGraph: {
    title: "Internet Mysteries",
    description: "Follow the evidence. Question the story. Keep the mystery open.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}