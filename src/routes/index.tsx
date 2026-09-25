import { createFileRoute } from "@tanstack/react-router";
import { AvereApp } from "@/components/avere-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="paper-wash min-h-dvh text-ink">
      <AvereApp />
    </main>
  );
}
