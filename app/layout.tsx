import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dercabinbistro.com"),
  title: {
    default: "Der' Cabin Bistro | Eat Good, Feel Good",
    template: "%s | Der' Cabin Bistro",
  },
  description:
    "Discover Der' Cabin Bistro — a cozy spot for hearty meals, fresh flavors, and a welcoming atmosphere. Eat good, feel good, and enjoy every bite!",
  keywords: [
    "Der' Cabin Bistro",
    "restaurant",
    "bistro",
    "cozy dining",
    "comfort food",
    "eat good feel good",
    "casual dining",
    "family restaurant",
  ],
  authors: [
    { name: "Der' Cabin Bistro", url: "https://www.dercabinbistro.com" },
  ],
  creator: "Der' Cabin Bistro",
  publisher: "Der' Cabin Bistro",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dercabinbistro.com",
    siteName: "Der' Cabin Bistro",
    title: "Der' Cabin Bistro | Eat Good, Feel Good",
    description:
      "Join us at Der' Cabin Bistro for a cozy dining experience filled with hearty meals and warm hospitality.",
    images: [
      {
        url: "https://www.dercabinbistro.com/Images/banner.png",
        width: 1200,
        height: 630,
        alt: "Der' Cabin Bistro interior and delicious meals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dercabinbistro",
    creator: "@dercabinbistro",
    title: "Der' Cabin Bistro | Eat Good, Feel Good",
    description:
      "Cozy vibes, hearty meals, and fresh flavors — that's Der' Cabin Bistro. Eat good, feel good!",
    images: ["https://www.dercabinbistro.com/Images/banner.png"],
  },
  alternates: {
    canonical: "https://www.dercabinbistro.com",
  },
  category: "Restaurant",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GNCGTWT87Q"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GNCGTWT87Q');
          `}
        </Script>
        <Script
          id="ldjson-restaurant"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Der' Cabin Bistro",
              image: "https://www.dercabinbistro.com/Images/banner.png",
              url: "https://www.dercabinbistro.com/",
              telephone: "+60177056254",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Ptd 174172, Plot L3 & L4, Gravity Green, Bandar Seri Alam",
                addressLocality: "Masai",
                postalCode: "81750",
                addressRegion: "Johor",
                addressCountry: "MY",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 1.4958884503863925,
                longitude: 103.87280720225242,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "17:00",
                  closes: "00:00",
                },
              ],
              servesCuisine: [
                "Western",
                "Asian Fusion",
                "Bistro Food",
                "Comfort Food",
                "Beverages",
              ],
              priceRange: "RM",
              sameAs: [
                "https://www.instagram.com/dercabinbistro/",
                "https://www.facebook.com/dercabinbistro",
                "https://www.tiktok.com/@dercabinbistro",
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
