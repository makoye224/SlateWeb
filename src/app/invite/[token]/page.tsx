import { headers } from "next/headers";
import type { Metadata } from "next";
import styles from "../../auth-page.module.css";

export const metadata: Metadata = {
  title: "You're invited — Slate",
};

const APP_STORE_URL = "https://apps.apple.com/app/id6815918000";

/**
 * Where a Slate invite link (plan/invite/[id].tsx) lands for anyone WITHOUT
 * the app already installed — with SlateApp's iOS associatedDomains
 * pointing at this same domain (and this site's own
 * /.well-known/apple-app-site-association), iOS opens the app directly
 * instead of ever loading this page when the app IS installed. Android App
 * Links aren't wired up yet (needs a release signing cert fingerprint from
 * Play Console, only available once that's further along), so Android
 * always lands here for now regardless of whether the app's installed.
 *
 * No paid deferred-deep-linking service (Branch, etc.) — once someone
 * installs from here, the plan they were invited to isn't automatically
 * waiting for them. The pragmatic fix is telling them to open the
 * original link again after installing; a fresh Universal Link
 * association picks it up correctly the second time.
 */
export default async function InvitePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const userAgent = (await headers()).get("user-agent") ?? "";
  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iphone|ipad|ipod/i.test(userAgent);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <span className={styles.wordmark}>Slate</span>
          <span className={styles.platforms}>iOS &amp; Android</span>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.heading}>You&rsquo;re invited to a plan</h1>

          {isAndroid ? (
            <p className={styles.message}>
              The Android app isn&rsquo;t on Google Play just yet. Once it&rsquo;s live, come back to this same link to
              open the invite.
            </p>
          ) : (
            <>
              <p className={styles.message}>
                Get the Slate app to see the plan and join in. Already installed it? Open this link again from your
                messages to jump straight in.
              </p>
              <a href={APP_STORE_URL} className={styles.submit} style={{ textDecoration: "none", textAlign: "center" }}>
                {isIOS ? "Get Slate on the App Store" : "Get the Slate app"}
              </a>
            </>
          )}

          <a href={`slate://invite/${token}`} className={styles.hint} style={{ marginTop: 16 }}>
            Already have Slate installed? Try opening it directly.
          </a>
        </div>
      </main>

      <footer className={styles.footer}>© {new Date().getFullYear()} Slate</footer>
    </div>
  );
}
