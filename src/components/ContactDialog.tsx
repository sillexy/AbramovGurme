"use client";

import { useEffect, useRef } from "react";

import { contacts, regionalContacts } from "@/content/site-content";

type ContactDialogProps = { className?: string };

export function ContactDialog({ className = "" }: ContactDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button className={className} type="button" onClick={() => dialogRef.current?.showModal()}>
        Связаться
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        className="contact-dialog"
        onClick={(e) => e.target === dialogRef.current && close()}
      >
        <div className="contact-dialog__panel">
          <button className="contact-dialog__close" type="button" aria-label="Закрыть" onClick={close}>×</button>
          <p id="contact-dialog-title" className="contact-dialog__title">Контакты</p>
          <div className="contact-dialog__contacts">
            {contacts.map((person) => (
              <section className="contact-dialog__person" key={person.name}>
                <span className="contact-dialog__role">{person.role}</span>
                <strong className="contact-dialog__name">{person.name}</strong>
                <a href={person.phoneHref}>{person.phone}</a>
                <a href={person.emailHref}>{person.email}</a>
              </section>
            ))}
            <section className="contact-dialog__person contact-dialog__regional">
              <span className="contact-dialog__role">{regionalContacts.title}</span>
              <strong className="contact-dialog__name">{regionalContacts.address}</strong>
              {regionalContacts.phones.map((phone, i) => (
                <a key={phone} href={regionalContacts.phoneHrefs[i]}>{phone}</a>
              ))}
              <a href={regionalContacts.emailHref}>{regionalContacts.email}</a>
            </section>
          </div>
        </div>
      </dialog>
    </>
  );
}
