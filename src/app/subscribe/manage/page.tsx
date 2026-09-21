import Image from "next/image";
import styles from "../../auth-page.module.css";

// Return destination from Stripe's Customer Portal (billing-service.ts's
// createBillingPortalSession) — deliberately neutral copy, since by the
// time anyone lands here they may have cancelled, changed their card, or
// done nothing at all. Same "plain, unauthenticated, no server round trip"
// reasoning as the other two subscribe/* pages.
export default function SubscribeManagePage() {
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
          <h1 className={styles.heading}>All set</h1>
          <p className={styles.message}>
            Head back to the Slate app — any changes you made are already saved.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>© {new Date().getFullYear()} Slate</footer>
    </div>
  );
}
