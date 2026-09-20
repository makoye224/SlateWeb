"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { confirmForgotPassword, friendlyCognitoMessage } from "@/lib/cognito";
import styles from "../auth-page.module.css";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 9v4M12 16.5v.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

type Status = "form" | "submitting" | "success" | "error";

function ResetPasswordContent() {
  const params = useSearchParams();
  const email = params.get("email");
  const code = params.get("code");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<Status>("form");
  const [message, setMessage] = useState("");

  if (!email || !code) {
    return (
      <div className={styles.card}>
        <span className={`${styles.iconWrap} ${styles["iconWrap--error"]}`}>
          <ErrorIcon />
        </span>
        <h1 className={styles.heading}>Couldn&rsquo;t reset password</h1>
        <p className={styles.message}>This link is missing some information. Request a new one from the app.</p>
      </div>
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password.length < 8) {
      setStatus("error");
      setMessage("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setStatus("error");
      setMessage("Passwords don't match.");
      return;
    }
    setStatus("submitting");
    try {
      await confirmForgotPassword(email!, code!, password);
      setStatus("success");
      setMessage("Your password has been reset. Open the Slate app and sign in with your new password.");
    } catch (err) {
      setStatus("error");
      setMessage(friendlyCognitoMessage(err));
    }
  }

  if (status === "success") {
    return (
      <div className={styles.card}>
        <span className={`${styles.iconWrap} ${styles["iconWrap--success"]}`}>
          <CheckIcon />
        </span>
        <h1 className={styles.heading}>Password reset</h1>
        <p className={styles.message}>{message}</p>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>Set a new password</h1>
      <p className={styles.message}>Choose a new password for {email}.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          autoComplete="new-password"
          required
        />
        <p className={styles.hint}>At least 8 characters.</p>
        {status === "error" ? <p className={styles.message} style={{ color: "#c96b62" }}>{message}</p> : null}
        <button className={styles.submit} type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Resetting…" : "Reset password"}
        </button>
      </form>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Image className={styles.icon} src="/icon.png" alt="Slate app icon" width={36} height={36} priority />
        <div className={styles.headerText}>
          <span className={styles.wordmark}>Slate</span>
          <span className={styles.platforms}>iOS &amp; Android</span>
        </div>
      </div>

      <main className={styles.main}>
        <Suspense fallback={<div className={styles.card}>Loading…</div>}>
          <ResetPasswordContent />
        </Suspense>
      </main>

      <footer className={styles.footer}>© {new Date().getFullYear()} Slate</footer>
    </div>
  );
}
