import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tourly - Create Your Own Tours With Ease",
  description: "Tourly helps you create, customize, and share personalized tours for travelers around the world. Start building your perfect tour experience today.",
  keywords: "tour creation, travel planning, custom tours, travel itinerary, tour builder, travel experience",
  authors: [{ name: "Tourly Team" }],
  creator: "Tourly",
  publisher: "Tourly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tourly.com",
    title: "Tourly - Create Your Own Tours With Ease",
    description: "Create and customize personalized tours for travelers around the world",
    siteName: "Tourly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tourly - Create Your Own Tours With Ease",
    description: "Create and customize personalized tours for travelers around the world",
    creator: "@tourly",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "hsl(262.1 83.3% 57.8%)",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className} antialiased`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="tourly-theme"
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
      <GoogleOneTap />
    </ClerkProvider>
  );
}
