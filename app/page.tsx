import Link from "next/link";

type IconName =
  | "arrow_forward"
  | "code_blocks"
  | "expand_more"
  | "local_fire_department"
  | "menu"
  | "merge_type"
  | "share";

function MaterialIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    className: `inline-flex shrink-0 ${className}`,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow_forward":
      return (
        <svg {...common}>
          <path
            d="M12 4 10.6 5.4 16.2 11H4v2h12.2l-5.6 5.6L12 20l8-8-8-8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "code_blocks":
      return (
        <svg {...common}>
          <rect
            x="4"
            y="5"
            width="16"
            height="14"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="m10 9-3 3 3 3m4-6 3 3-3 3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );
    case "expand_more":
      return (
        <svg {...common}>
          <path
            d="m7 10 5 5 5-5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </svg>
      );
    case "local_fire_department":
      return (
        <svg {...common}>
          <path
            d="M12 22c-2.45-.62-4.29-1.75-5.52-3.38A8.14 8.14 0 0 1 4.65 13.6c0-1.84.49-3.48 1.48-4.93A10.6 10.6 0 0 1 9.3 5.55c.14 1.1.52 2 1.15 2.7.63.7 1.25 1.08 1.85 1.15-.35-1.28-.45-2.45-.3-3.5.15-1.05.54-2.02 1.18-2.9a10.38 10.38 0 0 1 3.18 4.08c.76 1.63 1.1 3.34 1.04 5.12.53-.28.94-.68 1.23-1.2.3-.52.49-1.09.57-1.7a7.56 7.56 0 0 1 1.88 4.95 7.5 7.5 0 0 1-1.83 5.02A8.36 8.36 0 0 1 14 22c.65-.48 1.15-1.04 1.5-1.67.35-.63.52-1.32.52-2.08 0-.82-.34-1.6-1.01-2.34A7.9 7.9 0 0 0 12.2 14c-1.27.53-2.23 1.18-2.88 1.95-.65.77-.97 1.57-.97 2.4 0 .72.16 1.38.49 2 .33.62.72 1.17 1.19 1.65H12Z"
            fill="currentColor"
          />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeLinecap="square"
            strokeWidth="2.4"
          />
        </svg>
      );
    case "merge_type":
      return (
        <svg {...common}>
          <path
            d="M12 4v15m0-15L8 8m4-4 4 4M7 14c3 0 5 2 5 5m5-5c-3 0-5 2-5 5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );
    case "share":
      return (
        <svg {...common}>
          <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="2" />
          <path
            d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-max-width items-center justify-between px-margin-mobile">
          <div className="flex items-center gap-2">
            <MaterialIcon
              name="local_fire_department"
              className="h-6 w-6 text-primary-container"
            />
            <span className="font-headline-md text-headline-md-mobile text-on-background tracking-tighter">
              ABTalks
            </span>
          </div>
          <button
            type="button"
            className="landing-icon-button text-on-background transition-colors hover:text-primary"
            aria-label="Open menu"
          >
            <MaterialIcon name="menu" className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="landing-shell relative mx-auto flex min-h-screen w-full max-w-[390px] flex-col pt-16">
        {/* Hero Section with Background Illustration */}
        <section className="landing-hero relative h-[600px] w-full flex-shrink-0">
          {/* Background Image Container */}
          <div
            className="landing-hero-image absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
            role="img"
            aria-label="A flat silhouette vector illustration of a mountain climber standing triumphantly on a rocky peak, planting a flag. The background is a smooth, glowing radial sunset gradient shifting from vivid bright amber to deep maroon and almost black at the top edges. Cinematic, high contrast, dark mode aesthetic, designed to inspire progression and overcoming challenges."
            style={{
              backgroundImage: "url('/stitch/landing-hero.png')",
            }}
          />
          {/* Bottom fade gradient to blend with background color */}
          <div className="hero-gradient pointer-events-none absolute inset-0" />

          {/* Hero Content */}
          <div className="relative z-10 flex h-full flex-col justify-start px-margin-mobile pt-8">
            {/* Badge */}
            <div className="glow-border mb-stack-md inline-flex w-fit items-center rounded-full border border-primary-container/30 bg-primary-container/10 px-3 py-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">
                60-Day Coding Challenge
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display-lg-mobile mb-stack-md max-w-[280px] text-display-lg-mobile text-on-background">
              SMALL CODE DAILY. <br />
              BIG IMPACT <br />
              <span className="glow-text text-primary-container">FOREVER.</span>
            </h1>

            {/* Subcopy */}
            <p className="font-body-md mb-auto max-w-[260px] text-body-md leading-relaxed text-on-surface-variant">
              Build something every day.
              <br />
              Commit on GitHub.
              <br />
              Share on LinkedIn.
              <br />
              Build your public streak.
            </p>

            {/* CTA Button */}
            <div className="mb-stack-xl mt-auto w-full pb-10">
              <Link
                href="/dashboard"
                className="glow-box landing-cta font-headline-md flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-container py-4 text-body-md font-bold text-[#131313] transition-transform hover:scale-[0.98]"
              >
                START YOUR JOURNEY
                <MaterialIcon name="arrow_forward" className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="relative z-20 -mt-8 flex flex-col items-center justify-center px-margin-mobile py-stack-md">
          <div className="mb-3 flex items-center justify-center">
            <img
              className="relative z-40 h-8 w-8 rounded-full border-2 border-background object-cover"
              alt="A small circular avatar portrait of a young professional looking confident, cinematic lighting, dark background."
              src="/stitch/avatar-1.png"
            />
            <img
              className="relative z-30 -ml-3 h-8 w-8 rounded-full border-2 border-background object-cover"
              alt="A small circular avatar portrait of a female developer with glasses smiling, warm lighting."
              src="/stitch/avatar-2.png"
            />
            <img
              className="relative z-20 -ml-3 h-8 w-8 rounded-full border-2 border-background object-cover"
              alt="A small circular avatar portrait of a male coder in a hoodie, neon blue accent lighting."
              src="/stitch/avatar-3.png"
            />
            <img
              className="relative z-10 -ml-3 h-8 w-8 rounded-full border-2 border-background object-cover"
              alt="A small circular avatar portrait of a creative professional, warm orange rim light."
              src="/stitch/avatar-4.png"
            />
          </div>
          <p className="font-body-md max-w-[200px] text-center text-[13px] leading-tight text-on-surface-variant">
            20K+ students already building their future with ABTalks
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mt-stack-md flex-grow px-margin-mobile py-stack-lg">
          {/* Section Divider */}
          <div className="mb-stack-lg flex items-center justify-center gap-4">
            <div className="h-px flex-grow bg-surface-variant" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              HOW IT WORKS
            </span>
            <div className="h-px flex-grow bg-surface-variant" />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-3 gap-3">
            {/* Step 1 */}
            <div className="landing-step flex flex-col items-center text-center">
              <div className="landing-step-icon mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-variant bg-surface-container-low transition-colors hover:border-primary-container">
                <MaterialIcon
                  name="code_blocks"
                  className="h-6 w-6 text-primary-container"
                />
              </div>
              <span className="font-label-sm mb-1 text-label-sm text-on-background">BUILD</span>
              <span className="font-body-md text-[11px] leading-tight text-on-surface-variant">
                Code daily
              </span>
            </div>

            {/* Step 2 */}
            <div className="landing-step flex flex-col items-center text-center">
              <div className="landing-step-icon mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-variant bg-surface-container-low transition-colors hover:border-primary-container">
                <MaterialIcon
                  name="merge_type"
                  className="h-6 w-6 text-primary-container"
                />
              </div>
              <span className="font-label-sm mb-1 text-label-sm text-on-background">COMMIT</span>
              <span className="font-body-md text-[11px] leading-tight text-on-surface-variant">
                Push to GitHub
              </span>
            </div>

            {/* Step 3 */}
            <div className="landing-step flex flex-col items-center text-center">
              <div className="landing-step-icon mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-variant bg-surface-container-low transition-colors hover:border-primary-container">
                <MaterialIcon name="share" className="h-6 w-6 text-primary-container" />
              </div>
              <span className="font-label-sm mb-1 text-label-sm text-on-background">SHARE</span>
              <span className="font-body-md text-[11px] leading-tight text-on-surface-variant">
                Post on LinkedIn
              </span>
            </div>
          </div>

          <div className="landing-down-indicator mt-stack-lg flex w-full justify-center pb-stack-xl text-surface-variant">
            <MaterialIcon name="expand_more" className="h-5 w-5" />
          </div>
        </section>
      </main>
    </>
  );
}
