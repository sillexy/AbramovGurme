function cursorGlowScript(containerSelector: string) {
  return String.raw`(() => {
  const script = document.currentScript;
  const glow = script?.previousElementSibling;
  const container = glow?.closest(${JSON.stringify(containerSelector)});

  if (!glow || !container || !matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let frame = 0;
  let currentX = 50;
  let currentY = 50;
  let targetX = 50;
  let targetY = 50;

  const render = () => {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;
    glow.style.setProperty("--mouse-x", currentX + "%");
    glow.style.setProperty("--mouse-y", currentY + "%");
    frame = requestAnimationFrame(render);
  };

  const moveGlow = (event) => {
    const bounds = container.getBoundingClientRect();
    targetX = ((event.clientX - bounds.left) / bounds.width) * 100;
    targetY = ((event.clientY - bounds.top) / bounds.height) * 100;
    glow.dataset.active = "true";
  };

  container.addEventListener("pointermove", moveGlow);
  container.addEventListener("pointerleave", () => { glow.dataset.active = "false"; });
  frame = requestAnimationFrame(render);
})();`;
}

export function HeroCursorGlow({ className = "hero-cursor-glow", containerSelector = ".hero" }: { className?: string; containerSelector?: string }) {
  return <><span className={className} aria-hidden="true" data-active="false" /><script dangerouslySetInnerHTML={{ __html: cursorGlowScript(containerSelector) }} /></>;
}
