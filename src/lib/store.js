import { writable } from "svelte/store";

function createVisibility() {
  const { subscribe, set, update } = writable(1);

  return {
    subscribe,
    verdadero: () => update((n) => n + 1),
    falso: () => update((n) => n - 1),
  };
}

export const vis = createVisibility();

function createHistoryPosition() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    sumar: () => update((n) => n + 1),
    restar: () => update((n) => n - 1),
    reset: () => set(0),
  };
}

export const historyPosition = createHistoryPosition();
