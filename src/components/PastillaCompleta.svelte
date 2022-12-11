<script>
  import TituloDestacado from "./TituloDestacado.svelte";
  import Titulo from "./Titulo.svelte";
  import Pregunta from "./Pregunta.svelte";
  import Texto from "./Texto.svelte";
  import Boton from "./Boton.svelte";
  import { fade, fly } from "svelte/transition";
  import { vis } from "$lib/store.js";

  export let visible;
  export let titulo;
  export let tituloDestacado;
  export let tituloBoton;
  export let pregunta;
  export let texto;
  export let row;
  export let col;
  export let id;
  export let boton;
  export let time;

  console.log("valores", row, col, id, boton, time);
  let timer;

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
    class="z-20 col-span-4 md:col-span-9 lg:col-span-5 row-start-{row} sm:row-start-{row} lg:col-start-{col} self-start h-fit rounded  bg-stone-200 text-zinc-800 text-center shadow-xl mt-24 sm:-mt-24 pb-12 mb-8"
  >
    {#if titulo != ""}
      <Titulo {titulo} />
    {/if}

    {#if tituloDestacado != ""}
      <TituloDestacado {tituloDestacado} />
    {/if}

    {#if texto != ""}
      <Texto {texto} />
    {/if}

    {#if pregunta != ""}
      <Pregunta {pregunta} />
    {/if}

    {#if tituloBoton != ""}
      <Boton on:message {tituloBoton} />
    {/if}
  </div>
{/if}
