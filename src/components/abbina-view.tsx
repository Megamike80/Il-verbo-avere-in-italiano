import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { ActivityShell, PromptCard } from "@/components/activity-shell";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/stars";
import { MATCH_PAIRS } from "@/lib/avere-data";
import { speakItalian } from "@/lib/speak";
import { cn, shuffle, starsFromScore } from "@/lib/utils";

type Side = "left" | "right";

export function AbbinaView({
  savedStars,
  onBack,
  onFinish,
}: {
  savedStars: number;
  onBack: () => void;
  onFinish: (stars: 0 | 1 | 2 | 3) => void;
}) {
  const left = useMemo(() => shuffle(MATCH_PAIRS), []);
  const [right, setRight] = useState(() => shuffle(MATCH_PAIRS));
  const [selected, setSelected] = useState<{ side: Side; id: string } | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [done, setDone] = useState(false);

  function pick(side: Side, id: string) {
    if (matched.includes(id) || done) return;
    if (!selected) {
      setSelected({ side, id });
      setWrong(null);
      return;
    }
    if (selected.side === side) {
      setSelected({ side, id });
      return;
    }
    const otherId = selected.id;
    const ok = otherId === id;
    if (ok) {
      const pair = MATCH_PAIRS.find((p) => p.id === id);
      if (pair) speakItalian(pair.speak);
      const next = [...matched, id];
      setMatched(next);
      setSelected(null);
      setWrong(null);
      if (next.length === MATCH_PAIRS.length) {
        setDone(true);
        const correct = MATCH_PAIRS.length;
        const scoreLike = Math.max(0, correct - mistakes);
        onFinish(starsFromScore(scoreLike, MATCH_PAIRS.length));
      }
    } else {
      setMistakes((n) => n + 1);
      setWrong(id);
      setSelected(null);
      window.setTimeout(() => setWrong(null), 450);
    }
  }

  function replay() {
    setRight(shuffle(MATCH_PAIRS));
    setSelected(null);
    setMatched([]);
    setWrong(null);
    setMistakes(0);
    setDone(false);
  }

  const stars = starsFromScore(Math.max(0, MATCH_PAIRS.length - mistakes), MATCH_PAIRS.length);

  if (done) {
    return (
      <ActivityShell title="Abbina" kicker="Risultato" stars={stars} onBack={onBack}>
        <PromptCard className="text-center">
          <p className="font-display text-3xl font-medium text-ink">Tabella ricostruita</p>
          <p className="mt-2 text-muted">
            {mistakes === 0
              ? "Tutte le coppie al primo colpo."
              : `Hai sbagliato ${mistakes} ${mistakes === 1 ? "volta" : "volte"} prima di chiudere.`}
          </p>
          <div className="mt-4 flex justify-center">
            <Stars value={stars} />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button type="button" onClick={onBack}>
              Torna alla classe
            </Button>
            <Button type="button" variant="outline" onClick={replay}>
              <RotateCcw className="size-4" />
              Riprova
            </Button>
          </div>
        </PromptCard>
      </ActivityShell>
    );
  }

  return (
    <ActivityShell title="Abbina" kicker="Persona e forma" stars={savedStars} onBack={onBack}>
      <p className="mb-4 text-sm text-muted">
        Tocca una persona, poi la forma del verbo. Sei coppie, come in tabella.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <ul className="space-y-2">
          {left.map((pair) => {
            const on = matched.includes(pair.id);
            const active = selected?.side === "left" && selected.id === pair.id;
            return (
              <li key={pair.id}>
                <button
                  type="button"
                  disabled={on}
                  onClick={() => pick("left", pair.id)}
                  className={cn(
                    "flex min-h-14 w-full items-center rounded-md border px-3 text-left text-base font-medium transition-[background-color,border-color,opacity] duration-150",
                    on && "border-ok bg-ok-soft text-ok",
                    !on && active && "border-accent bg-accent-soft text-accent",
                    !on && !active && "border-border bg-surface text-ink hover:border-accent/50",
                  )}
                >
                  {pair.left}
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="space-y-2">
          {right.map((pair) => {
            const on = matched.includes(pair.id);
            const active = selected?.side === "right" && selected.id === pair.id;
            const isWrong = wrong === pair.id;
            return (
              <li key={pair.id}>
                <button
                  type="button"
                  disabled={on}
                  onClick={() => pick("right", pair.id)}
                  className={cn(
                    "flex min-h-14 w-full items-center justify-end rounded-md border px-3 text-right font-display text-xl font-medium transition-[background-color,border-color,transform] duration-150",
                    on && "border-ok bg-ok-soft text-ok",
                    !on && active && "border-accent bg-accent-soft text-accent",
                    !on && isWrong && "border-bad bg-bad-soft text-bad",
                    !on && !active && !isWrong && "border-border bg-surface text-ink hover:border-accent/50",
                  )}
                >
                  {pair.right}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </ActivityShell>
  );
}
