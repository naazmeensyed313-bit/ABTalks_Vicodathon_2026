"use client";

import { useState } from "react";
import Link from "next/link";

export default function ChallengeDayPage() {
  const [stage, setStage] = useState<'problem' | 'submit' | 'complete'>('problem');
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');

  const isGithubValid = githubUrl.trim().length > 0 && githubUrl.startsWith('https://');
  const isLinkedinValid = linkedinUrl.trim().length > 0 && linkedinUrl.startsWith('https://');
  const canSubmit = isGithubValid && isLinkedinValid;

  return (
    <div className="flex min-h-screen w-full justify-center bg-custom-bg font-body-md text-on-surface">
      <div className="relative w-full max-w-[390px] mx-auto overflow-x-hidden bg-background shadow-2xl pb-20 min-h-[100dvh]">
        {/* Sticky Header */}
        <header className="fixed top-0 w-full max-w-[390px] z-50 bg-[#0A0A0A]/90 backdrop-blur-md px-margin-mobile h-16 flex items-center justify-between border-b border-surface-container-high">
          <Link href="/dashboard" className="flex items-center text-on-surface hover:text-primary transition-colors">
            <span className="material-symbols-outlined mr-1" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back_ios</span>
            <span className="font-label-sm text-label-sm">Back</span>
          </Link>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Day 12 / 60</span>
        </header>

        {/* Main Content Canvas */}
        <main className="pt-16">
          {/* Hero Banner Section */}
          <div className="relative w-full h-64 overflow-hidden bg-surface-container-lowest">
            <div 
              className="absolute inset-0 bg-cover bg-center w-full h-full opacity-80" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUGX6UYGFZ6SX6I1-U45slvIsAaeUDQ8Olft-1P3eO2emVT3Fpc53QfvQDZqE4RKYAm93eN5X3y77grnh-XV-_SGJipyuZGtPFBm8UZoAg1nWnCNk3nsHrBEB1Gvfa6Ba2t-L7Kib8xK3wb11OmL5MTcakfwsIjaWOeR0EMWh6sJbxpLFL9mvaRnlhrKu5mFMOVtwFdPGC12PdOweOZROCPcQ8kDawoEEIKA-a9KX2_E0M-gDSrM_t')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"></div>
          </div>

          {/* Title & Meta */}
          <div className="px-margin-mobile relative -mt-12 z-10">
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-stack-md">Binary Search<br />Optimization</h1>
            <div className="flex items-center gap-gutter mb-stack-lg">
              <div className="flex items-center gap-2 bg-[#333333] px-3 py-1.5 rounded-full border border-primary-container/30 text-primary-container">
                <span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span>
                <span className="font-label-sm text-label-sm">Medium</span>
              </div>
              <div className="flex items-center gap-2 bg-[#333333] px-3 py-1.5 rounded-full text-on-surface-variant border border-surface-container-high">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span className="font-label-sm text-label-sm">45 min</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-surface-container-high mb-stack-lg">
              <button className="flex-1 pb-3 text-center border-b-2 border-primary-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider">Problem</button>
              <button className="flex-1 pb-3 text-center border-b-2 border-transparent text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider hover:text-on-surface">Examples</button>
              <button className="flex-1 pb-3 text-center border-b-2 border-transparent text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider hover:text-on-surface">Constraints</button>
            </div>
          </div>

          {/* Section A: Problem Statement */}
          <section className="px-margin-mobile mb-stack-xl">
            <h2 className="text-on-surface font-body-md font-semibold mb-stack-sm">Problem Statement</h2>
            <p className="text-on-surface-variant font-body-md mb-stack-md">Implement an optimized binary search algorithm to handle large datasets efficiently.</p>
            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-surface-container-high mb-stack-md font-code-snippet text-code-snippet text-on-surface overflow-x-auto">
              <p className="text-primary-container mb-1">Input: <span className="text-on-surface">nums = [1,3,5,7,9,11,13,15],</span></p>
              <p className="text-on-surface ml-12 mb-1">target = 7</p>
              <p className="text-primary-container">Output: <span className="text-on-surface">3</span></p>
            </div>
            
            <h3 className="text-on-surface font-body-md font-semibold mb-stack-sm mt-stack-md">What you need to do</h3>
            <ul className="space-y-3 mb-stack-lg">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface-variant font-body-md">Optimize the binary search</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface-variant font-body-md">Handle edge cases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface-variant font-body-md">Achieve O(log n) complexity</span>
              </li>
            </ul>
            
            {stage === 'problem' && (
              <button 
                onClick={() => setStage('submit')}
                className="w-full bg-primary-container text-background font-headline-md text-headline-md-mobile py-4 rounded-xl glow-button flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                LET&apos;S CODE
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            )}
          </section>

          {(stage === 'submit' || stage === 'complete') && (
            <>
              {/* Divider */}
              <div className="h-px w-full bg-surface-container-highest my-stack-xl relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#0A0A0A] px-4 text-surface-bright">
                  <span className="material-symbols-outlined">keyboard_arrow_down</span>
                </div>
              </div>

              {/* Section B: Submit Proof */}
              <section className="px-margin-mobile mb-stack-xl">
                <h2 className="font-headline-md text-headline-md-mobile text-on-surface mb-stack-sm">Submit Your Proof</h2>
                <p className="text-on-surface-variant font-body-md mb-stack-lg">Show the world your progress! 🚀</p>
                
                <div className="space-y-stack-md mb-stack-lg">
                  {/* GitHub Input */}
                  <div>
                    <label className="flex items-center gap-2 text-on-surface font-body-md mb-stack-sm">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full border border-primary-container text-primary-container font-label-sm text-xs">1</span>
                      <span className="material-symbols-outlined text-on-surface-variant">code</span>
                      GitHub Repository / Commit
                    </label>
                    <div className="relative">
                      <input 
                        className="w-full bg-[#1A1A1A] border border-surface-container-high rounded-xl py-3 px-4 text-on-surface font-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" 
                        type="text" 
                        placeholder="https://github.com/..."
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                        readOnly={stage === 'complete'}
                      />
                      {isGithubValid && (
                        <div className="flex items-center gap-1 text-[#4CAF50] mt-2 ml-1">
                          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          <span className="font-label-sm text-xs">Looks good!</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* LinkedIn Input */}
                  <div className="pt-stack-sm">
                    <label className="flex items-center gap-2 text-on-surface font-body-md mb-stack-sm">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full border border-primary-container text-primary-container font-label-sm text-xs">2</span>
                      <span className="material-symbols-outlined text-on-surface-variant">share</span>
                      LinkedIn Post URL
                    </label>
                    <div className="relative">
                      <input 
                        className="w-full bg-[#1A1A1A] border border-surface-container-high rounded-xl py-3 px-4 text-on-surface font-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" 
                        type="text" 
                        placeholder="https://linkedin.com/posts/..."
                        value={linkedinUrl}
                        onChange={(e) => setLinkedinUrl(e.target.value)}
                        readOnly={stage === 'complete'}
                      />
                      {isLinkedinValid && (
                        <div className="flex items-center gap-1 text-[#4CAF50] mt-2 ml-1">
                          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          <span className="font-label-sm text-xs">Looks good!</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {stage === 'submit' && (
                  <button 
                    onClick={() => setStage('complete')}
                    disabled={!canSubmit}
                    className={`w-full bg-primary-container text-background font-headline-md text-[20px] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-opacity mb-3 ${canSubmit ? 'glow-button hover:opacity-90' : 'opacity-50 cursor-not-allowed'}`}
                  >
                    SUBMIT DAY 12
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                )}
                
                <p className="text-center text-on-surface-variant font-label-sm text-label-sm">Make sure your post is public</p>

                {/* Atmospheric Graphic bottom of Submit section */}
                <div className="mt-stack-xl relative w-full h-48 overflow-hidden rounded-xl border border-surface-container-high">
                  <div 
                    className="absolute inset-0 bg-cover bg-bottom w-full h-full opacity-70" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLqGkRUpm8tBlrYTA-PnuxEAQSzyJ24noO-wbzveKg8aE1e_PdLKrHY7qpuCpgblLnmRWpekwoBqUbavOKgvB7Z4LN3NNamFQrzh_ieRCkNx1Y9OnwSc0cHCbBfnj1CuV_czku5-lPQ2I3oAgNkPmARUyxA-xlHy9KAYWKzKxxGQsMAzVBJCV6JY8uubSN9lpmhdrse7AxljchqqMLWaX0fH-WUgRrSVasz0aQi8Sj5_YjqLIRFmmL')" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                </div>
              </section>
            </>
          )}

          {stage === 'complete' && (
            <>
              {/* Divider */}
              <div className="h-px w-full bg-surface-container-highest my-stack-xl relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#0A0A0A] px-4 text-surface-bright">
                  <span className="material-symbols-outlined">celebration</span>
                </div>
              </div>

              {/* Section C: Completion Celebration */}
              <section className="px-margin-mobile text-center pt-stack-md pb-stack-xl relative">
                {/* Confetti / Sparkles Background Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center">
                  <div className="w-64 h-64 bg-primary-container rounded-full blur-[100px]"></div>
                </div>
                
                {/* Hexagon Badge */}
                <div className="relative w-32 h-32 mx-auto mb-stack-lg flex items-center justify-center">
                  <svg className="w-full h-full text-primary-container drop-shadow-[0_0_15px_rgba(255,122,26,0.8)] absolute inset-0" viewBox="0 0 100 100">
                    <polygon fill="#1A1A1A" points="50 5, 95 25, 95 75, 50 95, 5 75, 5 25" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"></polygon>
                  </svg>
                  <span className="material-symbols-outlined text-[64px] text-primary-container relative z-10 glow-icon" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                </div>

                <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-2">DAY 12</h2>
                <h3 className="font-display-lg-mobile text-[28px] text-primary-container glow-text mb-stack-md">COMPLETE!</h3>
                <p className="text-on-surface font-body-md mb-1">Amazing work! 🔥</p>
                <p className="text-on-surface-variant font-body-md mb-stack-lg">Your streak is now 12 days.</p>
                
                <div className="inline-flex items-center gap-1.5 bg-[#1A1A1A] border border-surface-container-high px-4 py-2 rounded-full mb-stack-xl">
                  <span className="material-symbols-outlined text-primary-container text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                  <span className="font-label-sm text-label-sm text-on-surface">+50 XP</span>
                </div>
                
                {/* Progress Timeline */}
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-[10px] mb-2 px-2">
                  <span>12 / 60 <span className="font-normal opacity-70">Days Completed</span></span>
                </div>
                
                <div className="flex items-center gap-1 mb-stack-xl w-full px-2">
                  <div className="w-6 h-6 rounded-full border border-surface-container-high flex items-center justify-center text-[10px]">10</div>
                  <div className="flex-1 h-px bg-primary-container/30"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-container glow-icon"></div>
                  <div className="flex-1 h-px bg-primary-container/30"></div>
                  {/* Active Day */}
                  <div className="w-8 h-8 rounded-full bg-primary-container text-background font-bold flex items-center justify-center text-xs glow-icon ring-2 ring-background z-10">12</div>
                  <div className="flex-1 h-px bg-surface-container-high"></div>
                  <div className="w-6 h-6 rounded-full border border-surface-container-high flex items-center justify-center text-[10px]">13</div>
                  <div className="flex-1 h-px bg-surface-container-high"></div>
                  <div className="w-6 h-6 rounded-full border border-surface-container-high flex items-center justify-center text-[10px]">14</div>
                  <div className="flex-1 h-px bg-surface-container-high"></div>
                  <div className="w-6 h-6 rounded-full border border-surface-container-high flex items-center justify-center text-[10px] text-surface-container-high">🔒</div>
                  <div className="flex-1 h-px bg-surface-container-high"></div>
                  <div className="w-6 h-6 rounded-full border border-surface-container-high flex items-center justify-center text-[10px]">60</div>
                </div>

                <Link 
                  href="/dashboard"
                  className="w-full bg-primary-container text-background font-headline-md text-[20px] font-bold py-4 rounded-xl glow-button flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  CONTINUE JOURNEY
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
