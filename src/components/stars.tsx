import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  value,
  max = 3,
  size = "md",
}: {
  value: number;
  max?: number;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "size-4" : "size-5";
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} su ${max} stelle`}>
      {Array.from({ length: max }, (_, i) => {
        const on = i < value;
        return (
          <Star
            key={i}
            className={cn(dim, on ? "fill-accent text-accent" : "text-border")}
            strokeWidth={1.6}
            aria-hidden="true"
          />
        );
      })}
    </span>
  );
}
