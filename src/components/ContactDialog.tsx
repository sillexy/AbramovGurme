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
          <div>
            <p className="eyebrow">Контакты</p>
            <h2 id="contact-dialog-title">Связаться</h2>
          </div>
          <div className="contact-dialog__contacts">
            {contacts.map((person) => (
              <div className="contact-dialog__person" key={person.phoneHref}>
                <span>{person.role}</span>
                <strong>{person.name}</strong>
                <a className="button button--copper" href={person.phoneHref}>{person.phone}</a>
              </div>
            ))}
          </div>
          <button className="dialog-close" type="button" onClick={close}>
            Закрыть
          </button>
        </div>
      </dialog>
    </>
  );
}
