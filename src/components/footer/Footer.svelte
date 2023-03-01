<script>
  import LinkUnderlineDecorator from '../ui/LinkUnderline-decorator.svelte'
  import LinkUnderlineDecoratorInicio from '../ui/LinkUnderline-decorator-inicio.svelte'
</script>

<!-- Footer-->
<div
  class="z-20 text-xs tablet:text-xs flex flex-row flex-wrap w-full absolute bottom-0 px-3 tablet:px-6 pt-12 pb-7 bg-gradient-to-b from-transparent to-stone-900 "
>
  <nav class="w-full flex justify-center tablet:justify-start gap-5 tablet:gap-5 pl-3 tablet:pl-0 ">
    <div class="tablet:hidden pt-1 tablet:pt-0">
      <LinkUnderlineDecoratorInicio texto="Inicio" />
    </div>
    <div class="flex gap-5 tablet:gap-4 pt-1">
      <LinkUnderlineDecorator texto="Versión en texto" link="/no-interactive" />
      <LinkUnderlineDecorator texto="Sobre Bikolabs y créditos" link="/about" />
    </div>

  </nav>
</div>
