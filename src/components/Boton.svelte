<script>
  export let tituloBoton = "Siguiente";

  import { historyPosition, vis } from "$lib/store.js";

  function increment() {
    vis.falso();
    historyPosition.sumar();
  }
</script>

<button
  on:click={increment}
  type="button"
  class="flex justify-center items-center relative bordeA lined thick w-full lg:w-fit text-base font-mono font-bold tracking-widest text-zinc-100 hover:text-zinc-800 bg-zinc-800 hover:bg-stone-50 shadow-xl py-3 px-6 tablet:py-4 tablet:px-8 lg:mr-6 transition duration-150 ease-out hover:ease-in"
>
  {tituloBoton}
  <div class="slide-in-left p-2 w-10 h-10 flex items-center justify-center">
    <svg
      class="slide-in-left -rotate-90 w-4 h-4 text-yellow-500"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</button>

<!-- <style>
  .bordeB {
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
  }

  .bordeB.lined.thick {
    border: solid 3px #27272a;
  }
</style> -->
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
