import Image from "next/image";
import styles from "../../auth-page.module.css";

// Same "plain, unauthenticated, no server round trip" reasoning as
// subscribe/success — Stripe never reports a completed checkout for a
// cancelled session, so there's nothing here to reconcile.
export default function SubscribeCancelPage() {
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
          <span className={`${styles.iconWrap} ${styles["iconWrap--pending"]}`} />
          <h1 className={styles.heading}>No changes made</h1>
          <p className={styles.message}>
            You can head back to the Slate app — nothing was charged, and you can subscribe anytime from Settings.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>© {new Date().getFullYear()} Slate</footer>
    </div>
  );
}
