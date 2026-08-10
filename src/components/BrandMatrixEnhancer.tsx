"use client";

import { useEffect } from "react";

const targets = ["#flagship", "#a1", "#a2", "#a3", "#a4"] as const;
const labels = ["Перейти к Абрамов Гурме", "Перейти к Ланчам", "Перейти к Фитнес", "Перейти к Для баров", "Перейти к Десертам"] as const;

export function BrandMatrixEnhancer() {
  useEffect(() => {
    const flagship = document.querySelector<HTMLElement>(".flagship-band");
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".ecosystem-grid article"));
    const nodes = flagship ? [flagship, ...cards] : cards;

    nodes.forEach((node, index) => {
      if (node.querySelector(":scope > .ecosystem-cta")) return;
      const link = document.createElement("a");
      link.className = "ecosystem-cta";
      link.href = targets[index] ?? "#offers";
      link.setAttribute("aria-label", labels[index] ?? "Перейти к направлению");
      link.textContent = "→";
      node.appendChild(link);
    });
  }, []);

  return null;
}
