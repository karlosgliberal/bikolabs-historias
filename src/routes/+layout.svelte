<script>
  import "../app.css";
  function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }
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
<div class="fixed z-50 top-0 left-0 w-full">
  <header class="bg-black px-10 items-center text-white">
    <nav class="flex relative">
      <div class="w-1/4 h-12 text-lg pt-5 pl-12">
        <a href="/" class="flex">
          <span
            class="pl-2 self-center text-lg font-semibold text-white whitespace-nowrap"
            >Historia</span
          ></a
        >
      </div>
      <div class="container flex flex-wrap justify-end mx-auto pt-1 md:pt-2">
        <div class="w-full md:block md:w-auto">
          <ul
            class="flex flex-col mt-2 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-4 bg-black"
          >
            <li
              class="block py-2 pr-4 pl-3 text-white md:hover:text-gray-500 md:p-0"
            >
              <a
                href="/topmenu"
                rel="external"
                class="block py-2 pr-4 pl-5 text-white md:hover:text-gray-500 md:p-0 text-lg"
                >About</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</div>
<main>
  <div class="mt-16 sm:mt-32 sm:px-8">
    <div class="mx-auto lg:px-8">
      <div class="mx-auto max-w-full lg:max-w-7xl">
        <slot />
      </div>
    </div>
  </div>
</main>
