<script>
  import TituloDestacado from "./TituloDestacado.svelte";
  import Titulo from "./Titulo.svelte";
  import Boton from "./Boton.svelte";
  import { fade, fly } from "svelte/transition";
  import { vis } from "$lib/store.js";

  export let visible;
  export let titulo = ";";
  export const tituloDestacado = false;
  export const boton = true;
  export let row = 2;
  export let col = 3;

  let timer;
  let classRow = `row-start-${row} sm:row-start-${row}`;
  let classCol = `lg:col-start-${col}`;

  function finDesaparecer() {
    timer = setTimeout(() => {
      vis.verdadero();
    }, 2000);
  }
</script>

{#if visible}
  <div
    transition:fade={{ duration: 1000 }}
    on:outroend={finDesaparecer}
    class="z-20 col-span-4 md:col-span-9 lg:col-span-5 {classRow} {classCol} self-start h-fit rounded  bg-stone-200 text-zinc-800 text-center shadow-xl mt-24 sm:-mt-24 pb-12 mb-8"
  >
    <Titulo {titulo} />
    <TituloDestacado tituloDestacado="Esto es un titulo" />
    <Boton on:message />
  </div>
{/if}
