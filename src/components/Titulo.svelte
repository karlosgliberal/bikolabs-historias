<script>
  export let titulo = "";
</script>

<!--título-->
{#if titulo != ""}
  <h1 class="text-base leading-6 tracking-widest md:px-4 pt-24">
    {titulo}
  </h1>
{/if}
