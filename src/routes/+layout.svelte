<script>
  import "../app.css";
  import { page } from "$app/stores";
  let currentPAge = $page.url.pathname;
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <!-- Google tag (gtag.js) -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-LSTLRM2XQG"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-LSTLRM2XQG");
  </script>
</svelte:head>

<main>
  <slot />
</main>
