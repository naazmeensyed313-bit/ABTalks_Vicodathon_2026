# AI Usage Log — ABTalks Redesign

## Route Map
```
/
/dashboard
/day/12
```

## Workflow Overview
ChatGPT was used to understand the hackathon brief and the tools available, and to brief Claude on the project context. Claude then acted as the central coordinator — writing and refining the prompts used across every other AI tool in the pipeline (Stitch, Cursor, GitHub Copilot, Codex), and helping debug issues that came up during implementation.

## Tools Used

**ChatGPT** — Explained the hackathon brief, the idea, and the available tools. Used to inform/brief Claude about the project. Also generated a reference image used as visual inspiration for the UI, and separately gave prompts to Codex for building the Landing page.

**Claude** — Understood the project deeply and produced the prompts used for all other AI tools. Designed the UI direction based on the Stitch export, guided the design-to-code conversion process, and did the bulk of the debugging — including diagnosing a duplicate Next.js route folder (`app/day/%5Bid%5D/` vs. `app/day/[id]/`) that was silently breaking the Challenge Day page's interactivity.

**Google Stitch** — Took prompts (originally from Claude) and generated the UI for all three required screens (Landing, Dashboard, Challenge Day) in the "Sunset Ember" visual direction. Screens were exported as `.html`, `.md`, and `.png` files per screen and organized into folders in the project.

**Google AI Studio** — Used for building the project: converting the Stitch-exported HTML/CSS into working Next.js/TypeScript/Tailwind code, wiring up interactivity (stage transitions, form validation), and iterative polish.

**Cursor** — Used in VS Code for coding, using prompts from Claude; used to modify/refine the Landing page.

**GitHub Copilot** — Used in VS Code to help modify pages, using prompts from Claude.

**Codex** — Used for building the Landing page properly; ChatGPT supplied prompts to Codex for this.

## Example prompts used

**Design-to-code conversion (Stitch → code), scoped per screen:**
> "I'm converting a Google Stitch design export into this Next.js project. This is a structural refactor of existing, finalized design files — not a redesign. Do not simplify, restyle, or creatively reinterpret anything. Reference: [Landing.html], [Landing.md], [Landing.png]... Show me only the diff."

**Bug fix, scoped and diff-only:**
> "Fix only [specific bug]. Do not touch any other file or line. Preserve every other part of the codebase exactly as-is... Show me only the diff."

**Debugging a non-responsive UI element:**
> "The 'Let's Code' button does nothing when clicked. Diagnose the actual cause before writing any fix: check whether 'use client' is the true first line, whether a duplicate route file exists, whether the onClick handler is genuinely wired, and whether an overlapping element is intercepting the click."

## Notable AI-assisted debugging win
A recurring non-functional button issue on the Challenge Day page was traced to a duplicate, URL-encoded route folder (`app/day/%5Bid%5D/` alongside the correct `app/day/[id]/`) that one of the tools kept editing instead of the real file. Diagnosed by comparing both files' content and removing the duplicate folder.

## What is mocked (per hackathon scope)
All data (student streak, task details, achievements) is static/mocked in the frontend — no backend, authentication, or database, per the hackathon's stated scope.
