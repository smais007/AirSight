// =============================================
// File: components/education/CTASection.tsx
// =============================================
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <Card className="rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">What’s Next?</CardTitle>
        <CardDescription>
          Keep exploring with open data, internships, and citizen science.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        <Button asChild variant="default">
          <a href="#" aria-label="Explore NASA Open Data">
            NASA Open Data
          </a>
        </Button>
        <Button asChild variant="secondary">
          <a href="#" aria-label="Find Internships">
            Internships
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="#" aria-label="Join Citizen Science">
            Citizen Science
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
