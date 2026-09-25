import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalP, LegalList, LegalItem, CONTACT_EMAIL } from "../LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Service — Slate",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <LegalP>
        These terms cover your use of Slate. By creating an account or using Slate as a guest, you agree to
        them. Slate is a small, independently run app, not a large company with a legal department, so these
        terms are written to be plain rather than exhaustive.
      </LegalP>

      <LegalSection title="What Slate is">
        <LegalP>
          Slate turns the free time you have into a real plan, using your availability, interests, location,
          and the weather. It suggests real places and activities, but it doesn&rsquo;t book anything, guarantee a
          venue is open, or verify prices or availability on your behalf. Always check with the venue before you
          go, especially for anything time-sensitive.
        </LegalP>
      </LegalSection>

      <LegalSection title="Your account">
        <LegalP>
          You&rsquo;re responsible for the accuracy of what you tell Slate and for keeping your password secure. You
          must be at least 13 years old to use Slate. One account is for one person; sharing a login isn&rsquo;t
          supported.
        </LegalP>
      </LegalSection>

      <LegalSection title="Plans with other people">
        <LegalP>
          When you invite someone into a plan, you&rsquo;re vouching that you actually know them. Slate isn&rsquo;t a
          stranger-discovery app, and invite links are meant for people you&rsquo;ve already chosen, not for public
          sharing.
        </LegalP>
      </LegalSection>

      <LegalSection title="Content you add">
        <LegalP>
          Photos, videos, voice recordings, and notes you add to a plan or reflection are yours. By uploading
          them, you give Slate permission to store and display them back to you and to anyone else you&rsquo;ve
          invited into that plan. Don&rsquo;t upload anything you don&rsquo;t have the right to share, or anything that
          violates someone else&rsquo;s privacy or rights.
        </LegalP>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <LegalP>Don&rsquo;t use Slate to:</LegalP>
        <LegalList>
          <LegalItem>Harass, impersonate, or misuse another person&rsquo;s plan or invite.</LegalItem>
          <LegalItem>Scrape, reverse-engineer, or overload the service.</LegalItem>
          <LegalItem>Upload unlawful content or content you don&rsquo;t have rights to.</LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="No warranty">
        <LegalP>
          Slate is provided as-is. Suggestions come from an AI model reasoning over the information you give it,
          and while Slate checks hard facts (like whether a venue exists in its own data) before showing a plan,
          it can still be wrong, incomplete, or out of date. Slate isn&rsquo;t liable for a plan that doesn&rsquo;t work
          out, a venue that&rsquo;s closed, or a booking you make based on a suggestion.
        </LegalP>
      </LegalSection>

      <LegalSection title="Termination">
        <LegalP>
          You can stop using Slate and delete your account at any time. We can suspend or terminate access for
          behavior that violates these terms, including the acceptable-use section above.
        </LegalP>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <LegalP>If these terms change in a way that matters, we&rsquo;ll update the effective date above and let you know in the app.</LegalP>
      </LegalSection>

      <LegalSection title="Contact">
        <LegalP>Questions about these terms: {CONTACT_EMAIL}.</LegalP>
      </LegalSection>
    </LegalPage>
  );
}
