import { useState } from "react";
import { Check, X } from "lucide-react";
import { ActivityShell, PromptCard } from "@/components/activity-shell";
import { SpeakButton } from "@/components/speak-button";
import { Button } from "@/components/ui/button";
import { CONJUGATION, LEZIONE_CHECK, USES } from "@/lib/avere-data";
import { speakItalian } from "@/lib/speak";
import { cn, shuffle } from "@/lib/utils";

export function LezioneView({
  savedStars,
  onBack,
  onFinish,
}: {
  savedStars: number;
  onBack: () => void;
  onFinish: (stars: 0 | 1 | 2 | 3) => void;
}) {
  const [step, setStep] = useState<"studio" | "check" | "fine">("studio");
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [options, setOptions] = useState<string[]>(() => shuffle(LEZIONE_CHECK[0]?.options ?? []));

  const question = LEZIONE_CHECK[qIndex];

  function startCheck() {
    setStep("check");
    setQIndex(0);
    setPicked(null);
    setCorrect(0);
    setOptions(shuffle(LEZIONE_CHECK[0]?.options ?? []));
  }

  function choose(option: string) {
    if (picked || !question) return;
    setPicked(option);
    if (option === question.answer) setCorrect((n) => n + 1);
  }

  function nextCheck() {
    if (!question) return;
    if (qIndex + 1 >= LEZIONE_CHECK.length) {
      setStep("fine");
      const stars = (correct === 3 ? 3 : correct === 2 ? 2 : correct === 1 ? 1 : 0) as
        | 0
        | 1
        | 2
        | 3;
      onFinish(stars);
      return;
    }
    const next = qIndex + 1;
    setQIndex(next);
    setPicked(null);
    setOptions(shuffle(LEZIONE_CHECK[next]?.options ?? []));
  }

  if (step === "fine") {
    const stars = (correct === 3 ? 3 : correct === 2 ? 2 : correct === 1 ? 1 : 0) as 0 | 1 | 2 | 3;
    return (
      <ActivityShell title="La lezione" kicker="Fatto" stars={stars} onBack={onBack}>
        <PromptCard className="text-center">
          <p className="font-display text-3xl font-medium text-ink">Lezione conclusa</p>
          <p className="mt-3 text-muted">
            {stars === 3
              ? "Hai tenuto a mente le tre idee chiave. Puoi passare agli esercizi."
              : "Rileggi la tabella e il riquadro sulla H muta, poi ripeti il controllo."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button type="button" onClick={onBack}>
              Torna alla classe
            </Button>
            <Button type="button" variant="outline" onClick={() => setStep("studio")}>
              Rivedi la lezione
            </Button>
          </div>
        </PromptCard>
      </ActivityShell>
    );
  }

  if (step === "check" && question) {
    const locked = picked !== null;
    const isRight = picked === question.answer;
    return (
      <ActivityShell
        title="Controllo"
        kicker="Tre domande"
        stars={savedStars}
        step={qIndex + 1}
        total={LEZIONE_CHECK.length}
        onBack={onBack}
        footer={
          locked ? (
            <Button type="button" className="w-full sm:w-auto" onClick={nextCheck}>
              {qIndex + 1 >= LEZIONE_CHECK.length ? "Chiudi la lezione" : "Avanti"}
            </Button>
          ) : null
        }
      >
        <PromptCard>
          <p className="font-display text-2xl font-medium text-ink">{question.prompt}</p>
          <div className="mt-6 grid gap-2.5">
            {options.map((option) => {
              const selected = picked === option;
              const showOk = locked && option === question.answer;
              const showBad = locked && selected && option !== question.answer;
              return (
                <Button
                  key={option}
                  type="button"
                  variant="option"
                  size="option"
                  disabled={locked}
                  onClick={() => choose(option)}
                  className={cn(
                    showOk && "border-ok bg-ok-soft text-ok hover:bg-ok-soft hover:border-ok",
                    showBad && "border-bad bg-bad-soft text-bad hover:bg-bad-soft hover:border-bad",
                  )}
                >
                  <span className="flex-1 text-base">{option}</span>
                  {showOk ? <Check className="size-5" /> : null}
                  {showBad ? <X className="size-5" /> : null}
                </Button>
              );
            })}
          </div>
          <div className="mt-4 min-h-12" aria-live="polite">
            {locked ? (
              <p className={cn("text-sm", isRight ? "text-ok" : "text-bad")}>
                {isRight ? "Corretto. " : `La risposta è «${question.answer}». `}
                {question.explain}
              </p>
            ) : null}
          </div>
        </PromptCard>
      </ActivityShell>
    );
  }

  return (
    <ActivityShell title="La lezione" kicker="Presente indicativo" stars={savedStars} onBack={onBack}>
      <div className="space-y-6">
        <PromptCard>
          <p className="text-sm font-medium uppercase tracking-wider text-muted">Il verbo</p>
          <h2 className="mt-1 font-display text-3xl font-medium text-ink">avere</h2>
          <p className="mt-3 text-muted">
            Un verbo irregolare, tra i primi che si imparano. Serve per il possesso, per l’età e per tante
            sensazioni di ogni giorno.
          </p>
        </PromptCard>

        <PromptCard className="p-0 sm:p-0">
          <div className="border-b border-border px-5 py-4 sm:px-7">
            <h2 className="font-display text-xl font-medium">La tabella</h2>
            <p className="mt-1 text-sm text-muted">Tocca una riga per ascoltare.</p>
          </div>
          <ul>
            {CONJUGATION.map((row, i) => (
              <li key={row.person} className={cn(i > 0 && "border-t border-border")}>
                <button
                  type="button"
                  onClick={() => speakItalian(`${row.person} ${row.form}. ${row.example}`)}
                  className="flex w-full items-center gap-4 px-5 py-3.5 text-left hover:bg-accent-soft sm:px-7"
                >
                  <span className="w-24 shrink-0 text-sm text-muted sm:w-28">{row.person}</span>
                  <span className="font-display text-2xl font-medium text-accent">{row.form}</span>
                  <span className="ml-auto hidden text-sm text-muted sm:inline">{row.example}</span>
                </button>
              </li>
            ))}
          </ul>
        </PromptCard>

        <div className="rounded-lg border border-accent/25 bg-accent-soft px-5 py-4">
          <p className="text-sm font-medium text-accent">La H muta</p>
          <p className="mt-1 text-sm text-ink">
            In ho, hai, ha, hanno la H non si pronuncia, ma si scrive sempre. Serve a non confondere{" "}
            <span className="font-medium">ha</span> (verbo) con <span className="font-medium">a</span>{" "}
            (preposizione: vado a scuola).
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-medium">Quando lo usiamo</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {USES.map((use) => (
              <div key={use.id} className="rounded-lg border border-border bg-surface p-4">
                <p className="font-display text-lg font-medium">{use.title}</p>
                <p className="mt-1 text-sm text-muted">{use.lead}</p>
                <ul className="mt-3 space-y-1">
                  {use.examples.map((ex) => (
                    <li key={ex} className="flex items-start justify-between gap-2 text-sm">
                      <span>{ex}</span>
                      <SpeakButton text={ex} label={`Ascolta: ${ex}`} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <PromptCard>
          <p className="text-sm font-medium uppercase tracking-wider text-muted">Per i più grandi</p>
          <h2 className="mt-1 font-display text-xl font-medium">Avere come ausiliare</h2>
          <p className="mt-2 text-muted">
            Dal terzo anno, avere aiuta a costruire il passato prossimo di molti verbi: ho mangiato, hai
            visto, ha fatto, abbiamo letto. Qui ci fermiamo al presente: prima le forme, poi i tempi.
          </p>
        </PromptCard>

        <Button type="button" className="w-full sm:w-auto" onClick={startCheck}>
          Tre domande di controllo
        </Button>
      </div>
    </ActivityShell>
  );
}
