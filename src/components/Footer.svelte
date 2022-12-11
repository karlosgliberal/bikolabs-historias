<script>
  import Incrementar from "./Incrementar.svelte";
  import Decrementar from "./Decrementar.svelte";
  import Reset from "./Reset.svelte";
</script>

<!--footer-->
<div
  class="z-30 col-span-4 md:col-span-9 row-start-2 sm:row-start-3 lg:col-start-2 self-center sm:self-end rounded text-zinc-600 px-8 sm:py-8 sm:mb-4 "
>
  <div
    class="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-24 lg:gap-48 text-sm font-mono text-center sm:text-left"
  >
    <div class="flex flex-col w-full hover:text-zinc-400 ">
      <!--numero decorativo-->
      <div class="text-xs mb-3">01</div>
      <!--enlace-->
      <a href="movida" class=" hover:text-zinc-200 hover:font-semibold">
        Sobre Bikolabs
      </a>
    </div>
    <div class="flex flex-col w-full  hover:text-zinc-400 ">
      <div class="text-xs mb-3">02</div>
      <a href="movida" class=" hover:text-zinc-200 hover:font-semibold">
        Contacto
      </a>
    </div>
    <div class="flex flex-col w-full  hover:text-zinc-400 ">
      <div class="text-xs mb-3">03</div>
      <a href="movida" class=" hover:text-zinc-200 hover:font-semibold">
        Créditos
      </a>
    </div>
    <div class="flex flex-col w-full  hover:text-zinc-400 ">
      <div class="text-xs text-transparent mb-3">_</div>
      <Incrementar />
      <Decrementar />
      <Reset />
    </div>
  </div>
</div>
