<script>
  import { vis, historyPosition } from "$lib/store.js";
  import Cables from "../components/Cables.svelte";
  import Cover from "../components/Cover.svelte";
  import pasos from "$lib/data/pasos.json";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";
  import Loading from "../components/Loading.svelte";

  let index = 0;
  let Pastilla;
  let paso;
  let title;

  onMount(async () => {
    loadPastilla();
  });

  function handleMessage(event) {
    // index = !index;
    vis.falso();
    historyPosition.sumar();
    loadPastilla();
  }

  function loadPastilla() {
    import("../components/PastillaCompleta.svelte").then(
      (res) => (Pastilla = res.default)
    );
  }
  paso = pasos[$historyPosition].title;
</script>

<svelte:head>
  <title>Riscanvi</title>
  <meta name="description" content="Riscanvi " />
</svelte:head>

<!--portada-->
<section id="cover">
  <!--grid-->
  <div
    class="z-20 min-h-screen grid grid-rows-3 grid-cols-4 lg:grid-cols-9 gap-3 px-3 sm:px-4"
  >
    <div class="w-full h-screen absolute z-10">
      <Cables step={$historyPosition} patch="casas" />
    </div>
    {#if $historyPosition == 0}
      <Loading />
    {:else if $historyPosition == 1}
      <Cover />
    {:else}
      <!-- <Pastilla /> -->
      <svelte:component
        this={Pastilla}
        on:message={handleMessage}
        titulo={pasos[$historyPosition].title}
        visible={$vis}
        row="2"
        col="3"
      />
    {/if}

    <Footer />
  </div>
</section>
