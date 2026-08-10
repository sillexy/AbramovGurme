import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";
import "./root-width.css";
import "./about-layout.css";
import "./offers-background-fix.css";

const display = Cormorant_Garamond({ subsets: ["cyrillic", "latin"], weight: ["500", "600"], variable: "--font-display" });
const body = Manrope({ subsets: ["cyrillic", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Абрамов Гурме - технологии будущего в готовой еде",
  description: "Абрамов Гурме - готовые блюда в стекле, продуктовые направления для дома, офиса, фитнеса, баров и бизнеса.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>;
}
