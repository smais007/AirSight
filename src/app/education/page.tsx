// =============================================
// File: app/education/page.tsx
// =============================================
"use client";

import React, { useMemo, useState } from "react";
import { IntroCard } from "@/components/education/IntroCard";
import { PollutantExplorer } from "@/components/education/PollutantExplorer";
import { CauseEffectSimulator } from "@/components/education/CauseEffectSimulator";
import { TimeLapseViewer } from "@/components/education/TimeLapseViewer";
import { MiniQuiz } from "@/components/education/MiniQuiz";
import { DataJourney } from "@/components/education/DataJourney";
import { CTASection } from "@/components/education/CTASection";
import { ProgressHUD } from "@/components/education/ProgressHUD";
import { Button } from "@/components/ui/button";

// Shared types
export type BadgeKey =
  | "mission_started"
  | "pollution_detective"
  | "air_hero"
  | "time_traveler"
  | "quiz_master"
  | "data_explorer";

export default function EducationPage() {
  const [xp, setXp] = useState<number>(0);
  const [badges, setBadges] = useState<Record<BadgeKey, boolean>>({
    mission_started: false,
    pollution_detective: false,
    air_hero: false,
    time_traveler: false,
    quiz_master: false,
    data_explorer: false,
  });

  const completionPct = useMemo(() => {
    const total = Object.keys(badges).length;
    const unlocked = Object.values(badges).filter(Boolean).length;
    return Math.round((unlocked / total) * 100);
  }, [badges]);

  const awardBadge = (key: BadgeKey, xpAward = 10) => {
    setBadges((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
    setXp((prev) => prev + xpAward);
  };

  const sectionNav = [
    { id: "intro", label: "Intro" },
    { id: "pollutants", label: "Pollutants" },
    { id: "simulator", label: "Simulator" },
    { id: "timelapse", label: "Time-Lapse" },
    { id: "quiz", label: "Quiz" },
    { id: "journey", label: "Data Journey" },
    { id: "cta", label: "What's Next" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-emerald-50">
      {/* Floating Progress HUD */}
      <ProgressHUD xp={xp} badges={badges} completionPct={completionPct} />

      {/* In-page nav (smooth scroll via CSS behavior) */}
      <nav className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-2 flex gap-2 overflow-x-auto">
          {sectionNav.map((s) => (
            <Button key={s.id} variant="secondary" asChild>
              <a href={`#${s.id}`} className="whitespace-nowrap">
                {s.label}
              </a>
            </Button>
          ))}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-8 scroll-smooth">
        <section id="intro">
          <IntroCard onStart={() => awardBadge("mission_started", 15)} />
        </section>

        <section id="pollutants" className="scroll-mt-24">
          <PollutantExplorer
            onComplete={() => awardBadge("pollution_detective", 20)}
          />
        </section>

        <section id="simulator" className="scroll-mt-24">
          <CauseEffectSimulator
            onFirstInteract={() => awardBadge("air_hero", 15)}
          />
        </section>

        <section id="timelapse" className="scroll-mt-24">
          <TimeLapseViewer onComplete={() => awardBadge("time_traveler", 10)} />
        </section>

        <section id="quiz" className="scroll-mt-24">
          <MiniQuiz onPass={() => awardBadge("quiz_master", 25)} />
        </section>

        <section id="journey" className="scroll-mt-24">
          <DataJourney onViewed={() => awardBadge("data_explorer", 10)} />
        </section>

        <section id="cta" className="scroll-mt-24">
          <CTASection />
        </section>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
