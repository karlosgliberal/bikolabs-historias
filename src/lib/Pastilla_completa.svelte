<script>
  export const titulo = true;
  export const tituloDestacado = false;
  export const boton = false;
  export let text = "movidas esto es unte xto";
</script>

<!--card container-->
<div
  class="z-20 col-span-4 md:col-span-9 lg:col-span-5 row-start-1 sm:row-start-2 lg:col-start-3 self-start h-fit rounded  bg-stone-200 text-zinc-800 text-center shadow-xl mt-24 sm:-mt-24 pb-12 mb-8"
>
  {#if titulo}
    <!--título-->
    <h1 class="text-base leading-6 tracking-widest md:px-4 pt-24">
      El acierto en las decisiones de los
    </h1>
    <p>{text}</p>
  {/if}

  {#if tituloDestacado}
    <!--parte título destacado-->
    <h1
      class="text-xl sm:text-3xl font-mono font-semibold tracking-wider mt-3 "
    >
      sistemas automatizados
    </h1>
  {/if}
  {#if boton}
    <!--botón con borde tipo trazo tiene css personalizado-->
    <button
      type="button"
      class="bordeB lined thick  w-11/12 md:w-4/12 text-base font-mono font-bold tracking-widest text-zinc-800 bg-stone-200 hover:bg-stone-100 shadow-xl mt-12  py-4 "
      >Comenzar</button
    >
  {/if}
</div>

<style>
  /* .bordeA {
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
  }

  .bordeA.lined.thick {
    border: solid 3px #e7e5e4;
  } */

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
