import Image from "next/image";
import styles from "./page.module.css";

const timeline: Array<{
  time: string;
  title: string;
  reason: string;
  state: "past" | "current" | "rest";
}> = [
  { time: "6:00 PM", title: "Swim", reason: "Your usual evening lap.", state: "past" },
  {
    time: "7:30 PM",
    title: "Golden Gardens at sunset",
    reason: "A lighter evening. Plenty of room, and this fits what you like.",
    state: "current",
  },
  {
    time: "9:00 PM",
    title: "Open",
    reason: "Open time. Nothing planned, on purpose.",
    state: "rest",
  },
];

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.2" stroke="#fff" strokeWidth="1.6" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Image
          className={styles.icon}
          src="/icon.png"
          alt="Slate app icon"
          width={36}
          height={36}
          priority
        />
        <div className={styles.headerText}>
          <span className={styles.wordmark}>Slate</span>
          <span className={styles.platforms}>iOS &amp; Android</span>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.textCol}>
          <h1 className={styles.headline}>
            Free time isn&rsquo;t the shortage. A plan for it is.
          </h1>
          <p className={styles.subhead}>
            Slate is an app that curates what to do with the time you
            already have: solo, or with the person you&rsquo;ve already
            chosen, from a free evening to a two-week visit.
          </p>
          <p className={styles.status}>
            For iOS and Android. Still in the works.
            <a href="mailto:slate@ndotoni.com">Notify me</a>
          </p>
        </div>

        <div className={styles.phone} aria-hidden="true">
          <div className={styles.screen}>
            <div className={styles.notch} />
            <div className={styles.statusBar}>
              <span>9:41</span>
              <div className={styles.statusIcons}>
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                  <rect x="0" y="6" width="2" height="3" rx="0.5" fill="currentColor" />
                  <rect x="3.3" y="4" width="2" height="5" rx="0.5" fill="currentColor" />
                  <rect x="6.6" y="2" width="2" height="7" rx="0.5" fill="currentColor" />
                  <rect x="9.9" y="0" width="2" height="9" rx="0.5" fill="currentColor" />
                </svg>
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
                  <rect x="0.5" y="0.5" width="13" height="8" rx="2" stroke="currentColor" />
                  <rect x="2" y="2" width="10" height="5" rx="1" fill="currentColor" />
                  <rect x="14.2" y="3" width="1.3" height="3" rx="0.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className={styles.screenContent}>
              <p className={styles.appGreeting}>Good evening.</p>
              <p className={styles.appTimeLine}>You have about 3 free hours tonight.</p>

              <div className={styles.heroPanel}>
                <span className={styles.heroGlowA} />
                <span className={styles.heroGlowB} />
                <span className={styles.heroEyebrow}>TONIGHT</span>
                <p className={styles.heroTitle}>Golden Gardens at sunset</p>
                <span className={styles.heroTime}>7:30 PM</span>
                <p className={styles.heroReason}>
                  A lighter evening. Plenty of room, and this fits what you
                  like.
                </p>
                <div className={styles.heroActions}>
                  <span className={styles.heroPrimaryBtn}>
                    Find something else
                  </span>
                  <span className={styles.heroGhostBtn}>
                    <MapPinIcon />
                  </span>
                </div>
              </div>

              <span className={styles.timelineLabel}>TONIGHT</span>
              <div className={styles.timeline}>
                {timeline.map((row, i) => (
                  <div className={styles.timelineRow} key={row.title}>
                    <div className={styles.railCol}>
                      <span
                        className={`${styles.node} ${styles[`node--${row.state}`]}`}
                      >
                        {row.state === "current" ? (
                          <span className={styles.pulseRing} />
                        ) : null}
                      </span>
                      {i < timeline.length - 1 ? (
                        <span className={styles.connector} />
                      ) : null}
                    </div>
                    <div className={styles.rowBody}>
                      <div className={styles.rowMeta}>
                        <span
                          className={`${styles.rowTime} ${row.state === "current" ? styles["rowTime--current"] : ""}`}
                        >
                          {row.time}
                        </span>
                        {row.state === "current" ? (
                          <span className={styles.nowTag}>NOW</span>
                        ) : null}
                      </div>
                      <p
                        className={`${styles.rowTitle} ${row.state === "past" ? styles["rowTitle--past"] : ""}`}
                      >
                        {row.title}
                      </p>
                      <p
                        className={`${styles.rowReason} ${row.state === "rest" ? styles["rowReason--rest"] : ""}`}
                      >
                        {row.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.homeIndicator} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>© {new Date().getFullYear()} Slate</footer>
    </div>
  );
}
