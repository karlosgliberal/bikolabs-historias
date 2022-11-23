<script>
  import Cables from "../lib/Cables.svelte";
  import Pastilla from "../lib/Pastilla.svelte";
  import Pastilla_Complet from "../lib/Pastilla_completa.svelte";
  // import Log from "../../lib/Log.svelte";
  // import Aitor from "../../lib/Aitor.svelte";
  import Footer from "../lib/Footer.svelte";

  let uno = true;
  let dos = false;
  export let data;
  console.log(data);
  let index, offset, progress;
  function handleMessage(event) {
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
      <Cables step={index} patch="presos" />
    </div>
    <!--COMPONENTE-->
    {#if uno}
      <Pastilla titulo="movida" tituloDestacado="movids" paso="1" />
    {/if}

    {#if dos}
      <Pastilla_Complet
        titulo="movida"
        tituloDestacado="movids"
        paso="1"
        text="Hola que tal estas es es el texto "
      />
    {/if}

    <Footer />
  </div>
</section>

<!-- 
<section>
  <Aitor ancho="900" visible="movid" on:message={handleMessage} />

</section> -->
