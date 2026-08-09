---
name: Sunset Ember
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e0c0b1'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a78b7d'
  outline-variant: '#584236'
  surface-tint: '#ffb68e'
  primary: '#ffb68e'
  on-primary: '#542200'
  primary-container: '#ff7a1a'
  on-primary-container: '#5e2700'
  inverse-primary: '#9c4500'
  secondary: '#ffb867'
  on-secondary: '#482900'
  secondary-container: '#d48300'
  on-secondary-container: '#452800'
  tertiary: '#ffb59c'
  on-tertiary: '#5c1900'
  tertiary-container: '#ff7846'
  on-tertiary-container: '#671e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb68e'
  on-primary-fixed: '#331200'
  on-primary-fixed-variant: '#773300'
  secondary-fixed: '#ffddbb'
  secondary-fixed-dim: '#ffb867'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#673d00'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#822800'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Anybody
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  max-width: 1200px
---

## Brand & Style

The design system is built for a coding challenge platform that prioritizes high-octane motivation and a sense of progression. The brand personality is **bold, cinematic, and intense**, designed to make the daily grind of coding feel like an epic ascent. It targets developers who thrive on "streaks" and gamified achievement.

The visual style is a fusion of **Corporate Modern** structure and **Cinematic High-Contrast**. It utilizes deep, near-black backgrounds to make vivid atmospheric gradients and orange accents "glow," simulating the light of a dying sun or a campfire. This contrast evokes a sense of focus and grit. Silhouette imagery and radial glows provide a narrative depth that differentiates it from traditional flat SaaS interfaces.

## Colors

The palette is rooted in a **Dark Mode** environment. The core experience relies on "Ember" accents against "Midnight" surfaces.

- **Backgrounds:** Use `#0A0A0A` for the base canvas and `#121212` for primary content sections.
- **Accents:** Vivid Orange (`#FF7A1A`) is the primary action color. Use the four-color sunset gradient for high-impact moments like achievement modals, progress bars, and "hero" headers.
- **Neutrals:** Cards and inputs use Charcoal (`#1A1A1A`) to maintain a subtle separation from the background without breaking the dark immersion.
- **Text:** Off-white (`#F5F5F5`) is used for body text to reduce eye strain against the pure black background, while pure white is reserved for high-contrast headlines.

## Typography

The typography system uses a high-contrast hierarchy. 

**Anybody** is used for display headlines, set with tight tracking and heavy weights to command attention. For mobile, the tracking is slightly relaxed and the size reduced to ensure legibility while maintaining the "aggressive" brand voice.

**Hanken Grotesk** provides a clean, neutral balance for body copy, ensuring the platform remains functional for reading technical requirements.

**JetBrains Mono** is utilized for metadata, labels, and code blocks, reinforcing the technical nature of the platform and adding a "developer-first" aesthetic.

## Layout & Spacing

This design system utilizes a **Fluid Grid** with fixed maximum widths for desktop screens. 

- **Grid:** A 12-column grid for desktop, 8-column for tablet, and 4-column for mobile.
- **Margins:** Generous side margins (20px on mobile) ensure the UI feels cinematic and not cluttered.
- **Rhythm:** An 8px base spacing unit drives all padding and margins. Vertical rhythm should be aggressive, using larger gaps (`stack-xl`) between major sections to emphasize the "mountain ridge" imagery.
- **Reflow:** On mobile, side-by-side card layouts stack vertically, and navigation transitions from a top bar to a bottom tab bar or hamburger menu to maintain thumb-reachability.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Glows** rather than traditional shadows.

- **Surfaces:** Level 0 is the background (`#0A0A0A`). Level 1 (Cards/Inputs) is `#1A1A1A`. 
- **Borders:** To define edges in a dark environment, use thin (1px) borders in either `#333333` (inactive) or Vivid Orange `#FF7A1A` (active/hover).
- **Luminosity:** Use radial gradients behind key illustrations or icons to create a "sunset glow" effect. This acts as a soft elevation cue, drawing the eye to primary CTAs or achievement metrics.
- **Interaction:** Hovering over a card should transition its border from subtle grey to the primary orange, accompanied by a soft orange outer glow (bloom).

## Shapes

The shape language is consistently **Rounded**. 

- **Base Radius:** 16px (`rounded-lg`) is the standard for all primary cards, input fields, and modals to create a friendly but modern feel.
- **Button Radius:** Use 8px or fully pill-shaped (rounded-full) for primary action buttons to make them feel "clickable" and distinct from layout containers.
- **Containers:** Large section containers or page wrappers use a 24px (`rounded-xl`) radius when nested or floating.

## Components

- **Buttons:** Primary buttons use the vivid orange background with black text. Secondary buttons are outlined in orange with orange text. Buttons should have a slight "inner glow" on top to simulate 3D volume.
- **Cards:** Background `#1A1A1A`, 16px corners, and a 1px border. For "Active" challenges, use the thin orange border.
- **Chips:** Small, pill-shaped tags using `#333333` background and `label-sm` typography. Status-specific chips (e.g., "Medium Difficulty") use a tinted orange background.
- **Input Fields:** Charcoal background with 16px corner radius. Focused state triggers a 1px orange border and a "Looks good!" validation label in green or orange.
- **Progress Bars:** Use the Sunset Gradient for the "filled" portion of the bar, set against a dark `#333333` track.
- **Icons:** Line-style icons. The "Streak" icon is a flame, which should always be rendered in the primary orange or the sunset gradient.
- **Lists:** Clean rows with 1px bottom dividers in `#222222`. Active list items use a left-edge orange accent bar (4px width).