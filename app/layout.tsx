import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant-garamond",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Argazo SL",
  description: "Argazo crea soluciones sencillas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body className="font-body bg-parchment text-sea-deep min-h-screen flex flex-col">
        <div className="max-w-[560px] px-16 py-12 min-h-screen flex flex-col max-[900px]:max-w-full max-[900px]:px-8 max-[900px]:py-8 max-[900px]:pt-[42vh] max-[900px]:min-h-0 max-[500px]:px-6 max-[500px]:py-6 max-[500px]:pt-[38vh]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
