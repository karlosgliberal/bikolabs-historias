<script>
  //variables filled in header part of .md file
  export var title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div>
  <!--use the metadata from .md header to build info about the blogpost (be creative here)-->

  <!--little bit of Tailwind to arrange items under each other-->
  <div class="flex flex-col">
    <h1>{title}</h1>
    <!--here our .md compiled to Svelte will go-->
    <slot />
  </div>
</div>
