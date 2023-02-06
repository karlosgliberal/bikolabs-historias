<script>
  // import Incrementar from "./Incrementar.svelte";
  import Decrementar from "../Decrementar.svelte";
  // import Reset from "./Reset.svelte";
  import LinkUnderlineDecorator from "../ui/LinkUnderline-decorator.svelte";
</script>

<!-- Footer-->
<div class="z-10 flex flex-row flex-wrap w-full absolute bottom-0 px-6 pt-12 pb-6 bg-gradient-to-b from-transparent to-stone-900 ">
  <nav class="movida w-1/3 flex justify-center gap-5">
    <LinkUnderlineDecorator texto="Inicio"/>
    <LinkUnderlineDecorator texto="Versión no-interactiva"/>
    <LinkUnderlineDecorator texto="Creditos"/>
    <LinkUnderlineDecorator texto="Sobre Bikolabs y los datos"/>
  </nav>
  <div class="text-xs">
    <!-- <Incrementar />
    <Reset /> -->
      <Decrementar />
  </div>
</div>
