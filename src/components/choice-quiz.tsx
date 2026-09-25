import { useMemo, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityShell, PromptCard } from "@/components/activity-shell";
import { SpeakButton } from "@/components/speak-button";
import { Stars } from "@/components/stars";
import type { ChoiceQuestion } from "@/lib/avere-data";
import { cn, shuffle, starsFromScore } from "@/lib/utils";

function BlankSentence({ text }: { text: string }) {
  const parts = text.split("_____");
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((part, i) => (
        <span key={`${part}-${i}`}>
          {part}
          {i < parts.length - 1 ? (
            <span
              className="mx-1 inline-block min-w-16 border-b-2 border-accent align-baseline"
              aria-label="spazio da completare"
            />
          ) : null}
        </span>
      ))}
    </>
  );
}

function deal(bank: ChoiceQuestion[], count: number) {
  return shuffle(bank).slice(0, count);
}

export function ChoiceQuiz({
  title,
  kicker,
  bank,
  count,
  savedStars,
  onBack,
  onFinish,
}: {
  title: string;
  kicker: string;
  bank: ChoiceQuestion[];
  count: number;
  savedStars: number;
  onBack: () => void;
  onFinish: (stars: 0 | 1 | 2 | 3) => void;
}) {
  const [questions, setQuestions] = useState(() => deal(bank, count));
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[index];
  const options = useMemo(
    () => (current ? shuffle(current.options) : []),
    [current],
  );

  function restart() {
    setQuestions(deal(bank, count));
    setIndex(0);
    setPicked(null);
    setCorrect(0);
    setDone(false);
  }

  if (!current && !done) {
    return (
      <ActivityShell title={title} kicker={kicker} onBack={onBack}>
        <p className="text-muted">Nessuna domanda disponibile.</p>
      </ActivityShell>
    );
  }

  if (done) {
    const stars = starsFromScore(correct, questions.length);
    return (
      <ActivityShell title={title} kicker="Risultato" stars={stars} onBack={onBack}>
        <PromptCard className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted">Punteggio</p>
          <p className="mt-3 font-display text-5xl font-medium tabular-nums text-ink">
            {correct}
            <span className="text-2xl text-muted">/{questions.length}</span>
          </p>
          <div className="mt-4 flex justify-center">
            <Stars value={stars} />
          </div>
          <p className="mx-auto mt-4 max-w-sm text-muted">
            {stars === 3
              ? "Perfetto. La forma è sicura, come in una verifica senza errori."
              : stars === 2
                ? "Molto bene. Rileggi le spiegazioni e riprova per la terza stella."
                : stars === 1
                  ? "Un buon inizio. Torna sulla lezione e poi ripeti l’esercizio."
                  : "Nessun problema: si impara sbagliando. Riapri la lezione e riprova."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button type="button" onClick={onBack}>
              Torna alla classe
            </Button>
            <Button type="button" variant="outline" onClick={restart}>
              <RotateCcw className="size-4" strokeWidth={1.75} />
              Riprova
            </Button>
          </div>
        </PromptCard>
      </ActivityShell>
    );
  }

  const locked = picked !== null;
  const isRight = picked === current.answer;

  function choose(option: string) {
    if (picked) return;
    setPicked(option);
    if (option === current.answer) setCorrect((n) => n + 1);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setDone(true);
      onFinish(starsFromScore(correct, questions.length));
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  }

  return (
    <ActivityShell
      title={title}
      kicker={kicker}
      stars={savedStars}
      step={index + 1}
      total={questions.length}
      onBack={onBack}
      footer={
        locked ? (
          <Button type="button" className="w-full sm:w-auto" onClick={next}>
            {index + 1 >= questions.length ? "Vedi il risultato" : "Avanti"}
          </Button>
        ) : null
      }
    >
      <PromptCard>
        <div>
          <div className="mb-1 flex justify-end">
            <SpeakButton text={current.prompt.replaceAll("_____", "spazio")} />
          </div>
          <p className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            <BlankSentence text={current.prompt} />
          </p>
        </div>
        {current.hint ? <p className="mt-3 text-sm text-muted">{current.hint}</p> : null}
        <div className="mt-6 grid gap-2.5">
          {options.map((option) => {
            const selected = picked === option;
            const showOk = locked && option === current.answer;
            const showBad = locked && selected && option !== current.answer;
            return (
              <Button
                key={option}
                type="button"
                variant="option"
                size="option"
                disabled={locked}
                aria-pressed={selected}
                onClick={() => choose(option)}
                className={cn(
                  showOk && "border-ok bg-ok-soft text-ok hover:bg-ok-soft hover:border-ok",
                  showBad && "border-bad bg-bad-soft text-bad hover:bg-bad-soft hover:border-bad",
                )}
              >
                <span className="flex-1 text-base sm:text-lg">{option}</span>
                {showOk ? <Check className="size-5 shrink-0" strokeWidth={2} /> : null}
                {showBad ? <X className="size-5 shrink-0" strokeWidth={2} /> : null}
              </Button>
            );
          })}
        </div>
        <div className="mt-4 min-h-12" aria-live="polite">
          {locked ? (
            <p className={cn("text-sm", isRight ? "text-ok" : "text-bad")}>
              {isRight ? "Corretto. " : `La forma giusta è «${current.answer}». `}
              {current.explain}
            </p>
          ) : null}
        </div>
      </PromptCard>
    </ActivityShell>
  );
}
