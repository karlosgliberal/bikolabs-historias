<script>
  import { vis, historyPosition } from "$lib/store.js";
  import { onMount } from "svelte";
  import Cables from "../components/Cables.svelte";
  import Cover from "../components/Cover.svelte";
  import pasos from "$lib/data/pasos.json";
  import Footer from "../components/Footer.svelte";
  import Loading from "../components/Loading.svelte";
  import Timeline from "../components/Timeline.svelte";

  let Pastilla;
  let datos = [{ id: 1, titulo: "uno" }];

  onMount(async () => {
    loadPastilla();
  });

  function handleMessage(event) {
    vis.falso();
    historyPosition.sumar();
    add();
    loadPastilla();
  }

  function add() {
    datos = datos.concat({ numero: 1, text: "" });
    if (pasos[$historyPosition].time != 0) {
      // vis.verdadero();
      // timer = setTimeout(() => {
      //   handleMessage();
      // }, pasos[$historyPosition].time);
    }
  }

  function loadPastilla() {
    import("../components/PastillaCompleta.svelte").then(
      (res) => (Pastilla = res.default)
    );
  }
</script>

<svelte:head>
  <title>Riscanvi</title>
  <meta name="description" content="Riscanvi " />
</svelte:head>

<!--portada-->
<div id="cover">
  <!--grid-->
  <!-- class="z-20 w-full min-h-screen grid grid-rows-3 grid-cols-4 lg:grid-cols-9 gap-3 px-3 sm:px-4" -->
  <div
    class="z-20 w-full min-h-screen grid grid-rows-3 grid-cols-4 lg:grid-cols-9 gap-3 px-3 sm:px-4"
  >
    <div class="w-full h-screen absolute z-10">
      <Cables
        step={$historyPosition}
        patch="bool"
        escena={pasos[$historyPosition].cables_escena}
      />
    </div>

    <!-- <Timeline {datos} visible={$vis} /> -->

    {#if $historyPosition == 0}
      <Loading />
      <!-- {:else if $historyPosition == 1}
      <Cover on:message={handleMessage} visible={$vis} /> -->
    {:else}
      <!-- <Pastilla /> -->
      <svelte:component
        this={Pastilla}
        on:message={handleMessage}
        {...pasos[$historyPosition]}
        visible={$vis}
      />
    {/if}
    <Footer />
  </div>
</div>
