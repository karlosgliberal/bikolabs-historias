<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let tituloBoton = "Siguiente";

  function sayHello() {
    dispatch("message", {
      text: "Hello!",
    });
  }
</script>

<button
  on:click={sayHello}
  type="button"
  class="bordeA lined thick w-full lg:w-fit text-base font-mono font-bold tracking-widest text-zinc-100 hover:text-zinc-800 bg-zinc-800 hover:bg-stone-50 shadow-xl py-4 px-8 lg:mr-6 "
  >
  {tituloBoton}
  </button
>

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
