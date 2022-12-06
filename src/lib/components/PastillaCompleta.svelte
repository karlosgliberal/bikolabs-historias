<script>
  import TituloDestacado from "./TituloDestacado.svelte";
  import Titulo from "./Titulo.svelte";
  import Boton from "./Boton.svelte";
  import { fade, fly } from "svelte/transition";

  let visible = true;
  export const tituloDestacado = false;
  export const boton = true;
  export let step;
  export let row = 2;
  export let col = 3;
  let status = "waiting...";

  let classRow = `row-start-${row} sm:row-start-${row}`;
  let classCol = `lg:col-start-${col}`;

  $: {
    if (step == 1) {
      console.log("pastilla");
    } else if (step == 2) {
      console.log("full");
    }
  }

  function handleMessage(event) {
    console.log("movdia boton");
  }
</script>

{#if step != 1}
  <div
    transition:fade={{ duration: 1000 }}
    on:outroend={() => console.log("fin")}
    class="z-20 col-span-4 md:col-span-9 lg:col-span-5 {classRow} {classCol} self-start h-fit rounded  bg-stone-200 text-zinc-800 text-center shadow-xl mt-24 sm:-mt-24 pb-12 mb-8"
  >
    <Titulo titulo="Eeste es el titulo" />
    <TituloDestacado tituloDestacado="Esto es un titulo" />
    <Boton on:message />
  </div>
{/if}
