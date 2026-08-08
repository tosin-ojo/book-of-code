import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../src/index.css";
import "../src/App.css";
import "../src/components/Back/Back.css";
import "../src/components/Cards/Cards.css";
import "../src/components/Cover/Cover.css";
import "../src/components/Front/Front.css";
import "../src/components/Mobile/Mobile.css";
import "../src/components/Page/Page.css";

const title = "Book Of Codes";
const description =
  "Oluwatosin Ojo is a software engineer specializing in building web solutions.";
const siteUrl = "https://book-of-code-three.vercel.app/";
const imageUrl = "https://book-of-code-three.vercel.app/og.png";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  openGraph: {
    title,
    description,
    siteName: title,
    url: siteUrl,
    type: "website",
    images: [imageUrl],
  },
  twitter: {
    card: "summary_large_image",
    site: "@t0sin0j0",
    creator: "@t0sin0j0",
    title,
    description,
    images: [
      {
        url: imageUrl,
        alt: description,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#020c1b",
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
