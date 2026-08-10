"use client";

import { useEffect, useRef, useState } from "react";

import { ContactDialog } from "@/components/ContactDialog";
import { navigation } from "@/content/site-content";

export function SiteHeader() {
  const [compact, setCompact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setCompact(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    const focusables = () => Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => focusables()[0]?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""} ${compact ? "site-header--compact" : ""}`} id="site-header">
      <div className="shell site-header__inner">
        <a className="brand" href="#top" aria-label="Абрамов Гурме: в начало страницы">
          <img className="brand__art" src="./brand/logo.svg" alt="" />
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="site-header__actions">
          <ContactDialog className="button button--header" />
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Открыть меню</span><span /><span />
          </button>
        </div>
      </div>
      {open ? (
        <div className="mobile-menu" id="mobile-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label="Навигация">
          <button className="mobile-menu__backdrop" type="button" aria-label="Закрыть меню" onClick={() => setOpen(false)} />
          <div className="mobile-menu__panel">
            <button className="mobile-menu__close" type="button" onClick={() => setOpen(false)}>Закрыть</button>
            <nav aria-label="Мобильная навигация">
              {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
