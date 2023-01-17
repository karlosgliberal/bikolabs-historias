<script>
  import TituloDestacado from "./TituloDestacado.svelte";
  import Titulo from "./Titulo.svelte";
  import Pregunta from "./Pregunta.svelte";
  import Texto from "./Texto.svelte";
  import Boton from "./Boton.svelte";
  import { fade, fly } from "svelte/transition";
  import { vis } from "$lib/store.js";
  // import SvelteMarkdown from "svelte-markdown";

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

  let movida = 5;
  console.log("valores", row, col, id, boton, time);
  console.log("col", col);
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
      <!-- <SvelteMarkdown {texto} /> -->
    {/if}

    {#if pregunta != ""}
      <Pregunta {pregunta} />
    {/if}

    {#if tituloBoton != ""}
      <Boton on:message {tituloBoton} />
    {/if}
  </div>

  <!-- <div
    class="z-20 col-span-4 md:col-span-9 row-start-3 self-end text-right my-12"
  >
    <button
      type="button"
      class="bordeA lined thick w-full lg:w-fit text-base font-mono font-bold tracking-widest text-zinc-100 hover:text-zinc-800 bg-zinc-800 hover:bg-stone-50 shadow-xl py-4 px-8 lg:mr-6 "
      >Continuar</button
    >
  </div> -->
{/if}

<style>
  .bordeA {
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
  }

  .bordeA.lined.thick {
    border: solid 3px #e7e5e4;
  }
</style>
