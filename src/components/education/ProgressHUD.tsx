// =============================================
// File: components/education/ProgressHUD.tsx
// =============================================
"use client";

import { Badge as BadgeIcon, Medal, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { BadgeKey } from "@/app/education/page";

export function ProgressHUD({
  xp,
  badges,
  completionPct,
}: {
  xp: number;
  badges: Record<BadgeKey, boolean>;
  completionPct: number;
}) {
  const unlocked = Object.entries(badges).filter(([, v]) => v);

  return (
    <div className="fixed right-4 bottom-4 z-40 w-72 max-w-[90vw] rounded-2xl border bg-white/90 backdrop-blur shadow-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="font-semibold">Mission Progress</div>
        <div className="text-sm text-slate-600">XP: {xp}</div>
      </div>
      <Progress value={completionPct} aria-label="Completion percentage" />
      <div className="flex items-center gap-2 text-xs text-slate-600">
        <Trophy className="h-4 w-4" aria-hidden />
        {completionPct}% complete
      </div>
      <div className="flex flex-wrap gap-2">
        {unlocked.length === 0 ? (
          <span className="text-xs text-slate-500">
            No badges yet. Start the mission!
          </span>
        ) : (
          unlocked.map(([key]) => (
            <Badge key={key} variant="secondary" className="gap-1">
              <BadgeIcon className="h-3 w-3" aria-hidden />{" "}
              {key.replaceAll("_", " ")}
            </Badge>
          ))
        )}
      </div>
      <div className="text-[10px] text-slate-400 flex items-center gap-1">
        <Medal className="h-3 w-3" aria-hidden /> Gamified demo. No real data.
      </div>
    </div>
  );
}
