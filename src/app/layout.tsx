import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpine Bakery | Handcrafted Bread in Innsbruck",
  description:
    "Artisan bakery in the heart of Innsbruck, Austria. Handcrafted bread, baked fresh daily since 1987. Sourdough, Alpine Rye, Croissants & more.",
  openGraph: {
    title: "Alpine Bakery | Handcrafted Bread in Innsbruck",
    description:
      "Artisan bakery in the heart of Innsbruck, Austria. Handcrafted bread, baked fresh daily since 1987.",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&h=630&fit=crop&q=80", width: 1200, height: 630, alt: "Alpine Bakery — Fresh bread" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Bakery"],
  name: "Alpine Bakery",
  description: "Artisan bakery in the heart of Innsbruck, Austria. Handcrafted bread, baked fresh daily since 1987.",
  url: "https://alpine-bakery.vercel.app",
  telephone: "+43 512 123 456",
  email: "hallo@alpinebakery.at",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Innstraße 27",
    addressLocality: "Innsbruck",
    postalCode: "6020",
    addressCountry: "AT",
  },
  geo: { "@type": "GeoCoordinates", latitude: 47.2654, longitude: 11.3927 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:00", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "13:00" },
  ],
  foundingDate: "1987",
  priceRange: "€€",
  servesCuisine: "Bakery",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Breads & Pastries",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sourdough", description: "48-hour fermented, stone-baked" }, price: "4.80", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Alpine Rye", description: "Dense, hearty rye with caraway seeds" }, price: "5.20", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Walnut Ciabatta", description: "Airy Italian-style bread with roasted walnuts" }, price: "5.50", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Butter Croissant", description: "Flaky, golden layers made with alpine butter" }, price: "3.20", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pretzel", description: "Traditional Bavarian-style, chewy with a dark, salted crust" }, price: "2.80", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Apple Strudel", description: "Paper-thin pastry with spiced apples and cinnamon" }, price: "4.50", priceCurrency: "EUR" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-body bg-cream text-brown antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
