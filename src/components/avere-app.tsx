import { useEffect, useState } from "react";
import { AbbinaView } from "@/components/abbina-view";
import { ChoiceQuiz } from "@/components/choice-quiz";
import { HomeView } from "@/components/home-view";
import { LezioneView } from "@/components/lezione-view";
import {
  COMPLETA,
  ESPRESSIONI_Q,
  SFIDA,
  type ActivityId,
} from "@/lib/avere-data";
import { useProgress } from "@/lib/progress";
import { stopSpeaking } from "@/lib/speak";

export function AvereApp() {
  const [view, setView] = useState<ActivityId | "home">("home");
  const stars = useProgress((s) => s.stars);
  const setStars = useProgress((s) => s.setStars);
  const markHydrated = useProgress((s) => s.markHydrated);

  useEffect(() => {
    markHydrated();
  }, [markHydrated]);

  useEffect(() => {
    return () => stopSpeaking();
  }, [view]);

  function back() {
    stopSpeaking();
    setView("home");
  }

  if (view === "lezione") {
    return (
      <LezioneView
        savedStars={stars.lezione}
        onBack={back}
        onFinish={(value) => setStars("lezione", value)}
      />
    );
  }
  if (view === "completa") {
    return (
      <ChoiceQuiz
        title="Completa"
        kicker="Scegli la forma"
        bank={COMPLETA}
        count={8}
        savedStars={stars.completa}
        onBack={back}
        onFinish={(value) => setStars("completa", value)}
      />
    );
  }
  if (view === "abbina") {
    return (
      <AbbinaView
        savedStars={stars.abbina}
        onBack={back}
        onFinish={(value) => setStars("abbina", value)}
      />
    );
  }
  if (view === "espressioni") {
    return (
      <ChoiceQuiz
        title="Espressioni"
        kicker="Lessico di ogni giorno"
        bank={ESPRESSIONI_Q}
        count={8}
        savedStars={stars.espressioni}
        onBack={back}
        onFinish={(value) => setStars("espressioni", value)}
      />
    );
  }
  if (view === "sfida") {
    return (
      <ChoiceQuiz
        title="La sfida"
        kicker="Dieci domande"
        bank={SFIDA}
        count={10}
        savedStars={stars.sfida}
        onBack={back}
        onFinish={(value) => setStars("sfida", value)}
      />
    );
  }

  return <HomeView onOpen={setView} />;
}
