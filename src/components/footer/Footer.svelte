<script>
  // import Incrementar from "./Incrementar.svelte";
  // import Reset from "./Reset.svelte";
  import LinkUnderlineDecorator from '../ui/LinkUnderline-decorator.svelte'
  import LinkUnderlineDecoratorInicio from '../ui/LinkUnderline-decorator-inicio.svelte'
  import Logos from './Logos.svelte';
</script>

<!-- Footer-->
<div
  class="z-10 text-xs tablet:text-xs flex flex-row flex-wrap w-full absolute bottom-0 px-3  tablet:px-6 pt-12 pb-7 bg-gradient-to-b from-transparent to-stone-900 "
>
  <nav class="w-full flex gap-3 tablet:gap-5 ">
    <div class="tablet:hidden">
      <LinkUnderlineDecoratorInicio texto="Inicio" />
    </div>
    <div class="flex gap-4 pt-1">
    <LinkUnderlineDecorator texto="Versión en texto" link="/no-interactive" />
    <LinkUnderlineDecorator texto="Sobre Bikolabs y creditos" link="/about" />
    </div>
  </nav>
</div>
