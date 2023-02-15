<script>
  // import Incrementar from "./Incrementar.svelte";
  // import Reset from "./Reset.svelte";
  import LinkUnderlineDecorator from '../ui/LinkUnderline-decorator.svelte'
  import MenuAnimacion from '../menu/MenuAnimacion.svelte'
</script>

<!-- Footer-->
<div
  class="z-10 text-sm tablet:text-sm flex flex-row flex-wrap w-full absolute bottom-0 px-3  tablet:px-6 pt-12 pb-7 bg-gradient-to-b from-transparent to-stone-900 "
>
  <nav class="w-full flex justify-center tablet:justify-start gap-3 tablet:gap-5">
    <div class="tablet:hidden"><MenuAnimacion /></div>
    <LinkUnderlineDecorator texto="Versión no-interactiva" />
    <LinkUnderlineDecorator texto="Sobre Bikolabs y creditos" />
  </nav>
</div>
