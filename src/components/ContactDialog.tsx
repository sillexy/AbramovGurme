"use client";

import { useRef } from "react";

import { contact } from "@/content/site-content";

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
            <p className="contact-dialog__name">{contact.name}</p>
          </div>
          <div className="contact-dialog__actions">
            <a className="button button--copper" href={contact.phoneHref}>Позвонить</a>
            <a className="button button--outline" href={contact.emailHref}>Написать на email</a>
          </div>
          <button className="dialog-close" type="button" onClick={close}>
            Закрыть
          </button>
        </div>
      </dialog>
    </>
  );
}
