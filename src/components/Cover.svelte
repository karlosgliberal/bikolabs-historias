<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { fly } from "svelte/transition";
  import { vis } from "$lib/store.js";

  export let visible;
  let timer;

  function finDesaparecer() {
    timer = setTimeout(() => {
      vis.verdadero();
    }, 1000);
  }

  function sayHello() {
    dispatch("message", {
      text: "Hello!",
    });
  }
</script>

{#if visible}
  <!--card container-->
  <div
    in:fly={{ y: 200, duration: 1000 }}
    out:fly={{ y: -200, duration: 1000 }}
    on:outroend={finDesaparecer}
    class="z-20 col-span-4 md:col-span-9 lg:col-span-5 row-start-2 sm:row-start-2 lg:col-start-3 self-start h-fit rounded  bg-stone-200 text-zinc-800 text-center shadow-xl mt-24 sm:-mt-24 pb-12 mb-8"
  >
    <!--título-->
    <h1 class="text-base leading-6 tracking-widest md:px-4 pt-24">
      El acierto en las decisiones de los sistemas automatizados
    </h1>
    <!--parte título destacado-->
    <h1
      class="text-xl sm:text-3xl font-mono font-semibold tracking-wider mt-3 "
    >
      ¿Empezamos?
    </h1>

    <!--botón con borde tipo trazo tiene css personalizado-->
    <!-- <Boton on:message /> -->
    <button
      on:click={sayHello}
      type="button"
      class="bordeB lined thick  w-11/12 md:w-4/12 text-base font-mono font-bold tracking-widest text-zinc-800 bg-stone-200 hover:bg-stone-100 shadow-xl mt-12  py-4 "
      >Comenzar</button
    >
  </div>
{/if}

<style>
  .bordeB {
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
  }

  .bordeB.lined.thick {
    border: solid 3px #27272a;
  }
</style>
