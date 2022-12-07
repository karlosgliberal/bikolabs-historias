<script>
  import Cables from "../lib/Cables.svelte";
  import pasos from "$lib/data/pasos.json";
  import Cover from "../lib/components/Cover.svelte";
  import Footer from "../lib/Footer.svelte";
  import { onMount } from "svelte";
  import { vis } from "$lib/store.js";

  let index;
  let visible = true;
  let titulo = "una gran movida";
  let Pastilla;
  let paso;

  onMount(async () => {
    vis.verdadero();
    loadPastilla();
  });

  function handleMessage(event) {
    index = !index;
    vis.falso();
    titulo = "no es una gran movida";
    loadPastilla();
  }

  function loadPastilla() {
    import("../lib/components/PastillaCompleta.svelte").then(
      (res) => (Pastilla = res.default)
    );
  }
  paso = pasos[$vis].title;
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
      <Cables step={index} patch="casas" />
    </div>

    <svelte:component
      this={Pastilla}
      on:message={handleMessage}
      titulo={pasos[$vis].title}
      visible={$vis}
      row="3"
      col="3"
    />

    <!-- <Pastilla /> -->
    <Footer />
  </div>
</section>
