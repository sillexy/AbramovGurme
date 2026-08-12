"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { contacts } from "@/content/site-content";

function PersonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="4" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c0 1.1-.9 2-2 2C10.3 21 3 13.7 3 6c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function FooterContactsEnhancer() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.querySelector<HTMLElement>(".site-footer .footer-contact"));
  }, []);

  if (!target) return null;

  return createPortal(
    <div className="footer-contact__people">
      {contacts.map((person) => (
        <section className="footer-contact__person" key={person.name}>
          <span className="footer-contact__role">{person.role}</span>
          <p className="footer-contact__row footer-contact__name"><PersonIcon />{person.name}</p>
          <a className="footer-contact__row" href={person.phoneHref}><PhoneIcon />{person.phone}</a>
          <a className="footer-contact__row" href={person.emailHref}><MailIcon />{person.email}</a>
        </section>
      ))}
    </div>,
    target,
  );
}
