"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !elementRef.current) {
      setVisible(true);
      return;
    }
    setReady(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} className={`${className} ${ready ? "reveal-ready" : ""} ${visible ? "is-visible" : ""}`}>{children}</div>;
}
