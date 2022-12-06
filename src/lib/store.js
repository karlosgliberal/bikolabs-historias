import { writable } from "svelte/store";

function createVisibility() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    verdadero: () => update((n) => n + 1),
    falso: () => update((n) => n - 1),
  };
}

export const vis = createVisibility();
