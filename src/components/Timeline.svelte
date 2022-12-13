<script>
  import { fly } from "svelte/transition";

  import { historyPosition, posicion } from "$lib/store.js";
  export let datos;
  console.log(datos);

  function changePosition(n) {
    historyPosition.reset({ reset: n });
  }
</script>

{#if datos}
  <div
    class="z-20 row-start-3 sm:row-start-3 lg:col-start-1 self-end h-fit rounded  text-zinc-800 text-left shad mt-12 sm:-mt-24 pb-12 mb-8"
  >
    <ol class="ml-6 border-l-2 border-t-white">
      {#each datos as { titulo }, i}
        <li>
          <div class="flex-start mb-5 md:flex">
            <div
              in:fly={{ y: 200, duration: 1000 }}
              out:fly={{ y: 200, duration: 1000 }}
              class="-ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-stone-200  hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-lg transition duration-50 ease-in-out"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={$posicion.pos}
            >
              <button on:click={() => changePosition(i)}>
                <h1 class=" text-zinc-800 ">{i}</h1>
              </button>
            </div>
          </div>
        </li>
      {/each}
    </ol>
  </div>
{/if}
