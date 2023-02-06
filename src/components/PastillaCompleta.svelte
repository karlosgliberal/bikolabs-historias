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
  // export let row;
export let col;

  let timer;


  function finDesaparecer() {
    timer = setTimeout(() => {
      vis.verdadero();
    }, 1000);
  }

  let positionClass = col ===2 ? "position_center" : "position_right";

  console.log('col', col);


  // class="z-20 col-span-4 md:col-span-9 lg:col-span-5 row-start-{row} sm:row-start-{row} lg:col-start-{col} self-start h-fit rounded  bg-stone-200 text-zinc-800 text-center shadow-xl mt-24 sm:-mt-24 pb-12 mb-8"
</script>

{#if visible}
  <div
    transition:fade={{ duration: 1000 }}
    on:outroend={finDesaparecer}
    class="z-20 { positionClass} h-fit rounded bg-stone-200 text-zinc-800 shadow-xl mt-24 sm:-mt-24 p-4"
  >
    {#if tituloDestacado != ""}
      <TituloDestacado {tituloDestacado} />
    {/if}

    {#if titulo != ""}
      <Titulo {titulo} />
    {/if}

    {#if texto != ""}
      <Texto {texto} />
    {/if}

    <!-- {#if pregunta != ""}
      <Pregunta {pregunta} />
    {/if} -->
  </div>
  {#if tituloBoton != ""}
    <div class="z-20 absolute bottom-5 right-4">
    <Boton on:message {tituloBoton} />
    </div>
  {/if}

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
    top: 50%;
    right: 50%;
    width: 30%;
  }
</style>


