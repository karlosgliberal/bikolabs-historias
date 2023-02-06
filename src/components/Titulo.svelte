<script>
  export let titulo = "";
</script>

<!--título-->
{#if titulo != ""}
  <h1 class="text-xl leading-6 md:px-4 py-8">
   {titulo}
  </h1>
{/if}
