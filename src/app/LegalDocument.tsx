import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./legal-page.module.css";

/** Mirrors SlateApp's components/ui/LegalScreen.tsx — same copy, same
 * effective date and contact address, just laid out for the web instead of
 * a native scroll view. Keep the two in sync by hand; there's no shared
 * package between the two repos to enforce it. */
export const EFFECTIVE_DATE = "September 6, 2026";
export const CONTACT_EMAIL = "slate@ndotoni.com";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.headerLink}>
          <span className={styles.wordmark}>Slate</span>
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.doc}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.effectivePill}>Effective {EFFECTIVE_DATE}</span>
          {children}
        </div>
      </main>

      <footer className={styles.footer}>© {new Date().getFullYear()} Slate</footer>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeading}>
        <span className={styles.accent} />
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className={styles.paragraph}>{children}</p>;
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className={styles.list}>{children}</ul>;
}

export function LegalItem({ children }: { children: ReactNode }) {
  return <li className={styles.listItem}>{children}</li>;
}
