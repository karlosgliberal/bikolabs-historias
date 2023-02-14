<script>
  import { fade } from "svelte/transition";
  import { vis } from "$lib/store.js";
  import Texto from "./Texto.svelte";
  import Titulo from "./Titulo.svelte";

  export let visible;
  export let titulo;
  export let texto;
  export let position;
  export let id;

  let timer;

  function finDesaparecer() {
    timer = setTimeout(() => {
      vis.verdadero();
    }, 1000);
  }
  // let isVisible = {id} == '1' && {position} == 'center';

</script>
{#if visible }
  <div class="w-full h-full z-20 wrapper_{position}">

    <div
      transition:fade={{ duration: 1000 }}
      on:outroend={finDesaparecer}
      class="z-20 position_{position} h-fit rounded text-white bg-black bg-opacity-75 shadow-xl"
    >
      {#if position == 'center'}
        {#if titulo != ""}
         {#if id == '1'}
              <h2 class="text-6xl font-cabin font-bold pl-6 mb-3">
                <Titulo {titulo} />
              </h2>
          {/if}
          {#if id != '1'}
              <h2 class="text-4xl font-cabin font-bold pl-6">
                <Titulo {titulo} />
              </h2>
          {/if}
        {/if}
      {/if}

      {#if position == "right"}
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

  </div>
{/if}




<style>
  .position_right {
    width: 30%;
    @apply desktop:mt-6 desktop:mr-10 mobile:mt-0 mobile:mr-0;

  }
  .position_center {
    width: 30%;
    @apply py-10
  }
  .wrapper_center {
    @apply flex items-center justify-center ;
  }
  .wrapper_right {
    @apply flex justify-end p-4;
  }

</style>
