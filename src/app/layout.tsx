import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/shared/SkipLink";
import { CursorAura } from "@/components/shared/CursorAura";
import { business } from "@/config/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "Medical Billing and Revenue Cycle Management | PracticeCareSource",
    template: "%s | PracticeCareSource",
  },
  description: business.description,
  applicationName: business.name,
  keywords: [
    "medical billing",
    "revenue cycle management",
    "medical coding",
    "physician credentialing",
    "denial management",
    "accounts receivable management",
    "healthcare billing",
    "medical billing company USA",
  ],
  authors: [{ name: business.legalName }],
  creator: business.legalName,
  publisher: business.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.url,
    siteName: business.name,
    title: "Medical Billing and Revenue Cycle Management Solutions",
    description: business.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Billing and Revenue Cycle Management Solutions",
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Healthcare business services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <SkipLink />
        <CursorAura />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
