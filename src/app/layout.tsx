import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme/Provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InstaFlow – Instagram DM Automation Made Easy",
  description:
    "Automate, organize, and scale your Instagram direct messaging with InstaFlow. Smart workflows, instant replies, lead capture, and more — built for creators, brands, and businesses.",
  keywords: [
    "Instagram DM automation",
    "InstaFlow",
    "Instagram chatbot",
    "Auto reply Instagram",
    "Instagram leads",
    "DM marketing tool",
    "Instagram outreach automation",
    "Instagram autoresponder",
  ],
  openGraph: {
    title: "InstaFlow – Instagram DM Automation Made Easy",
    description:
      "Powerful and intuitive Instagram DM automation tool for creators, businesses, and marketers. Boost engagement and save time with AI-driven workflows.",
    url: "https://yourdomain.com",
    siteName: "InstaFlow",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // ideally 1200x630
        width: 1200,
        height: 630,
        alt: "InstaFlow Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaFlow – Instagram DM Automation Made Easy",
    description:
      "Smart, fast, and scalable Instagram DM automation for brands and creators.",
    images: ["https://yourdomain.com/og-image.png"],
    creator: "@your_twitter_handle",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute={"class"}
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
