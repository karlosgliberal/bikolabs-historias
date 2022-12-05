<script>
  import Boton from "./components/Boton.svelte";
  import { fade, fly } from "svelte/transition";
  let visible = true;
  export const titulo = true;
  export const tituloDestacado = false;
  export const boton = true;
  export let step;
  export let text = "movidas esto es unte xto";

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

<!--card container-->
{#if step != 1}
  <div
    transition:fade={{ duration: 1000 }}
    class="z-20 col-span-4 md:col-span-9 lg:col-span-5 row-start-1 sm:row-start-2 lg:col-start-3 self-start h-fit rounded  bg-stone-200 text-zinc-800 text-center shadow-xl mt-24 sm:-mt-24 pb-12 mb-8"
  >
    {#if titulo}
      <!--título-->
      <h1 class="text-base leading-6 tracking-widest md:px-4 pt-24">
        El acierto en las decisiones de los
      </h1>
      <p>{text}</p>
    {/if}

    {#if tituloDestacado}
      <!--parte título destacado-->
      <h1
        class="text-xl sm:text-3xl font-mono font-semibold tracking-wider mt-3 "
      >
        sistemas automatizados
      </h1>
    {/if}
    {#if boton}
      <!--botón con borde tipo trazo tiene css personalizado-->
      <Boton on:message />
    {/if}
  </div>
{/if}
