<script>
  import "../app.css";
  import { page } from "$app/stores";
  let currentPAge = $page.url.pathname;
</script>

<svelte:head>
  <!-- Google tag (gtag.js) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <slot />
</main>
