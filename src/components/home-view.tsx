import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  BookOpen,
  Link2,
  ListChecks,
  MessageCircle,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/stars";
import { ACTIVITIES, TIPS, type ActivityId } from "@/lib/avere-data";
import { totalStars, useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

const ICONS: Record<ActivityId, typeof BookOpen> = {
  lezione: BookOpen,
  completa: ListChecks,
  abbina: Link2,
  espressioni: MessageCircle,
  sfida: Trophy,
};

export function HomeView({
  onOpen,
}: {
  onOpen: (id: ActivityId) => void;
}) {
  const name = useProgress((s) => s.name);
  const stars = useProgress((s) => s.stars);
  const setName = useProgress((s) => s.setName);
  const hydrated = useProgress((s) => s.hydrated);
  const [draft, setDraft] = useState("");
  const [ready, setReady] = useState(false);
  const tip = useMemo(() => TIPS[Math.floor(Date.now() / 86_400_000) % TIPS.length] ?? TIPS[0], []);
  const total = totalStars(stars);
  const shownName = ready && hydrated ? name : "";

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (hydrated) setDraft(name);
  }, [hydrated, name]);

  function saveName(event: FormEvent) {
    event.preventDefault();
    setName(draft);
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-4xl flex-col px-4 py-8 sm:px-6 sm:py-12">
      <header className="rise-in">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">Scuola primaria</p>
        <h1 className="mt-2 font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">
          Avere
        </h1>
        <p className="mt-3 max-w-lg text-lg text-muted">
          Il verbo della classe. Presente, usi e espressioni, con esercizi da fare da soli o alla
          lavagna.
        </p>
      </header>

      <form
        onSubmit={saveName}
        className="rise-in rise-in-1 mt-8 flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 shadow-card sm:flex-row sm:items-end"
      >
        <label className="flex-1">
          <span className="text-xs font-medium uppercase tracking-wider text-muted">
            Come ti chiami?
          </span>
        {ready ? (
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            maxLength={24}
            placeholder="Il tuo nome"
            autoComplete="off"
            className="mt-1.5 h-12 w-full rounded-md border border-border bg-bg px-3 text-base text-ink outline-none ring-accent/70 placeholder:text-subtle focus:ring-2"
          />
        ) : (
          <div className="mt-1.5 h-12 w-full rounded-md border border-border bg-bg" />
        )}
        </label>
        <Button type="submit" variant="secondary" className="shrink-0">
          {shownName ? "Aggiorna" : "Entra in classe"}
        </Button>
      </form>

      <div className="rise-in rise-in-2 mt-6 flex items-center justify-between gap-4 rounded-lg border border-border bg-accent-soft px-4 py-3">
        <p className="text-sm text-ink">
          {shownName ? `Quaderno di ${shownName}` : "Quaderno della classe"}
        </p>
        <p className="text-sm tabular-nums text-accent">
          {hydrated ? total : 0}
          <span className="text-muted"> / 15 stelle</span>
        </p>
      </div>

      <section className="mt-8 grid gap-3 sm:grid-cols-2">
        {ACTIVITIES.map((activity, i) => {
          const Icon = ICONS[activity.id];
          return (
            <button
              key={activity.id}
              type="button"
              onClick={() => onOpen(activity.id)}
              className={cn(
                "rise-in rounded-xl border border-border bg-surface p-5 text-left shadow-card transition-[transform,border-color] duration-150 hover:border-accent/40 active:scale-[0.98]",
                `rise-in-${Math.min(i + 1, 5)}`,
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-10 items-center justify-center rounded-sm bg-accent-soft text-accent">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <Stars value={hydrated ? stars[activity.id] : 0} size="sm" />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted">
                {activity.kicker}
              </p>
              <h2 className="mt-1 font-display text-2xl font-medium">{activity.title}</h2>
              <p className="mt-2 text-sm text-muted">{activity.description}</p>
            </button>
          );
        })}
      </section>

      <aside className="mt-8 rounded-lg border border-border bg-surface px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">Consiglio</p>
        <p className="mt-1 text-sm text-ink">{tip}</p>
      </aside>
    </div>
  );
}
