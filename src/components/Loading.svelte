<script>
  import { fade, fly } from "svelte/transition";

  export let visible = true;
  let row = 2;
  let col = 3;
  let classRow = `row-start-${row} sm:row-start-${row}`;
  let classCol = `lg:col-start-${col}`;
</script>

{#if visible}
  <!--card container-->
  <div
    in:fly={{ y: 200, duration: 2000 }}
    out:fly={{ y: -200, duration: 1000 }}
    class="bg-opacity-100"
  >
    <!--título-->
    <!-- <h1
      class="lined thick  w-11/12 md:w-4/12 text-base font-mono font-bold tracking-widest text-zinc-800 bg-stone-200 hover:bg-stone-100 shadow-xl mt-12  py-4 "
    >
      LOADING
    </h1> -->
  </div>
{/if}
