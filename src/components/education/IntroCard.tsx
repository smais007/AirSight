// =============================================
// File: components/education/IntroCard.tsx
// =============================================
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rocket, Satellite } from "lucide-react";
import Image from "next/image";

export function IntroCard({ onStart }: { onStart?: () => void }) {
  return (
    <Card className="rounded-2xl shadow-lg border-blue-100 bg-white">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="p-3 bg-blue-100 rounded-xl">
          <Satellite aria-hidden className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <CardTitle className="text-2xl sm:text-3xl font-bold">
            What is NASA TEMPO?
          </CardTitle>
          <CardDescription className="text-base text-slate-600">
            TEMPO is a satellite instrument that measures air pollution over
            North America every hour. In this mission, you’ll explore how
            pollution changes and what choices can improve air.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid sm:grid-cols-2 gap-6">
        {/* Placeholder image (no logos) */}
        <div className="relative w-full h-48 sm:h-56 rounded-xl bg-gradient-to-br from-blue-200 to-sky-300 flex items-center justify-center">
          <Image
            src="/placeholder.svg"
            alt="Placeholder satellite illustration"
            fill
            className="object-contain p-6 opacity-60"
          />
          <span className="relative z-10 text-blue-900 font-semibold">
            Satellite placeholder
          </span>
        </div>
        <div className="space-y-3">
          <p className="text-slate-700">
            Learn with quick activities, friendly maps, and mini challenges.
            Earn XP and badges as you go.
          </p>
          <Button
            aria-label="Start Mission"
            onClick={onStart}
            className="gap-2"
          >
            <Rocket className="h-4 w-4" /> Start Mission
          </Button>
          <div className="text-xs text-slate-500">
            Ages 10–16 • Mobile friendly • Placeholder content
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
