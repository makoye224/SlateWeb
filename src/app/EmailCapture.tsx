"use client";

import { useState, type FormEvent } from "react";
import styles from "./page.module.css";

const NOTIFY_ADDRESS = "slate@ndotoni.com";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    const subject = "Notify me about the Slate launch";
    const body = trimmed
      ? `Please notify me when Slate launches. My email: ${trimmed}`
      : "Please notify me when Slate launches.";
    window.location.href = `mailto:${NOTIFY_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className={styles.notifyForm} onSubmit={handleSubmit}>
      <input
        type="email"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setSent(false);
        }}
        placeholder="you@example.com"
        aria-label="Email address"
        className={styles.notifyInput}
      />
      <button type="submit" className={styles.notifyButton}>
        {sent ? "Opened your email app" : "Notify me"}
      </button>
    </form>
  );
}
