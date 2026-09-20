"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { confirmSignUp, friendlyCognitoMessage } from "@/lib/cognito";
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

type Status = "pending" | "success" | "error";

const MISSING_PARAMS_MESSAGE = "This link is missing some information. Request a new one from the app.";

function VerifyContent() {
  const params = useSearchParams();
  const email = params.get("email");
  const code = params.get("code");
  const missingParams = !email || !code;
  const [status, setStatus] = useState<Status>(missingParams ? "error" : "pending");
  const [message, setMessage] = useState(missingParams ? MISSING_PARAMS_MESSAGE : "Confirming your email…");

  useEffect(() => {
    if (!email || !code) return;
    confirmSignUp(email, code)
      .then(() => {
        setStatus("success");
        setMessage("Your email is confirmed. Open the Slate app and sign in.");
      })
      .catch((err) => {
        setStatus("error");
        setMessage(friendlyCognitoMessage(err));
      });
  }, [email, code]);

  return (
    <div className={styles.card}>
      <span
        className={`${styles.iconWrap} ${status === "success" ? styles["iconWrap--success"] : status === "error" ? styles["iconWrap--error"] : styles["iconWrap--pending"]}`}
      >
        {status === "success" ? <CheckIcon /> : status === "error" ? <ErrorIcon /> : null}
      </span>
      <h1 className={styles.heading}>
        {status === "success" ? "You're confirmed" : status === "error" ? "Couldn't confirm" : "Confirming…"}
      </h1>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default function VerifyPage() {
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
          <VerifyContent />
        </Suspense>
      </main>

      <footer className={styles.footer}>© {new Date().getFullYear()} Slate</footer>
    </div>
  );
}
