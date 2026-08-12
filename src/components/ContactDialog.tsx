"use client";

import { useRef } from "react";

import { contacts } from "@/content/site-content";

type ContactDialogProps = {
  className?: string;
};

export function ContactDialog({ className = "" }: ContactDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button ref={triggerRef} className={className} type="button" onClick={open}>
        Связаться
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        className="contact-dialog"
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") close();
        }}
        onClose={() => triggerRef.current?.focus()}
      >
        <div className="contact-dialog__panel">
          <button className="contact-dialog__close" type="button" aria-label="Закрыть" onClick={close}>
            ×
          </button>

          <div className="contact-dialog__heading">
            <p id="contact-dialog-title" className="contact-dialog__title">Контакты</p>
          </div>

          <div className="contact-dialog__contacts">
            {contacts.map((person) => (
              <section className="contact-dialog__person" key={person.name}>
                <span className="contact-dialog__role">{person.role}</span>
                <strong className="contact-dialog__name">{person.name}</strong>
                <a className="contact-dialog__phone" href={person.phoneHref}>{person.phone}</a>
                <a className="contact-dialog__email" href={person.emailHref}>{person.email}</a>
              </section>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
