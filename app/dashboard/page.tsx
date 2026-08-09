"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen w-full justify-center bg-custom-bg font-body-md text-on-surface">
      {/* 390px Mobile Viewport Container */}
      <div className="relative flex h-auto min-h-screen w-[390px] max-w-full flex-col overflow-x-hidden border-l border-r border-surface-container bg-custom-bg pb-20 shadow-2xl">
        {/* Ambient Background Glow */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,122,26,0.12),transparent_70%)]" />
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
        />

        {/* Top Nav */}
        <div className="relative z-10 flex h-16 items-center justify-between px-4 pt-2">
          <div className="flex items-center gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center text-primary-container">
              <span
                className="material-symbols-outlined text-[28px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                local_fire_department
              </span>
            </div>
            <p className="font-headline-md text-xl text-on-surface">ABTalks</p>
          </div>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-custom-card text-on-surface transition-colors hover:bg-surface-container"
            aria-label="Notifications"
          >
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
              notifications
            </span>
          </button>
        </div>

        <div className="hide-scrollbar relative z-10 flex-1 overflow-y-auto">
          {/* Greeting */}
          <h1 className="px-4 pb-4 pt-6 font-headline-md text-2xl text-on-surface">
            Welcome back, Developer! 🔥
          </h1>

          {/* Current Day Card */}
          <div className="px-4 pb-4">
            <div className="glow-box relative overflow-hidden rounded-xl border border-primary-container/20 bg-custom-card p-6 hover:scale-[1.02] hover:border-primary-container/40 active:scale-[0.98]">
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-code-snippet text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    CURRENT STREAK
                  </p>
                  <h2 className="mt-1 font-display-lg-mobile text-[40px] text-on-surface">
                    DAY 12<span className="text-xl text-on-surface-variant">/60</span>
                  </h2>
                  <p className="mt-2 flex items-center gap-1 font-label-sm text-primary-fixed-dim">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }} aria-hidden="true">
                      emoji_events
                    </span>
                    Best: 17 days
                  </p>
                </div>

                {/* Progress Ring */}
                <div className="relative mt-2 mr-2 flex size-20 items-center justify-center">
                  {/* Ring Background */}
                  <svg
                    className="absolute inset-0 h-full w-full rotate-[-90deg]"
                    viewBox="0 0 36 36"
                    aria-hidden="true"
                  >
                    <path
                      className="text-surface-container"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="glow-orange text-primary-container transition-all duration-700 ease-out"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="100 100"
                      strokeDashoffset={mounted ? 80 : 100}
                    />
                  </svg>
                  {/* Icon */}
                  <span
                    className="material-symbols-outlined animate-flame text-[32px] text-primary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    local_fire_department
                  </span>
                  {/* Particles */}
                  <div className="sparkle" style={{ top: "-5px", left: "20px", animationDelay: "0s" }} />
                  <div
                    className="sparkle"
                    style={{ top: "10px", right: "-5px", animationDelay: "0.5s" }}
                  />
                  <div
                    className="sparkle"
                    style={{ bottom: "5px", left: "-2px", animationDelay: "1.2s" }}
                  />
                  <div
                    className="sparkle"
                    style={{ bottom: "15px", right: "5px", animationDelay: "0.8s" }}
                  />
                  <div
                    className="sparkle"
                    style={{ top: "30px", left: "-10px", animationDelay: "1.5s" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Today&apos;s Mission Card */}
          <div className="px-4 pb-4">
            <div className="glow-box rounded-xl border border-primary-container/20 bg-custom-card p-5 hover:scale-[1.02] hover:border-primary-container/40 active:scale-[0.98]">
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-[24px] text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                  aria-hidden="true"
                >
                  target
                </span>
                <h3 className="font-headline-md text-lg text-on-surface">Today&apos;s Mission</h3>
              </div>
              <h4 className="mb-3 font-body-lg font-bold text-on-surface">
                Binary Search Optimization
              </h4>
              <div className="mb-5 flex gap-2">
                <span className="rounded-md bg-secondary-fixed-dim/20 px-2.5 py-1 font-label-sm text-secondary-fixed">
                  Medium
                </span>
                <span className="flex items-center gap-1 rounded-md bg-surface-container-high px-2.5 py-1 font-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 400" }} aria-hidden="true">
                    schedule
                  </span>{" "}
                  45 min
                </span>
              </div>
              <Link
                href="/day/12"
                className="glow-box flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary-container font-body-md font-bold text-custom-card hover:scale-[1.02] hover:bg-tertiary-container active:scale-[0.98]"
              >
                Start Today&apos;s Mission
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Your Journey Card */}
          <div className="px-4 pb-4">
            <div className="glow-box rounded-xl border border-primary-container/20 bg-custom-card p-5 hover:scale-[1.02] hover:border-primary-container/40 active:scale-[0.98]">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-headline-md text-lg text-on-surface">Your Journey</h3>
                <a
                  className="flex items-center gap-0.5 font-label-sm text-primary-container hover:underline"
                  href="#"
                >
                  View Full Journey{" "}
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    chevron_right
                  </span>
                </a>
              </div>
              <p className="mb-4 font-label-sm text-on-surface-variant">12/60 Days Completed</p>
              <div className="flex items-center justify-between px-1">
                <div className="size-3 rounded-full bg-primary-container" />
                <div className="mx-1 h-0.5 flex-1 bg-primary-container" />
                <div className="size-3 rounded-full bg-primary-container" />
                <div className="mx-1 h-0.5 flex-1 bg-primary-container" />
                <div className="size-3 rounded-full bg-primary-container" />
                <div className="mx-1 h-0.5 flex-1 bg-primary-container" />
                {/* Active Day */}
                <div className="relative flex flex-col items-center">
                  <div className="absolute -top-6 font-code-snippet text-xs font-bold text-primary-container">
                    D12
                  </div>
                  <div className="animate-dot-pulse z-10 size-5 rounded-full border-4 border-custom-bg bg-primary-container" />
                </div>
                <div className="mx-1 h-0.5 flex-1 bg-surface-container" />
                <div className="size-3 rounded-full bg-surface-container" />
                <div className="mx-1 h-0.5 flex-1 bg-surface-container" />
                <div className="size-3 rounded-full bg-surface-container" />
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="px-4 pb-8">
            <div className="glow-box rounded-xl border border-primary-container/20 bg-custom-card p-5 hover:scale-[1.02] hover:border-primary-container/40 active:scale-[0.98]">
              <h3 className="mb-4 font-headline-md text-lg text-on-surface">Achievements</h3>
              <div className="flex gap-4">
                {/* Badge 1 */}
                <div className="flex flex-1 flex-col items-center gap-2">
                  <div className="glow-box flex size-16 items-center justify-center rounded-full border-2 border-primary-container bg-custom-bg">
                    <span
                      className="material-symbols-outlined text-[32px] text-primary-container"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      aria-hidden="true"
                    >
                      local_fire_department
                    </span>
                  </div>
                  <p className="text-center font-label-sm leading-tight text-on-surface">
                    7 Day
                    <br />
                    Streak
                  </p>
                </div>
                {/* Badge 2 */}
                <div className="group relative flex flex-1 cursor-help flex-col items-center gap-2 opacity-60 grayscale transition-all duration-300 hover:scale-[1.02] hover:opacity-100 hover:grayscale-0 active:scale-[0.98]">
                  <div className="glow-box flex size-16 items-center justify-center rounded-full border-2 border-primary-container/30 bg-custom-bg transition-colors group-hover:border-primary-container/60">
                    <span className="material-symbols-outlined text-[32px] text-primary-container" aria-hidden="true">
                      handyman
                    </span>
                  </div>
                  <p className="text-center font-label-sm leading-tight text-on-surface-variant group-hover:text-on-surface">
                    Early
                    <br />
                    Builder
                  </p>
                  {/* Tooltip */}
                  <div className="pointer-events-none absolute -top-10 left-1/2 w-max -translate-x-1/2 rounded-md bg-inverse-surface px-2 py-1 font-label-sm text-inverse-on-surface opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-active:opacity-100">
                    Reach a 10-day streak
                  </div>
                </div>
                {/* Badge 3 */}
                <div className="group relative flex flex-1 cursor-help flex-col items-center gap-2 opacity-60 grayscale transition-all duration-300 hover:scale-[1.02] hover:opacity-100 hover:grayscale-0 active:scale-[0.98]">
                  <div className="glow-box flex size-16 items-center justify-center rounded-full border-2 border-primary-container/30 bg-custom-bg transition-colors group-hover:border-primary-container/60">
                    <span className="material-symbols-outlined text-[32px] text-primary-container" aria-hidden="true">
                      task_alt
                    </span>
                  </div>
                  <p className="text-center font-label-sm leading-tight text-on-surface-variant group-hover:text-on-surface">
                    10
                    <br />
                    Missions
                  </p>
                  {/* Tooltip */}
                  <div className="pointer-events-none absolute -top-10 left-1/2 w-max -translate-x-1/2 rounded-md bg-inverse-surface px-2 py-1 font-label-sm text-inverse-on-surface opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-active:opacity-100">
                    Complete 10 missions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav Bar */}
        <div className="absolute bottom-0 z-50 flex w-full gap-2 border-t border-surface-container bg-custom-card px-4 pb-6 pt-3">
          <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-primary-container transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" href="/dashboard">
            <div className="flex h-8 items-center justify-center">
              <span
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                home
              </span>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </Link>
          <div
            className="flex flex-1 flex-col items-center justify-end gap-1 text-outline transition-all duration-300 hover:scale-[1.02] hover:text-on-surface-variant active:scale-[0.98] cursor-default"
          >
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                map
              </span>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Journey</p>
          </div>
          <div
            className="flex flex-1 flex-col items-center justify-end gap-1 text-outline transition-all duration-300 hover:scale-[1.02] hover:text-on-surface-variant active:scale-[0.98] cursor-default"
          >
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                target
              </span>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Challenges</p>
          </div>
          <div
            className="flex flex-1 flex-col items-center justify-end gap-1 text-outline transition-all duration-300 hover:scale-[1.02] hover:text-on-surface-variant active:scale-[0.98] cursor-default"
          >
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                person
              </span>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
