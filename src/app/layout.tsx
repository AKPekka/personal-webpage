import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AKP's Personal Website",
  description: " AKP's personal webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-stone-950 text-stone-100 font-sans min-h-screen flex flex-col items-center selection:bg-stone-800 selection:text-stone-50">
        <div className="w-full max-w-2xl px-6 py-12 md:py-20">
          <header>
            <Navigation />
          </header>
          <main className="fade-in">{children}</main>
          <footer className="mt-24 pt-8 border-t border-stone-800 text-stone-500 text-xs tracking-widest text-center">
            © {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}
