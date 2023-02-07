<script>
  import { vis, historyPosition } from "$lib/store.js";
  import { onMount } from "svelte";
  import Cables from "../components/Cables.svelte";
  import pasos from "$lib/data/pasos.json";
  import Footer from "../components/footer/Footer.svelte";
  import Loading from "../components/Loading.svelte";
  import Decrementar from "../components/Decrementar.svelte";
  // import Texto from "../components/Texto.svelte";
  import Boton from "../components/Boton.svelte";

  let Pastilla;
  let datos = [{ id: 1, titulo: "uno" }];
  let tituloBoton;

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

  // let showButton = tituloBoton.length > 1;
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
        {...pasos[$historyPosition]}
        visible={$vis}
      />
    {/if}
    <div class="z-20 absolute bottom-9 right-5 flex items-center gap-6">
      <div class="">
        <Decrementar />
      </div>
      <Boton />
    </div>
    <Footer />
  </div>
</div>
