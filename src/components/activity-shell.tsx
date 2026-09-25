import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/stars";
import { cn } from "@/lib/utils";

export function ActivityShell({
  title,
  kicker,
  stars,
  step,
  total,
  onBack,
  children,
  footer,
}: {
  title: string;
  kicker?: string;
  stars?: number;
  step?: number;
  total?: number;
  onBack: () => void;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const ratio = step && total ? step / total : 0;
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pb-8 pt-4 sm:px-6">
      <header className="flex items-center gap-2">
        <Button type="button" variant="ghost" size="icon" onClick={onBack} aria-label="Torna alla classe">
          <ArrowLeft className="size-5" strokeWidth={1.75} />
        </Button>
        <div className="min-w-0 flex-1">
          {kicker ? (
            <p className="text-xs font-medium uppercase tracking-wider text-muted">{kicker}</p>
          ) : null}
          <h1 className="truncate font-display text-xl font-medium text-ink sm:text-2xl">{title}</h1>
        </div>
        {typeof stars === "number" ? <Stars value={stars} /> : null}
      </header>
      {step && total ? (
        <div className="mt-4">
          <div
            className="h-1.5 overflow-hidden rounded-full bg-surface-2"
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={total}
            aria-label={`Domanda ${step} di ${total}`}
          >
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-200 ease-out"
              style={{ width: `${Math.min(100, ratio * 100)}%` }}
            />
          </div>
          <p className="mt-1.5 text-xs tabular-nums text-muted">
            {step} / {total}
          </p>
        </div>
      ) : null}
      <div className="mt-6">{children}</div>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </div>
  );
}

export function PromptCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-5 shadow-card sm:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
}
