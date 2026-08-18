"use client";

import { useEffect } from "react";

const targets = ["#flagship", "#a1", "#a2", "#a3", "#a4"] as const;
const labels = ["Перейти к Абрамов Гурме", "Перейти к Ланчам", "Перейти к Фитнес", "Перейти к Для баров", "Перейти к Десертам"] as const;

export function BrandMatrixEnhancer() {
  useEffect(() => {
    /*
      Header navigation already works correctly because it uses normal anchor links
      together with html { scroll-behavior: smooth }. Do the same here.

      The direction ids were originally placed on the inner .offer__copy elements,
      so native anchors landed inside the section instead of at the section top.
      Move each id to its outer .offer container once the page is mounted.
    */
    targets.forEach((selector) => {
      const id = selector.slice(1);
      const currentTarget = document.getElementById(id);
      const offer = currentTarget?.closest<HTMLElement>(".offer");

      if (currentTarget && offer && currentTarget !== offer) {
        currentTarget.removeAttribute("id");
        offer.id = id;
      }
    });

    const flagship = document.querySelector<HTMLElement>(".flagship-band");
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".ecosystem-grid article"));
    const nodes = flagship ? [flagship, ...cards] : cards;

    nodes.forEach((node, index) => {
      if (node.querySelector(":scope > .ecosystem-cta")) return;

      const link = document.createElement("a");
      link.className = "ecosystem-cta";
      link.href = targets[index] ?? "#offers";
      link.setAttribute("aria-label", labels[index] ?? "Перейти к направлению");

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("aria-hidden", "true");

      const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
      line.setAttribute("d", "M5 12h14");

      const arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
      arrow.setAttribute("d", "m14 7 5 5-5 5");

      svg.append(line, arrow);
      link.appendChild(svg);
      node.appendChild(link);
    });
  }, []);

  return null;
}
