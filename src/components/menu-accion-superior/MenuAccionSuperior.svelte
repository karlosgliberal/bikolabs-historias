<script>
  import Logos from '../footer/Logos.svelte'
  import MenuAnimacion from '../menu/MenuAnimacion.svelte'
  export let isInverted = ''
</script>

<nav class="flex gap-3 items-center text font-cabin">
  <Logos {isInverted} />
  {#if isInverted}
    <div class="h-[15px] border-r border-black mx-2" />
  {/if}
  {#if !isInverted}
    <div class="h-[15px] border-r border-gray-100 mx-2" />
  {/if}
  <MenuAnimacion {isInverted} />
</nav>
