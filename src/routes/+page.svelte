<script>
  // import Cables from "../../lib/Cables.svelte";
  // import Log from "../../lib/Log.svelte";
  // import Aitor from "../../lib/Aitor.svelte";

  // let index, offset, progress;
  // function handleMessage(event) {
  //   index = !index;
  // }
</script>

<svelte:head>
  <title>Riscanvi</title>
  <meta name="description" content="Riscanvi " />
</svelte:head>

<!--atributos body y contenedor del grid -->

<!--portada-->
<!--atributos body y contenedor del grid -->

<!--portada-->
<section id="cover">
  <!--grid-->
  <div
    class="min-h-screen grid grid-rows-3 grid-cols-4 lg:grid-cols-9 gap-3 px-3 sm:px-4"
  >
    <!--card container-->
    <div
      class="col-span-4 md:col-span-9 lg:col-span-5 row-start-1 sm:row-start-2 lg:col-start-3 self-start h-fit rounded  bg-stone-200 text-zinc-800 text-center shadow-xl mt-24 sm:-mt-24 pb-12 mb-8 "
    >
      <!--título-->
      <h1 class="text-base leading-6 tracking-widest md:px-4 pt-24">
        El acierto en las decisiones de los
      </h1>
      <!--parte título destacado-->
      <h1
        class="text-xl sm:text-3xl font-mono font-semibold tracking-wider mt-3 "
      >
        sistemas automatizados
      </h1>
      <!--botón con borde tipo trazo tiene css personalizado-->
      <button
        type="button"
        class="bordeB lined thick  w-11/12 md:w-4/12 text-base font-mono font-bold tracking-widest text-zinc-800 bg-stone-200 hover:bg-stone-100 shadow-xl mt-12  py-4 "
        >Comenzar</button
      >
    </div>
    <!--footer-->
    <div
      class="col-span-4 md:col-span-9 row-start-2 sm:row-start-3 lg:col-start-2 self-center sm:self-end rounded text-zinc-600 px-8 sm:py-8 sm:mb-4 "
    >
      <div
        class="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-24 lg:gap-48 text-sm font-mono text-center sm:text-left"
      >
        <div class="flex flex-col w-full hover:text-zinc-400 ">
          <!--numero decorativo-->
          <div class="text-xs mb-3">01</div>
          <!--enlace-->
          <a href="movida" class=" hover:text-zinc-200 hover:font-semibold">
            Sobre Bikolabs
          </a>
        </div>
        <div class="flex flex-col w-full  hover:text-zinc-400 ">
          <div class="text-xs mb-3">02</div>
          <a href="movida" class=" hover:text-zinc-200 hover:font-semibold">
            Contacto
          </a>
        </div>
        <div class="flex flex-col w-full  hover:text-zinc-400 ">
          <div class="text-xs mb-3">03</div>
          <a href="movida" class=" hover:text-zinc-200 hover:font-semibold">
            Créditos
          </a>
        </div>
        <div class="flex flex-col w-full  hover:text-zinc-400 ">
          <div class="text-xs text-transparent mb-3">_</div>
          <a href="movida" class="hover:text-zinc-200 hover:font-semibold"
            >© 2022
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 
<section>
  <Aitor ancho="900" visible="movid" on:message={handleMessage} />
  <div class="w-full h-screen absolute z-10">
    <Cables step={index} patch="presos" />
  </div>
</section> -->
<style>
  .bordeA {
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
  }

  .bordeA.lined.thick {
    border: solid 3px #e7e5e4;
  }

  .bordeB {
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
  }

  .bordeB.lined.thick {
    border: solid 3px #27272a;
  }
</style>
