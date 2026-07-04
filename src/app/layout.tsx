import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const khand = localFont({
  src: [
    { path: "../../public/fonts/Khand-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Khand-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Khand-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Khand-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-khand",
  display: "swap",
});

const alpino = localFont({
  src: [
    { path: "../../public/fonts/Alpino-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Alpino-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Alpino-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-alpino",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freshi-healthy-fusion.vercel.app"),
  title: "Freshi Healthy Fusion · Juice Bar · Bloomfield NJ",
  description:
    "Cold-pressed juices, blended smoothies, fruit bowls and fresh wraps at 313 Glenwood Ave, Bloomfield NJ 07003. Rated 4.5 stars on Google.",
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='%23ffa62b'/%3E%3Cpath d='M16 5 C 20 11, 20 21, 16 27 C 12 21, 12 11, 16 5 Z' fill='%23b8d94a'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Freshi Healthy Fusion · Drink Your Colors",
    description:
      "Cold-pressed juices, smoothies, bowls and wraps in Bloomfield NJ. 313 Glenwood Ave.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf3e2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${khand.variable} ${alpino.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
