// =============================================
// File: components/education/MiniQuiz.tsx
// =============================================
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MiniQuiz({ onPass }: { onPass?: () => void }) {
  const [choice, setChoice] = useState<string | null>(null);
  const [result, setResult] = useState<"idle" | "correct" | "wrong">("idle");

  const correct = "City B";
  const options = ["City A", "City B", "City C", "City D"];

  const submit = (opt: string) => {
    setChoice(opt);
    const ok = opt === correct;
    setResult(ok ? "correct" : "wrong");
    if (ok) onPass?.();
  };

  return (
    <Card
      className={cn(
        "rounded-2xl shadow-lg transition-all",
        result === "wrong" && "animate-shake"
      )}
    >
      <CardHeader>
        <CardTitle className="text-2xl">Mini Quiz</CardTitle>
        <CardDescription>
          Which city had more smog today? (Placeholder question)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {options.map((opt) => (
            <Button
              key={opt}
              aria-label={`Select ${opt}`}
              variant={choice === opt ? "default" : "outline"}
              onClick={() => submit(opt)}
            >
              {opt}
            </Button>
          ))}
        </div>
        {result !== "idle" && (
          <div
            role="status"
            className={cn(
              "text-sm font-medium",
              result === "correct" ? "text-emerald-700" : "text-red-600"
            )}
          >
            {result === "correct"
              ? "Nice! +XP and a badge."
              : "Not quite. Try another activity!"}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
