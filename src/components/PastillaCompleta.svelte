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
  export let cables_escena

  cables_escena = position

  let timer

  function finDesaparecer() {
    timer = setTimeout(() => {
      vis.verdadero()
    }, 1000)
  }
</script>

{#if visible}
  <div class="w-full h-full z-20 wrapper_{position} screen_{id}">
    <div
      transition:fade={{ duration: 1500 }}
      on:outroend={finDesaparecer}
      class="z-20 position_{position} fine_{id} h-fit rounded text-white bg-black bg-opacity-90 shadow-xl"
    >
      {#if position == 'center'}
        {#if titulo != ''}
          {#if id == '1'}
            <h2 class="text-2xl tablet:text-5xl font-cabin font-bold pl-4 tablet:pl-7 mb-1 tablet:mb-3">
              <Titulo {titulo} />
            </h2>
          {/if}
          {#if id != '1'}
            <h2 class="text-2xl tablet:text-4xl font-cabin font-bold pl-4 tablet:pl-7">
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
        <p class="text-sm tablet:text-lg font-cabin leading-6 py-2 px-4 tablet:py-3 tablet:px-8">
          <Texto {texto} />
        {#if id == '28'}
        <div class="mt-6 flex justify-center">
            <a data-sveltekit-reload href="/" class="text-sm border uppercase py-3 px-3 mr-3 flex items-center gap-3 hover:bg-white hover:text-black
            ">¿Volver a ver?
            <svg
              class="-rotate-90 w-4 h-4 text-yellow-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>

  </div>
       
        {/if}
        </p>
      {/if}

    </div>
  </div>
{/if}

<style>
  .position_right {
    @apply mt-8 tablet:mt-5 desktop:mt-5 desktop:mr-5 desktoplarge:mt-6 desktoplarge:mr-10 mobile:mr-0 py-5 w-[100%] tablet:w-[70%] desktop:w-[60%] desktoplarge:w-[30%];
  }
  .position_center {
    @apply py-5 tablet:px-4 mt-12 mx-4 tablet:mt-0 tablet:py-10 w-[100%] tablet:w-[80%] desktop:w-[55%] desktoplarge:w-[35%];
  }
  .wrapper_center {
    @apply flex justify-start tablet:items-center tablet:justify-center;
  }
  .wrapper_right {
    @apply flex justify-end p-4;
  }
  .fine_4 {
    @apply desktoplarge:mt-20;
    transition: all ease-in-out 500ms;
  }
  .fine_5,
  .fine_27 {
    @apply desktoplarge:mt-32;
    transition: all ease-in-out 500ms;
  }
  .fine_28 {
    @apply desktoplarge:mt-40;
    transition: all ease-in-out 500ms;
  }
</style>
