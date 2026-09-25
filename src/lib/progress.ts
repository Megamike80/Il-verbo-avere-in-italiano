import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ActivityId } from "@/lib/avere-data";

type Stars = 0 | 1 | 2 | 3;

type ProgressState = {
  name: string;
  hydrated: boolean;
  stars: Record<ActivityId, Stars>;
  setName: (name: string) => void;
  setStars: (id: ActivityId, stars: Stars) => void;
  reset: () => void;
  markHydrated: () => void;
};

const emptyStars: Record<ActivityId, Stars> = {
  lezione: 0,
  completa: 0,
  abbina: 0,
  espressioni: 0,
  sfida: 0,
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      name: "",
      hydrated: false,
      stars: emptyStars,
      setName: (name) => set({ name: name.trim().slice(0, 24) }),
      setStars: (id, stars) => {
        const current = get().stars[id];
        if (stars <= current) return;
        set({ stars: { ...get().stars, [id]: stars } });
      },
      reset: () => set({ name: "", stars: emptyStars }),
      markHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "avere-quaderno",
      partialize: (state) => ({ name: state.name, stars: state.stars }),
      onRehydrateStorage: () => (state) => {
        state?.markHydrated();
      },
    },
  ),
);

export function totalStars(stars: Record<ActivityId, Stars>): number {
  return Object.values(stars).reduce<number>((sum, n) => sum + n, 0);
}
