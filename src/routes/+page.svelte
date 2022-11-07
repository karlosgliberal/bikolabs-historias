<script>
  import Cables from "../lib/Cables.svelte";
  import Log from "../lib/Log.svelte";

  let index, offset, progress;
</script>

<svelte:head>
  <title>Riscanvi</title>
  <meta name="description" content="Riscanvi " />
</svelte:head>

<section>
  <Cables step={index} patch="presos" />
</section>
