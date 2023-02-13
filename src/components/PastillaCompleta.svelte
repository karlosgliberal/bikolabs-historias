<script>
  import { fade } from "svelte/transition";
  import { vis } from "$lib/store.js";
  import Texto from "./Texto.svelte";
  import Titulo from "./Titulo.svelte";

  export let visible;
  export let titulo;
  export let texto;
  export let position;

  let timer;

  function finDesaparecer() {
    timer = setTimeout(() => {
      vis.verdadero();
    }, 1000);
  }

</script>

{#if visible }
  <div
    transition:fade={{ duration: 1000 }}
    on:outroend={finDesaparecer}
    class="z-20 position_{position} h-fit rounded bg-stone-200 text-zinc-800 shadow-xl mt-24 sm:-mt-24 p-4"
  >

    {#if position === "center"}
      {#if titulo != ""}
        <h2 class="text-4xl font-cabin font-bold mt-3 pt-6 pl-3">
          <Titulo {titulo} />
        </h2>
      {/if}
    {/if}
    
    {#if position === "right"}
      {#if titulo != ""}
        <h2 class="text-2xl font-cabin font-bold mt-3 pt-6 pl-3">
          <Titulo {titulo} />
        </h2>
      {/if}
    {/if}

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
