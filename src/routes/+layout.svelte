<script>
  import '../app.css'
</script>

<svelte:head>
  <title>El caso de Riscanvi</title>
  <meta name="title" content="El caso de Riscanvi | Bikolabs, el estudio (de experimentación) de Biko" />
  <meta name="description" content="¿Cómo medir si un algoritmo acierta cuando toma una decisión?" />

  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="Bikolabs, el estudio (de experimentación) de Biko" />
  <meta name="twitter:title" content="El caso de Riscanvi" />
  <meta name="twitter:description" content="¿Cómo medir si un algoritmo acierta cuando toma una decisión?" />
  <meta name="twitter:creator" content="@biko2" />
  <!-- Las imágenes de sumario de Twitter deben ser de al menos 200x200px -->
  <meta name="twitter:image:src" content="https://bikolabs.biko2.com/assets/images/colecciones/riscanvi-h.png" />

  <!-- Open Graph data -->
  <meta property="og:title" content="" />
  <meta property="og:description" content="¿Cómo medir si un algoritmo acierta cuando toma una decisión?" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://riscanvi.bikolabs.io/" />
  <meta property="og:site_name" content="Bikolabs, el estudio (de experimentación) de Biko" />
  <meta property="og:image" content="https://bikolabs.biko2.com/assets/images/colecciones/riscanvi-h.png" />
  <meta property="og:locale" content="ES_es" />
  <!-- Google tag (gtag.js) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&display=swap" rel="stylesheet" />
</svelte:head>

<main>
  <slot />
</main>
