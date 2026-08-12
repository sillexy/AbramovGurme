import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { BrandMatrixEnhancer } from "@/components/BrandMatrixEnhancer";
import { FooterContactsEnhancer } from "@/components/FooterContactsEnhancer";
import { HeroReferenceEnhancer } from "@/components/HeroReferenceEnhancer";
import "./globals.css";
import "./root-width.css";
import "./about-layout.css";
import "./offers-background-fix.css";
import "./brand-matrix.css";
import "./brand-matrix-connectors.css";
import "./brand-matrix-flagship.css";
import "./brand-matrix-actions.css";
import "./brand-matrix-scroll.css";
import "./offer-price-style.css";
import "./header-logo.css";
import "./contact-dialog-contacts.css";
import "./footer-contacts.css";
import "./safety-reference.css";
import "./safety-mobile-spacing.css";
import "./micromarket-image.css";
import "./technology-reference.css";
import "./technology-mobile-alignment.css";
import "./hero-reference.css";
import "./benefit-metric-font.css";
import "./benefits-mobile-note.css";
import "./mobile-menu-fix.css";
import "./popup-close-final.css";
import "./daypart-photo-slots.css";

const display = Cormorant_Garamond({ subsets: ["cyrillic", "latin"], weight: ["500", "600"], variable: "--font-display" });
const body = Manrope({ subsets: ["cyrillic", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Абрамов Гурме - технологии будущего в готовой еде",
  description: "Абрамов Гурме - готовые блюда в стекле, продуктовые направления для дома, офиса, фитнеса, баров и бизнеса.",
  robots: { index: false, follow: false },
};

const heroPrepaintScript = `
(() => {
  const applyHeroClass = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return false;
    hero.classList.add('hero--reference');
    return true;
  };

  if (!applyHeroClass()) {
    const observer = new MutationObserver(() => {
      if (applyHeroClass()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="stylesheet" href="./brand-matrix-assets.css" />
        <script dangerouslySetInnerHTML={{ __html: heroPrepaintScript }} />
      </head>
      <body><BrandMatrixEnhancer /><HeroReferenceEnhancer /><FooterContactsEnhancer />{children}</body>
    </html>
  );
}
