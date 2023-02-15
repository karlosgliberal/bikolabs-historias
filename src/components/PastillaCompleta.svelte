<script>
  import { fade } from 'svelte/transition'
  import { vis } from '$lib/store.js'
  import Texto from './Texto.svelte'
  import Titulo from './Titulo.svelte'

  export let visible
  export let titulo
  export let texto
  export let position
  export let id

  let timer

  function finDesaparecer() {
    timer = setTimeout(() => {
      vis.verdadero()
    }, 1000)
  }
  // let isVisible = {id} == '1' && {position} == 'center';
</script>

{#if visible}
  <div class="w-full h-full z-20 wrapper_{position} screen_{id}">
    <div
      transition:fade={{ duration: 1500 }}
      on:outroend={finDesaparecer}
      class="z-20 position_{position} fine_{id} h-fit rounded text-white bg-black bg-opacity-75 shadow-xl"
    >
      {#if position == 'center'}
        {#if titulo != ''}
          {#if id == '1'}
            <h2 class="text-3xl tablet:text-6xl font-cabin font-bold pl-6 mb-1 tablet:mb-3">
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

      {#if position == 'right'}
        {#if titulo != ''}
          <h2 class="text-2xl font-cabin font-bold mt-3 pt-6 pl-3">
            <Titulo {titulo} />
          </h2>
        {/if}
      {/if}

      {#if texto != ''}
        <Texto {texto} />
      {/if}
    </div>
  </div>
{/if}

<style>
  .position_right {
    @apply desktop:mt-6 desktop:mr-10 mobile:mt-0 mobile:mr-0 py-10 w-[100%] tablet:w-[70%] desktop:w-[30%];
  }
  .position_center {
    @apply py-5 mt-10 mx-4 tablet:mt-0 tablet:py-10 w-[100%] tablet:w-[80%] desktop:w-[35%];
  }
  .wrapper_center {
    @apply flex justify-start tablet:items-center tablet:justify-center;
  }
  .wrapper_right {
    @apply flex justify-end p-4;
  }
  /* 
  .screen_5 {
     @apply flex justify-end items-center;
      transition: all ease-in-out 1s;
  } */

  .fine_4 {
    @apply mt-20;
    transition: all ease-in-out 500ms;
  }
  .fine_5 {
    @apply mt-40;
    transition: all ease-in-out 500ms;
  }
  .fine_6 {
    @apply mt-60;
    transition: all ease-in-out 500ms;
  }
</style>
