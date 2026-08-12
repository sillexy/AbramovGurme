"use client";

import { useEffect, useRef } from "react";

import { contacts } from "@/content/site-content";

type ContactDialogProps = {
  className?: string;
};

const CONTACT_DIALOG_EXIT_MS = 220;

export function ContactDialog({ className = "" }: ContactDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    dialog.classList.remove("contact-dialog--closing");
    dialog.showModal();
  };

  const close = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open || dialog.classList.contains("contact-dialog--closing")) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      dialog.close();
      return;
    }

    dialog.classList.add("contact-dialog--closing");
    closeTimerRef.current = window.setTimeout(() => {
      dialog.classList.remove("contact-dialog--closing");
      dialog.close();
      closeTimerRef.current = null;
    }, CONTACT_DIALOG_EXIT_MS);
  };

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
        onClose={() => {
          dialogRef.current?.classList.remove("contact-dialog--closing");
          triggerRef.current?.focus();
        }}
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
