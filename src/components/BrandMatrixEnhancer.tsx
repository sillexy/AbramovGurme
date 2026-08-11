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

      const targetSelector = targets[index] ?? "#offers";
      const link = document.createElement("a");
      link.className = "ecosystem-cta";
      link.href = targetSelector;
      link.setAttribute("aria-label", labels[index] ?? "Перейти к направлению");
      link.textContent = "→";

      link.addEventListener("click", (event) => {
        const target = document.querySelector<HTMLElement>(targetSelector);
        if (!target) return;

        const offer = target.closest<HTMLElement>(".offer") ?? target;
        event.preventDefault();

        offer.classList.add("matrix-scroll-target");
        const root = document.documentElement;
        const previousBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";

        offer.scrollIntoView({ block: "start", inline: "nearest", behavior: "auto" });
        window.history.replaceState(null, "", targetSelector);

        requestAnimationFrame(() => {
          root.style.scrollBehavior = previousBehavior;
        });
      });

      node.appendChild(link);
    });
  }, []);

  return null;
}
