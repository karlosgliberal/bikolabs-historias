<script>
  import { fade, fly } from "svelte/transition";
  import { vis } from "$lib/store.js";
  import Texto from "./Texto.svelte";

  export let visible;
  export let texto;
  export let position;
  // export let row;
  //export let col;

  let timer;

  function finDesaparecer() {
    timer = setTimeout(() => {
      vis.verdadero();
    }, 1000);
  }
</script>

{#if visible}
  <div
    transition:fade={{ duration: 1000 }}
    on:outroend={finDesaparecer}
    class="z-20 position_{position} h-fit rounded bg-stone-200 text-zinc-800 shadow-xl mt-24 sm:-mt-24 p-4"
  >
    {#if texto != ""}
      <Texto {texto} />
    {/if}
  </div>
{/if}

<style>
  .position_right {
    position: absolute;
    top: 15%;
    right: 2%;
    width: 30%;
  }
  .position_center {
    position: absolute;
    top: 38%;
    left: 36%;
    width: 30%;
  }
</style>
