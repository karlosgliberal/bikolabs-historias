<script>
  import LinkUnderlineDecorator from '../ui/LinkUnderline-decorator.svelte'
  let src = 'images/logo.svg'
</script>

<nav class="flex items-center gap-4 text-xs tablet:text-sm">
  <div><a href="/"><img {src} alt="" width="17px" /></a></div>
  <LinkUnderlineDecorator texto="Inicio" link="/" isColor />
  <LinkUnderlineDecorator texto="Versión interactiva" link="/" isColor />
  <LinkUnderlineDecorator texto="Versión en texto" link="/no-interactive" isColor />
  <LinkUnderlineDecorator texto="Sobre Bikolabs y los datos" link="/about" isColor />
</nav>
