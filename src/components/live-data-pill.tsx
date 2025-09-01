"use client";
import React from "react";
import { motion } from "framer-motion";

const LiveDataPill: React.FC = () => {
  return (
    <button
      type="button"
      aria-pressed="true"
      aria-live="polite"
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm transition-colors
                 bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100
                 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-900 dark:hover:bg-emerald-900/40"
    >
      <span className="relative inline-flex h-2.5 w-2.5">
        {/* solid dot */}
        <span className="absolute inset-0 rounded-full bg-emerald-500"></span>
        {/* animated blinking dot using framer-motion */}
        <motion.span
          className="absolute inset-0 rounded-full bg-emerald-300"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </span>
      <span>Live data</span>
    </button>
  );
};

export default LiveDataPill;

/*
USAGE (e.g., in a Next.js page or component):
import LiveDataPill from "@/components/LiveDataPill";

export default function Page(){
  return (
    <div className="p-6">
      <LiveDataPill />
    </div>
  );
}
*/
