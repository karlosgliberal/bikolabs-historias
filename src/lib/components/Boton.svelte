<script>
  import { createEventDispatcher } from "svelte";
  import Titulo from "./Titulo.svelte";
  const dispatch = createEventDispatcher();

  export let nombreBoton = "Comenzars";

  function sayHello() {
    dispatch("message", {
      text: "Hello!",
    });
  }
</script>

<button
  on:click={sayHello}
  type="button"
  class="bordeB lined thick  w-11/12 md:w-4/12 text-base font-mono font-bold tracking-widest text-zinc-800 bg-stone-200 hover:bg-stone-100 shadow-xl mt-12  py-4 "
  >{nombreBoton}</button
>

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
