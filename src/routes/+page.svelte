<script>
  import Cables from "../lib/Cables.svelte";
  import Log from "../lib/Log.svelte";
  import Aitor from "../lib/Aitor.svelte";

  let index, offset, progress;
</script>

<svelte:head>
  <title>Riscanvi</title>
  <meta name="description" content="Riscanvi " />
</svelte:head>

<section>
  <Aitor ancho="900" visible="movid" />
  <div class="w-full h-screen absolute z-10">
    <Cables step={index} patch="presos" />
  </div>
</section>
