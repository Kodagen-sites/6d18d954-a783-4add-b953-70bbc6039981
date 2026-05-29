import type { Metadata } from "next";
import { Outfit, Figtree } from "next/font/google";
import { siteConfig } from "@/content/site-config";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import EditorBridge from "@/components/__kodagen/EditorBridge";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s — ${siteConfig.seo.siteName}`,
  },
  description: siteConfig.seo.defaultDescription,
  applicationName: siteConfig.company.name,
  authors: [{ name: siteConfig.company.legalName }],
  alternates: { canonical: siteConfig.seo.siteUrl },
  openGraph: {
    type: "website",
    siteName: siteConfig.seo.siteName,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    locale: siteConfig.seo.locale,
    url: siteConfig.seo.siteUrl,
    images: siteConfig.seo.ogImage ? [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }] : [],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.seo.twitter,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: siteConfig.seo.ogImage ? [siteConfig.seo.ogImage] : [],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${figtree.variable}`}>
      <body className="font-body antialiased bg-bg text-graphite">
        <Header />
        <main>{children}</main>
        <Footer />
        <EditorBridge />
      </body>
    </html>
  );
}
