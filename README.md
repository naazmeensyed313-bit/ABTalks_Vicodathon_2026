# ABTalks Redesign - Vicodathon

This project is a redesign of the ABTalks platform for the Vicodathon hackathon. It focuses on delivering a sleek, user-centric experience for participating in a 60-day coding challenge.

## 🚀 Features

- **Landing Page (`/`)**: A modern entry point introducing the platform and the 60-day challenge.
- **Student Dashboard (`/dashboard`)**: A progress tracking dashboard showing daily milestones, unlocked challenges, and current streak.
- **Challenge Day Workflow (`/day/[id]`)**: A dedicated page for each day's challenge, including:
  - Problem statements, constraints, and examples.
  - A built-in submission flow to verify progress via GitHub and LinkedIn post URLs.
  - Interactive "Let's Code" progression and completion celebratory states.
- **"Sunset Ember" Theme**: A high-contrast, visually engaging aesthetic built with Tailwind CSS.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Design Inspiration:** Google Stitch & ChatGPT generated concepts

## 📝 Note on Scope

As per the hackathon requirements, the data presented in this prototype (student streaks, task details, achievements) is **statically mocked** in the frontend. There is no active backend, database, or live authentication implemented for this iteration. 

## 🤖 AI Workflow & Tools Used

This project heavily utilized an AI-first workflow for rapid prototyping and debugging:

- **ChatGPT:** Brief analysis, concept generation, and visual inspiration generation.
- **Claude:** Central coordinator for prompt engineering, UI direction, and major debugging.
- **Google Stitch:** UI scaffolding and layout generation for the "Sunset Ember" visual direction.
- **Google AI Studio:** Design-to-code conversion, interactive state wiring, and iterative polish.
- **Cursor & GitHub Copilot:** Assisted coding inside VS Code.
- **Codex:** Built out specific structural elements of the Landing page.

*(See `prompt.md` for a deeper breakdown of the AI prompting and debugging workflow).*

## 🏃 Getting Started

First, install the dependencies if you haven't already:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Live Deployment
https://ab-talks-vicodathon-2026.vercel.app/
