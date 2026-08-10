import { type ReactNode } from "react";

const disclosureScript = String.raw`(() => {
  const script = document.currentScript;
  const details = script?.previousElementSibling;
  const summary = details?.querySelector("summary");
  const content = details?.querySelector(".technology-disclosure__content");
  const duration = 320;
  const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
  let animation = null;
  let targetOpen = details?.open ?? false;

  if (!details || !summary || !content) return;

  const reset = () => {
    details.classList.remove("is-closing");
    content.style.height = "";
    content.style.opacity = "";
    content.style.overflow = "";
  };

  summary.addEventListener("click", (event) => {
    event.preventDefault();
    targetOpen = !targetOpen;

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      details.open = targetOpen;
      reset();
      return;
    }

    const currentHeight = details.open ? content.getBoundingClientRect().height : 0;
    const currentOpacity = currentHeight > 0 ? Number.parseFloat(getComputedStyle(content).opacity) || 1 : 0;
    animation?.cancel();

    if (targetOpen) {
      details.open = true;
      details.classList.remove("is-closing");
      const targetHeight = content.scrollHeight;
      content.style.height = currentHeight + "px";
      content.style.opacity = String(currentOpacity);
      content.style.overflow = "hidden";
      animation = content.animate([{ height: currentHeight + "px", opacity: currentOpacity }, { height: targetHeight + "px", opacity: 1 }], { duration, easing, fill: "both" });
      animation.onfinish = () => { reset(); animation = null; };
      return;
    }

    details.classList.add("is-closing");
    content.style.height = currentHeight + "px";
    content.style.opacity = String(currentOpacity);
    content.style.overflow = "hidden";
    animation = content.animate([{ height: currentHeight + "px", opacity: currentOpacity }, { height: "0px", opacity: 0 }], { duration, easing, fill: "both" });
    animation.onfinish = () => { details.open = false; reset(); animation = null; };
  });
})();`;

export function TechnologyDisclosure({ children }: { children: ReactNode }) {
  return <><details className="technology-disclosure"><summary>Подробнее о технологии</summary><div className="technology-disclosure__content">{children}</div></details><script dangerouslySetInnerHTML={{ __html: disclosureScript }} /></>;
}
