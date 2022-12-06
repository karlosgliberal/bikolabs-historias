<script>
  import Cables from "../lib/Cables.svelte";
  import pasos from "$lib/data/pasos.json";
  import Cover from "../lib/components/Cover.svelte";
  import Footer from "../lib/Footer.svelte";
  import Pastilla from "../lib/components/PastillaCompleta.svelte";
  import Wrapper from "../lib/components/Wrapper.svelte";

  console.log(pasos[2]);
  let index, visible;

  function handleMessage(event) {
    console.log("movdia");
    index = !index;
    visible = false;
  }

  let Chatbox;

  function loadChatbox() {
    visible != visible;
    import("../lib/components/Cover.svelte").then(
      (res) => (Chatbox = res.default)
    );
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
    <button class="z-40" on:click={loadChatbox}>Load chatbox</button>

    <svelte:component this={Chatbox} texto="Acierto en las decccc" {visible} />

    <Pastilla on:message={handleMessage} step={index} row="3" col="3" />
    <Footer />
  </div>
</section>
