<script>
  import LinkUnderlineDecorator from '../ui/LinkUnderline-decorator.svelte'
  import { page } from '$app/stores'
  let currentPAge = $page.url.pathname
  let src = 'images/logo.svg'
</script>

<nav class="flex items-center gap-4 text-sm">
  <div><img {src} alt="" width="17px" /></div>
  <LinkUnderlineDecorator texto="Inicio" link="/" />
  <LinkUnderlineDecorator texto="Versión interactiva" link="/" />
  {#if currentPAge == '/about'}
    <LinkUnderlineDecorator texto="Versión en texto" link="no-interactive" />
  {/if}
  <LinkUnderlineDecorator texto="Sobre Bikolabs y creditos" link="/about" />
</nav>
