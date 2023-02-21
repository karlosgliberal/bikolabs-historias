<script>
  import { historyPosition, vis } from '$lib/store.js'

  function decrement() {
    vis.falso()
    historyPosition.restar()
  }

  function onKeyDown(e) {
    if (e.keyCode == 37) {
      decrement()
    }
  }
</script>

<button
  type="button"
  on:click={decrement}
  class="flex justify-center items-center relative bordeA lined thick w-full lg:w-fit text-base font-mono hover:font-bold  tracking-widest text-zinc-100 hover:text-zinc-800 bg-zinc-800 hover:bg-stone-50 shadow-xl py-3 px-5 tablet:py-4 tablet:px-8 "
>
  <div class="py-2 px-4">Atrás</div>
</button>
<svelte:window on:keydown={onKeyDown} />

<style>
  .bordeA {
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
  }

  .bordeA.lined.thick {
    border: solid 1px #7a7a7a;
  }
</style>
