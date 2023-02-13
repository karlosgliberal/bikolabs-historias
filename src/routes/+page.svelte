<script>
  import { vis, historyPosition, init } from "$lib/store.js";
  import { onMount } from "svelte";
  import pasos from "$lib/data/pasos.json";
  import Cables from "../components/Cables.svelte";
  import Footer from "../components/footer/Footer.svelte";
  import Loading from "../components/Loading.svelte";
  import Decrementar from "../components/Decrementar.svelte";
  import Boton from "../components/Boton.svelte";
  import MenuAnimacion from "../components/menu/MenuAnimacion.svelte";

  let Pastilla;

  onMount(async () => {
    loadPastilla();
  });

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
  <div class="z-20 w-full h-screen">
    <div class="w-full h-screen absolute z-10">
      <Cables
        step={$historyPosition}
        inicio={$init}
        patch="bool"
        escena={pasos[$historyPosition].cables_escena}
      />
    </div>
    {#if $historyPosition == 0}
      <Loading />
    {:else}
      <!-- <Pastilla /> -->
      <svelte:component
        this={Pastilla}
        {...pasos[$historyPosition]}
        visible={$vis}
        position={pasos[$historyPosition].position}
      />
    {/if}
    <div class="z-20 absolute bottom-9 right-5 flex items-center gap-6">
      <h1>{$historyPosition}</h1>
      {#if $historyPosition > 1}
        <Decrementar />
      {/if}
      <Boton />
    </div>
    <MenuAnimacion />
    <Footer />
  </div>
</div>
