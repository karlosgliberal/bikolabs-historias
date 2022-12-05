<script>
  import Cables from "../lib/Cables.svelte";
  import pasos from "$lib/data/pasos.json";
  import Cover from "../lib/components/Cover.svelte";
  import TituloBoton from "../lib/components/TituloBoton.svelte";
  import PastillaBoton from "../lib/components/PastillaBoton.svelte";
  import Footer from "../lib/Footer.svelte";
  import Aitor from "../lib/Aitor.svelte";
  import Comple from "../lib/Pastilla_completa.svelte";
  import Wrapper from "../lib/components/Wrapper.svelte";

  console.log(pasos[2]);
  let uno = true;
  let dos = false;
  let index, offset, progress;

  function handleMessage(event) {
    console.log("movdia");
    index = !index;
  }
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

    <h1 class="z-30 text-white">{pasos[2].title}</h1>

    <!--COMPONENTE-->
    {#if uno}
      <Wrapper>
        <Comple on:message={handleMessage} />
      </Wrapper>
      <!-- <Aitor ancho="900" visible="movid" on:message={handleMessage} /> -->
    {/if}

    <Footer />
  </div>
</section>

<!-- 
<section>
  <Aitor ancho="900" visible="movid" on:message={handleMessage} />

</section> -->
