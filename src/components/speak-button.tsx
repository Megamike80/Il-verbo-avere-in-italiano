import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { canSpeak, speakItalian } from "@/lib/speak";

export function SpeakButton({
  text,
  label = "Ascolta",
}: {
  text: string;
  label?: string;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(canSpeak());
  }, []);
  if (!ready) return null;
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="shrink-0"
      aria-label={label}
      title={label}
      onClick={() => speakItalian(text)}
    >
      <Volume2 className="size-5" strokeWidth={1.75} />
    </Button>
  );
}
