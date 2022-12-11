<script>
  import { fade, fly } from "svelte/transition";

  export let texto = "";
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
    class="z-20 col-span-4 md:col-span-9 lg:col-span-5 row-start-2 sm:row-start-2 lg:col-start-3 self-start h-fit rounded bg-stone-200 text-zinc-800 text-center shadow-xl mt-24 sm:-mt-24 pb-12 mb-8"
  >
    <!--título-->
    <h1 class="text-base leading-6 tracking-widest md:px-4 pt-24">
      {texto}
    </h1>

    <!--parte título destacado-->
    <h1
      class="text-xl sm:text-3xl font-mono font-semibold tracking-wider mt-3 "
    >
      Loading
    </h1>
    <!-- <h1
      class="lined thick  w-11/12 md:w-4/12 text-base font-mono font-bold tracking-widest text-zinc-800 bg-stone-200 hover:bg-stone-100 shadow-xl mt-12  py-4 "
    >
      LOADING
    </h1> -->
  </div>
{/if}
