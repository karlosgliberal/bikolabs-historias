<script>
  import Cables from "../lib/Cables.svelte";
  import Log from "../lib/Log.svelte";
  import Aitor from "../lib/Aitor.svelte";

  let index, offset, progress;
  function handleMessage(event) {
    index = !index;
  }
</script>

<svelte:head>
  <title>Riscanvi</title>
  <meta name="description" content="Riscanvi " />
</svelte:head>

<section>
  <Aitor ancho="900" visible="movid" on:message={handleMessage} />
  <div class="w-full h-screen absolute z-10">
    <Cables step={index} patch="presos" />
  </div>
</section>
