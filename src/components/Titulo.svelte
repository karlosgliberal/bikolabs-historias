<script>
  export let titulo = "";
</script>

<!--título-->
{#if titulo != ""}
  <h2 class="text-xl sm:text-xl font-mono font-semibold mt-3 pt-6 pl-3">
    {titulo}
  </h2>
{/if}
