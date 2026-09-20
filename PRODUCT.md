# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (deployed to Vercel). User's explicit choice, recommended for clean Vercel deploys and room to grow (e.g. a future waitlist API route) without a rewrite.

## Users

Someone with real but limited free time — evenings after a full-time job, weekend mornings, or a fixed non-refundable window when someone specific is visiting — who wants to use it well instead of losing it to decision fatigue. Applies solo (planning for yourself) and for two people who've already chosen to spend time together (a partner or a friend) — never stranger-matching or discovery. Pilot persona: a full-time SWE in Seattle running a side project alongside work.

## Product Purpose

Slate curates what to do with time you already have, solo or with the specific people you've already chosen, over anything from a free evening to a two-week visit, in the places you actually are. It exists because free time isn't the shortage — a plan for it is; deciding "what to do tonight" after a full day of decisions is itself the thing that makes plans not happen, and coordinating that decision across two people's calendars and moods is unpaid logistics work.

## Positioning

Not three separate products for solo/couple/visit — one `Plan` object parameterized by two questions asked once: who's in (just you, or someone who's already opted in) and whether the window is open-ended or fixed-dated. The generated result is a day-by-day spread for the whole horizon at once (not one gap at a time), deliberately mixing specific activities with real rest — "sleep in" is a first-class suggestion, not a fallback. A background check re-runs periodically and proposes better options, but only applies changes the user approves.

## Operating Context

Pre-launch. Native mobile app (Expo/React Native, iOS + Android) with its own established design system (see Brand Commitments) and its own backend/AWS account, independent of this landing page.

## Capabilities and Constraints

No public App Store or Play Store listing yet — the page must not claim availability that doesn't exist. No case studies, testimonials, or usage metrics exist yet.

## Brand Commitments

Existing, established visual identity from the live app — this is not a greenfield brand decision, it should extend the incumbent identity, not replace it:
- Name: Slate
- Palette: primary `#5B5CE2` (indigo/violet); warm editorial neutrals — ink `#171717`, warmWhite `#FAF9F6`, paper `#F3F1EC`, muted `#6B6862`, border `#E6E2DA`; accents lavender `#E9E8FF`, sage `#B8C7B0`, peach `#F3C7B5`, gold `#E6C979`
- Typography: Fraunces serif (600/700 weight) for expressive headline moments; system sans for body/UI copy
- Motion: soft, low-bounce springs, no 800ms+ transitions
- Shape language: generous radii (10-28px), subtle layered shadows
- Full source of truth: `/Users/makoye/Desktop/slate/SlateApp/src/constants/theme.ts`
- App icon: `/Users/makoye/Desktop/slate/SlateApp/assets/images/icon.png`

## Evidence on Hand

- Product pitch and mechanism: `/Users/makoye/Desktop/slate/SlateApp/docs/ideation.md` (real ideation memo, not marketing copy — treat as source of truth for positioning, not verbatim landing copy)
- Design tokens: `/Users/makoye/Desktop/slate/SlateApp/src/constants/theme.ts`
- No testimonials, press, customer logos, or usage numbers exist — do not fabricate any.

## Product Principles

- One underlying model (a parameterized Plan), never three disguised products — the pitch should reflect this, not force artificial feature-tier language.
- Free time is the scarce resource being respected, not manufactured urgency or gamification.
- Honest about pre-launch status — no App Store claim, no invented social proof.
- Solo and two-person use are equally first-class; don't over-index copy toward couples/dating framing.
