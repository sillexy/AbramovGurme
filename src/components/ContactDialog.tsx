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
              <section className="contact-dialog__person" key={person.phoneHref}>
                <span className="contact-dialog__role">{person.role}</span>
                <strong className="contact-dialog__name">{person.name}</strong>
                <a className="contact-dialog__phone" href={person.phoneHref}>
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c0 1.1-.9 2-2 2C10.3 21 3 13.7 3 6c0-1.1.9-2 2-2Z" />
                  </svg>
                  {person.phone}
                </a>
              </section>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
