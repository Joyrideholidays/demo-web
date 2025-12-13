import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joyrideholidays.com"),
  title: {
    default: "Joyride Holidays - Best Travel Agency in Gwalior | Tour Packages & Holiday Deals",
    template: "%s | Joyride Holidays",
  },
  description:
    "Joyride Holidays is a leading travel agency in Gwalior, Madhya Pradesh offering affordable tour packages, domestic & international holidays, honeymoon packages, pilgrimage tours, and customized travel solutions. Book your dream vacation today!",
  keywords: [
    "travel agency Gwalior",
    "tour packages Gwalior",
    "holiday packages Madhya Pradesh",
    "honeymoon packages India",
    "domestic tour packages",
    "international tour packages",
    "pilgrimage tours",
    "Joyride Holidays",
    "best travel agent Kampoo",
    "budget travel packages",
    "family vacation packages",
    "group tours India",
    "customized holiday packages",
    "Gwalior travel agent",
    "MP tourism packages",
    "Kashmir tour packages",
    "Goa holiday packages",
    "Kerala tour packages",
    "Rajasthan tour packages",
    "Thailand tour packages",
    "Dubai tour packages",
    "Singapore Malaysia tour",
    "Europe tour packages",
    "Maldives honeymoon packages",
  ],
  authors: [{ name: "Joyride Holidays", url: "https://www.joyrideholidays.com" }],
  creator: "Joyride Holidays",
  publisher: "Joyride Holidays",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.joyrideholidays.com",
    siteName: "Joyride Holidays",
    title: "Joyride Holidays - Best Travel Agency in Gwalior | Tour Packages & Holiday Deals",
    description:
      "Discover amazing travel experiences with Joyride Holidays. We offer the best domestic & international tour packages, honeymoon deals, pilgrimage tours, and customized holidays at affordable prices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joyride Holidays - Your Journey, Our Passion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyride Holidays - Best Travel Agency in Gwalior",
    description:
      "Book affordable tour packages, honeymoon deals & holiday packages with Joyride Holidays, Gwalior's trusted travel agency.",
    images: ["/og-image.jpg"],
    creator: "@joyrideholidays",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.joyrideholidays.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Travel & Tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Joyride Holidays",
    image: "https://www.joyrideholidays.com/logo.png",
    "@id": "https://www.joyrideholidays.com",
    url: "https://www.joyrideholidays.com",
    telephone: "+917974957193",
    email: "info@joyrideholidays.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opposite SS Kachori Wala, Kathke Sahab Ka Abda, Naya Bazar, Kampoo",
      addressLocality: "Gwalior",
      addressRegion: "Madhya Pradesh",
      postalCode: "474009",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.2183,
      longitude: 78.1828,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://facebook.com/joyrideholidays",
      "https://instagram.com/joyrideholidays",
      "https://twitter.com/joyrideholidays",
    ],
    priceRange: "$$",
    description:
      "Joyride Holidays is a leading travel agency in Gwalior offering affordable tour packages, domestic & international holidays, honeymoon packages, and customized travel solutions.",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travel Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Domestic Tour Packages",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "International Tour Packages",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Honeymoon Packages",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0066CC" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Gwalior" />
        <meta name="geo.position" content="26.2183;78.1828" />
        <meta name="ICBM" content="26.2183, 78.1828" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
