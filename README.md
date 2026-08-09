# ABTalks — Redesign (ViCodathon 2026)

A modern, mobile-first redesign of the ABTalks 60-day coding challenge platform, built for ABTalks ViCodathon 2026, Problem 1: Redesign ABTalks.

## What is ABTalks
ABTalks is a 60-day coding challenge for college students. Students build something every day, commit it to GitHub, and share progress on LinkedIn to maintain a public learning streak.

## What this project does
A fresh, premium, atmospheric ("Sunset Ember") UI/UX redesign of the student-facing experience, built mobile-first at 390px width, covering the three required screens:

- **`/`** — Landing Page introducing ABTalks and motivating a student to start the challenge
- **`/dashboard`** — Student Dashboard showing streak, today's task, progress, and achievements
- **`/day/12`** — Challenge Day page: problem statement → proof-of-work submission (GitHub + LinkedIn) → completion celebration, all in one flow

## Route Map
```
/
/dashboard
/day/12
```

## Tech Stack
- Next.js (App Router), TypeScript
- Tailwind CSS
- No backend, no authentication, no database — all data is static/mocked in the frontend, per the hackathon's stated scope

## Design Process
UI/UX designed in Google Stitch, then converted to code with the help of Google AI Studio, Cursor, GitHub Copilot, and Codex, coordinated throughout with Claude. Full details and example prompts are in [`PROMPTS.md`](./PROMPTS.md).

## Key Differentiator
A **Recovery Experience** for missed days: instead of resetting to "Streak: 0" and feeling punishing, the design preserves and highlights the student's best streak and offers a clear "Recover / Continue Today" action.

## Running Locally
```bash
npm install
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000).

## Out of Scope (per hackathon rules)
Authentication, real user accounts, production database, recruiter dashboard, admin panel, and matching ABTalks' current tech stack are all explicitly out of scope for this submission.


## AI Usage
See [`PROMPTS.md`](./PROMPTS.md) for the full AI-usage log and example prompts.
