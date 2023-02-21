<script>
  import LinkUnderlineDecorator from '../ui/LinkUnderline-decorator.svelte'
  import { page } from '$app/stores'
  let currentPAge = $page.url.pathname
</script>

<nav class="flex gap-5">
  <LinkUnderlineDecorator texto="Versión interactiva" link="/" />
  {#if currentPAge == '/about'}
    <LinkUnderlineDecorator texto="Versión no interactiva" link="/no-interactve" />
  {/if}
  <LinkUnderlineDecorator texto="Sobre nosostros" link="/about" />
</nav>
