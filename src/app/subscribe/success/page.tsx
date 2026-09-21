import Image from "next/image";
import styles from "../../auth-page.module.css";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Plain and unauthenticated by design — Stripe's own hosted Checkout already
// did the real work server-side (billing-service.ts's webhook handler) by
// the time anyone lands here. This page confirms and sends them back to the
// app; it has no way to know anything Stripe itself doesn't already know,
// and needs no sign-in to say "you're set."
export default function SubscribeSuccessPage() {
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
        <div className={styles.card}>
          <span className={`${styles.iconWrap} ${styles["iconWrap--success"]}`}>
            <CheckIcon />
          </span>
          <h1 className={styles.heading}>You&rsquo;re subscribed</h1>
          <p className={styles.message}>
            Head back to the Slate app — unlimited plans are ready whenever you are.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>© {new Date().getFullYear()} Slate</footer>
    </div>
  );
}
