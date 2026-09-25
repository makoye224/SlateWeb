import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalP, LegalList, LegalItem, CONTACT_EMAIL } from "../LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy — Slate",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <LegalP>
        This policy explains what Slate collects, why, and who it&rsquo;s shared with. Slate is a small,
        independently run app. If anything here is unclear, contact {CONTACT_EMAIL} and ask.
      </LegalP>

      <LegalSection title="What we collect">
        <LegalP>If you create an account, we collect:</LegalP>
        <LegalList>
          <LegalItem>Your email address and name, used to identify your account and personalize the app.</LegalItem>
          <LegalItem>
            Your home location (a neighborhood you pick, or a precise coordinate if you grant location
            permission), used to plan things near you.
          </LegalItem>
          <LegalItem>
            Interests, occupation, work schedule, sleep schedule, and pace preferences you tell us about, used
            to build your plans.
          </LegalItem>
          <LegalItem>
            The plans you create: dates, titles, the people you invite, and your free/busy availability for
            each plan.
          </LegalItem>
          <LegalItem>Photos, videos, and voice recordings you choose to add to a plan or a daily reflection.</LegalItem>
          <LegalItem>A push notification token, only if you turn notifications on.</LegalItem>
        </LegalList>
        <LegalP>
          If you use Slate without an account, we still assign your device a random identifier so your plans
          work across app sessions. That identifier isn&rsquo;t linked to your name or email, and it resets if you
          choose &ldquo;Start over as a new guest.&rdquo;
        </LegalP>
      </LegalSection>

      <LegalSection title="Why we collect it">
        <LegalP>
          Every field above exists to build and explain your plan: what you have time for, what you like, where
          you are, and what the weather&rsquo;s doing. We don&rsquo;t collect anything we don&rsquo;t use, and we don&rsquo;t build
          a profile of you for advertising.
        </LegalP>
      </LegalSection>

      <LegalSection title="Who we share it with">
        <LegalP>We don&rsquo;t sell your data. We do share what&rsquo;s necessary to run the app, with:</LegalP>
        <LegalList>
          <LegalItem>Amazon Web Services, which hosts your account, your plans, and any photos or videos you upload.</LegalItem>
          <LegalItem>
            Anthropic, whose AI model reasons over your availability, interests, and location to generate a
            plan. It receives what it needs for that one request; it isn&rsquo;t given your email or exact identity.
          </LegalItem>
          <LegalItem>Google or Apple, only if you choose to sign in with one of them instead of an email and password.</LegalItem>
          <LegalItem>Stripe, which processes payment if you subscribe. Slate never sees or stores your card details.</LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <LegalP>
          We keep your data as long as your account exists. Deleting your account (from Settings, or by
          contacting {CONTACT_EMAIL}) removes your profile, plans, and media within a reasonable time
          afterward.
        </LegalP>
      </LegalSection>

      <LegalSection title="Your choices">
        <LegalList>
          <LegalItem>Location, notifications, and microphone access are all optional and requested only when you use a feature that needs them.</LegalItem>
          <LegalItem>You can edit or clear most of your profile (interests, location, schedule, pace, availability) from Profile at any time.</LegalItem>
          <LegalItem>You can delete your account and its data from Settings, or by contacting {CONTACT_EMAIL}.</LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="Children">
        <LegalP>Slate isn&rsquo;t directed at children under 13, and we don&rsquo;t knowingly collect data from them.</LegalP>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <LegalP>If this policy changes in a way that matters, we&rsquo;ll update the effective date above and let you know in the app.</LegalP>
      </LegalSection>

      <LegalSection title="Contact">
        <LegalP>Questions about this policy or your data: {CONTACT_EMAIL}.</LegalP>
      </LegalSection>
    </LegalPage>
  );
}
