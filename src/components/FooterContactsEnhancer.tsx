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

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.2" />
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
    <div className="footer-contact__layout">
      <div className="footer-contact__people">
        {contacts.map((person) => (
          <section className="footer-contact__person" key={person.name}>
            <span className="footer-contact__role">{person.role}</span>
            <p className="footer-contact__row footer-contact__name"><PersonIcon />{person.name}</p>
            <a className="footer-contact__row" href={person.phoneHref}><PhoneIcon />{person.phone}</a>
            <a className="footer-contact__row" href={person.emailHref}><MailIcon />{person.email}</a>
          </section>
        ))}
      </div>

      <section className="footer-contact__regional" aria-label="Представители Иркутской области и ДВФО">
        <span className="footer-contact__regional-title">Представители Иркутской области и ДВФО</span>
        <p className="footer-contact__regional-row"><LocationIcon /><span>664075 г. Иркутск, ул. Байкальская, д. 244/5</span></p>
        <a className="footer-contact__regional-row" href="tel:+73952999212"><PhoneIcon /><span>+7 3952 999 212</span></a>
        <a className="footer-contact__regional-row" href="tel:+79149296272"><PhoneIcon /><span>+7 914 929 62 72</span></a>
        <a className="footer-contact__regional-row" href="tel:+79643565254"><PhoneIcon /><span>+7 964 356 52 54</span></a>
        <a className="footer-contact__regional-row" href="mailto:office@pkberkut.ru"><MailIcon /><span>office@pkberkut.ru</span></a>
      </section>
    </div>,
    target,
  );
}
