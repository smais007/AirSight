"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

interface DetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DetailsModal({ open, onOpenChange }: DetailsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogContent>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-4"
            >
              <DialogHeader>
                <DialogTitle>Project Details</DialogTitle>
                <DialogDescription>
                  Here you can add any details, extra information or components
                  you want.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  This is where your content goes. You can add lists, images, or
                  any other React components.
                </p>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
