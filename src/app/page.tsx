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

const venues: Array<{
  photo: string;
  title: string;
  meta: string;
  rating: string;
  price: string;
}> = [
  { photo: "https://picsum.photos/seed/slate-cafe/120/120", title: "Corner cafe", meta: "Food & drink · Ballard", rating: "4.7", price: "$$" },
  { photo: "https://picsum.photos/seed/slate-gallery/120/120", title: "Photo gallery", meta: "Culture · Fremont", rating: "4.5", price: "$" },
  { photo: "https://picsum.photos/seed/slate-trail/120/120", title: "Discovery Park", meta: "Outdoors · Magnolia", rating: "4.9", price: "Free" },
];

const journeyItems: Array<{ time: string; title: string; reason: string; state: "past" | "current" }> = [
  { time: "Fri", title: "Dinner near Ballard", reason: "Arrival night, kept easy.", state: "past" },
  { time: "Sat", title: "Pike Place + ferry to Bainbridge", reason: "The one full day out.", state: "current" },
];

const memories = [
  "https://picsum.photos/seed/slate-mem1/160/160",
  "https://picsum.photos/seed/slate-mem2/160/160",
  "https://picsum.photos/seed/slate-mem3/160/160",
  "https://picsum.photos/seed/slate-mem4/160/160",
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

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20L15.3 15.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#E6C979" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7-6.2 3.7 1.6-7-5.4-4.8 7.1-.7L12 2.5Z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Shared device chrome (bezel, notch, status bar, home indicator) so every screen recreation stays consistent. */
function PhoneFrame({
  children,
  small,
}: {
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <div className={small ? styles.phoneSmall : styles.phone}>
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
        <div className={styles.screenContent}>{children}</div>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
}

function TimelineRail({
  items,
}: {
  items: Array<{ time: string; title: string; reason: string; state: "past" | "current" | "rest" }>;
}) {
  return (
    <div className={styles.timeline}>
      {items.map((row, i) => (
        <div className={styles.timelineRow} key={row.title}>
          <div className={styles.railCol}>
            <span className={`${styles.node} ${styles[`node--${row.state}`]}`}>
              {row.state === "current" ? <span className={styles.pulseRing} /> : null}
            </span>
            {i < items.length - 1 ? <span className={styles.connector} /> : null}
          </div>
          <div className={styles.rowBody}>
            <div className={styles.rowMeta}>
              <span className={`${styles.rowTime} ${row.state === "current" ? styles["rowTime--current"] : ""}`}>
                {row.time}
              </span>
              {row.state === "current" ? <span className={styles.nowTag}>NOW</span> : null}
            </div>
            <p className={`${styles.rowTitle} ${row.state === "past" ? styles["rowTitle--past"] : ""}`}>{row.title}</p>
            <p className={`${styles.rowReason} ${row.state === "rest" ? styles["rowReason--rest"] : ""}`}>{row.reason}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.blobLayer} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blobA}`} />
        <span className={`${styles.blob} ${styles.blobB}`} />
        <span className={`${styles.blob} ${styles.blobC}`} />
      </div>

      <div className={styles.header}>
        <Image className={styles.icon} src="/icon.png" alt="Slate app icon" width={36} height={36} priority />
        <div className={styles.headerText}>
          <span className={styles.wordmark}>Slate</span>
          <span className={styles.platforms}>iOS &amp; Android</span>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.textCol}>
          <h1 className={styles.headline}>
            Make room
            <br />
            <span className={styles.headlineMuted}>for a life.</span>
          </h1>
          <p className={styles.subhead}>
            Solo nights. Time with the people you care about. Visits worth
            planning around.
          </p>
          <p className={styles.status}>
            For iOS and Android. Still in the works.
            <a href="mailto:slate@ndotoni.com">Notify me</a>
          </p>
        </div>

        <PhoneFrame>
          <p className={styles.appGreeting}>Good evening.</p>
          <p className={styles.appTimeLine}>You have about 3 free hours tonight.</p>

          <div className={styles.heroPanel}>
            <span className={styles.heroGlowA} />
            <span className={styles.heroGlowB} />
            <span className={styles.heroEyebrow}>TONIGHT</span>
            <p className={styles.heroTitle}>Golden Gardens at sunset</p>
            <span className={styles.heroTime}>7:30 PM</span>
            <p className={styles.heroReason}>
              A lighter evening. Plenty of room, and this fits what you like.
            </p>
            <div className={styles.heroActions}>
              <span className={styles.heroPrimaryBtn}>Find something else</span>
              <span className={styles.heroGhostBtn}>
                <MapPinIcon />
              </span>
            </div>
          </div>

          <span className={styles.timelineLabel}>TONIGHT</span>
          <TimelineRail items={timeline} />
        </PhoneFrame>
      </main>

      <section className={styles.moreSection}>
        <h2 className={styles.moreHeading}>The rest of the app</h2>

        <div className={styles.moreGrid}>
          <div className={styles.moreItem}>
            <PhoneFrame small>
              <p className={styles.sectionTitle}>Discover.</p>
              <span className={styles.locationChip}>Ballard</span>
              <div className={styles.searchBar}>
                <SearchIcon />
                <span>Search places or activities</span>
              </div>
              <div className={styles.filterRow}>
                <span className={`${styles.filterChip} ${styles.filterChipActive}`}>All</span>
                <span className={styles.filterChip}>Food &amp; drink</span>
                <span className={styles.filterChip}>Culture</span>
              </div>
              <div className={styles.venueList}>
                {venues.map((v, i) => (
                  <div className={`${styles.venueRow} ${i > 0 ? styles.venueRowDivider : ""}`} key={v.title}>
                    <img className={styles.venuePhoto} src={v.photo} alt="" />
                    <div className={styles.venueBody}>
                      <p className={styles.venueTitle}>{v.title}</p>
                      <p className={styles.venueMeta}>{v.meta}</p>
                    </div>
                    <div className={styles.venueStat}>
                      <StarIcon />
                      <span>{v.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </PhoneFrame>
            <p className={styles.moreCaption}>
              Discover — real places nearby, with photos, ratings, and one
              tap to add to a plan.
            </p>
          </div>

          <div className={styles.moreItem}>
            <PhoneFrame small>
              <div className={styles.journeyEyebrow}>
                <span className={styles.journeyDot} />
                <span>Visit &middot; Aug 14&ndash;28</span>
              </div>
              <div className={styles.journeyTitleRow}>
                <p className={styles.journeyTitle}>Seattle, together</p>
                <img className={styles.journeyCover} src="https://picsum.photos/seed/slate-seattle/120/120" alt="" />
              </div>
              <div className={styles.journeyMembers}>
                <span className={styles.avatar}>Y</span>
                <span className={`${styles.avatar} ${styles.avatarOverlap}`}>J</span>
                <span className={styles.journeyMembersText}>You + Jordan</span>
              </div>
              <div className={styles.progressTrack}>
                <span className={styles.progressFill} />
              </div>
              <span className={styles.progressLabel}>5 of 8 planned</span>

              <TimelineRail items={journeyItems} />

              <div className={styles.mediaStrip}>
                <div className={styles.mediaThumbs}>
                  {memories.slice(0, 3).map((src, i) => (
                    <img
                      key={src}
                      className={`${styles.mediaThumb} ${i > 0 ? styles.mediaThumbOverlap : ""}`}
                      src={src}
                      alt=""
                      style={{ zIndex: 3 - i }}
                    />
                  ))}
                </div>
                <div className={styles.mediaStripBody}>
                  <p className={styles.mediaStripTitle}>Photos &amp; videos</p>
                  <p className={styles.mediaStripMeta}>4 memories</p>
                </div>
              </div>
            </PhoneFrame>
            <p className={styles.moreCaption}>
              Plans track who&rsquo;s in, how full the days are, and the
              photos you collect along the way.
            </p>
          </div>

          <div className={styles.moreItem}>
            <PhoneFrame small>
              <p className={styles.sectionTitle}>Journal</p>
              <div className={styles.journalCard}>
                <span className={styles.journalHead}>
                  <span className={styles.journalBadge}>
                    <BookIcon />
                  </span>
                  <span className={styles.journalEyebrow}>JOURNAL</span>
                  <span className={styles.journalDate}>&middot; Sep 14</span>
                </span>
                <span className={styles.journalQuote} aria-hidden="true">
                  &ldquo;
                </span>
                <p className={styles.journalEntry}>
                  Better than expected. The sunset walk was exactly what I
                  needed after a long week.
                </p>
              </div>

              <span className={styles.timelineLabel}>MEMORIES</span>
              <div className={styles.memoryGrid}>
                {memories.map((src) => (
                  <img key={src} className={styles.memoryTile} src={src} alt="" />
                ))}
              </div>
            </PhoneFrame>
            <p className={styles.moreCaption}>
              A private journal for each plan, and every photo saved
              alongside it.
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>© {new Date().getFullYear()} Slate</footer>
    </div>
  );
}
