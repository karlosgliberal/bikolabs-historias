<!--pastilla de texto clara alineada izquierda-->
<div
  class="col-span-4 md:col-span-9 lg:col-span-4 xl:col-span-3 row-start-1 lg:col-start-2 xl:col-start-2 self-end rounded bg-stone-200 text-zinc-800 shadow-xl lg:-mr-24 xl:-mr-32 px-8 py-7"
>
  <p class="text-base sm:text-lg leading-6 md:px-4">
    Cuando se utilizan sistemas automatizados para tomar decisiones, se suelan
    dar a conocer algunos datos sobre el sistema para transmitir que su uso es
    beneficioso.
  </p>
</div>
<!--pastilla de texto clara alineada derecha con botones (tiene un margen negativo para que se pegue al lateral)-->
<div
  class="col-span-4 md:col-span-9 lg:col-span-4 xl:col-span-3 row-start-2 lg:col-end-9 xl:col-end-9 self-start rounded bg-stone-200 text-zinc-800 shadow-xl lg:-mr-24 xl:-mr-32 px-8 py-7"
>
  <p class="text-base sm:text-lg leading-6 md:px-4">
    Cuando se utilizan sistemas automatizados para tomar decisiones, se suelan
    dar a conocer algunos datos sobre el sistema para transmitir que su uso es
    beneficioso.
  </p>
  <!--pregunta-->
  <p class="font-mono text-lg font-bold text-center py-6 ">¿Lo sabías?</p>
  <!--botones pastilla-->
  <div class="flex gap-3">
    <button
      type="button"
      class="bordeB lined thick w-full font-mono text-base font-bold tracking-widest text-zinc-800 hover:bg-stone-100 hover:text-zinc-800 py-4 px-8"
      >Sí</button
    >
    <button
      type="button"
      class="bordeB lined thick w-full font-mono text-base font-bold tracking-widest text-zinc-800 hover:bg-stone-100 hover:text-zinc-800 py-4 px-8"
    >
      No
    </button>
  </div>
</div>
<!--botón de continuar con borde tipo trazo-->
<div class="col-span-4 md:col-span-9 row-start-3 self-end text-right my-12">
  <button
    type="button"
    class="bordeA lined thick w-full lg:w-fit text-base font-mono font-bold tracking-widest text-zinc-100 hover:text-zinc-800 bg-zinc-800 hover:bg-stone-50 shadow-xl py-4 px-8 lg:mr-6 "
    >Continuar</button
  >
</div>

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
