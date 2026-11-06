import type { Metadata, Viewport } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/shared/SkipLink";
import { business } from "@/config/business";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: "Medical Billing and Revenue Cycle Management | PracticeCareSource", template: "%s | PracticeCareSource" },
  description: business.description,
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: business.url, siteName: business.name, title: "Medical Billing and Revenue Cycle Management", description: business.description },
  twitter: { card: "summary", title: "Medical Billing and Revenue Cycle Management", description: business.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  category: "Healthcare business services",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F7F5F0", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <SkipLink />
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
