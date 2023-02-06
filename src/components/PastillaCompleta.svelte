<script>
  import TituloDestacado from "./TituloDestacado.svelte";
  import Titulo from "./Titulo.svelte";
  import Pregunta from "./Pregunta.svelte";
  import Texto from "./Texto.svelte";
  import Boton from "./Boton.svelte";
  import { fade, fly } from "svelte/transition";
  import { vis } from "$lib/store.js";
  import Decrementar from "./Decrementar.svelte";

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

  let showBack = tituloBoton === "Siguiente";
  let showButton = tituloBoton.length > 1;

  let positionClass = col ===2 ? "position_center" : "position_right";

  console.log('showback', showBack);
  console.log('showbutton', showButton);

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
  {#if showButton}
    <div class="z-20 absolute bottom-5 right-4 flex items-center gap-6">
    {#if showBack} 
    <div class="">
        <Decrementar/> 
    </div>  
    {/if}
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
    top: 38%;
    left: 36%;    
    width: 30%;
  }
</style>


