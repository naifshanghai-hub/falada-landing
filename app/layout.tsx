// app/layout.tsx
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shamelFont = localFont({
  src: "./fonts/FFShamel.ttf",
  weight: "700",
  style: "normal",
  display: "swap",
});


const SITE_URL = "https://falada-landing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "حاسبة الحمل الدقيقة | فلذة لمتابعة الحمل من أول أسبوع حتى الولادة",
    template: "%s | فلذة",
  },

  description:
    "استخدمي حاسبة الحمل الدقيقة في تطبيق فلذة لمعرفة موعد الولادة المتوقع، حساب الحمل بالهجري أو الميلادي، ومتابعة الحمل أسبوعًا بأسبوع بتنبيهات ذكية وتجربة هادئة.",

  keywords: [
    "حاسبة الحمل",
    "حاسبة الحمل الدقيقة",
    "حاسبة الحمل بالهجري",
    "حاسبة الحمل بالميلادي",
    "حاسبة حملي",
    "حساب الحمل",
    "حساب موعد الولادة",
    "موعد الولادة المتوقع",
    "متابعة الحمل",
    "الحمل أسبوعًا بأسبوع",
  ],

  authors: [{ name: "فلذة" }],
  creator: "فلذة",
  publisher: "فلذة",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_URL + "https://faladha.com",
  },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: SITE_URL + "/",
    siteName: "فلذة",
    title: "حاسبة الحمل الدقيقة | فلذة",
    description:
      "تطبيق فلذة يساعدك على حساب الحمل بدقة، معرفة موعد الولادة، ومتابعة الحمل أسبوعًا بأسبوع بتجربة هادئة ومطمئنة.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "فلذة – حاسبة الحمل ومتابعة الحمل",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "حاسبة الحمل الدقيقة | فلذة",
    description:
      "احسبي موعد الولادة وتابعي حملك أسبوعًا بأسبوع باستخدام حاسبة الحمل الدقيقة من فلذة.",
    images: ["/og-image.png"],
  },

  // أيقونات الموقع (حط الملفات في /public)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // اختياري إذا بتسوي PWA لاحقاً
  // manifest: "/manifest.webmanifest",

  category: "Pregnancy & Motherhood",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7c3aed",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: "فلذة", url: SITE_URL + "/" },
      { "@type": "WebSite", name: "فلذة", url: SITE_URL + "/" },
      {
        "@type": "MobileApplication",
        name: "فلذة",
        operatingSystem: "iOS, Android",
        applicationCategory: "HealthApplication",
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl">
      <body className={shamelFont.className}>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}