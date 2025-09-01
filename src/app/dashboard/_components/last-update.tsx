import { Badge } from "@/components/ui/badge";

export default function LastUpdateStatus() {
  return (
    <Badge variant="outline" className="gap-1.5">
      <span
        className="size-1.5 rounded-full bg-emerald-500"
        aria-hidden="true"
      ></span>
      Last Update 2 min ago
    </Badge>
  );
}
