<script>
  import Cables from "../../components/Cables.svelte";
  import { vis, historyPosition } from "$lib/store.js";
  import pasos from "$lib/data/pasos.json";
  import { onMount } from "svelte";

  onMount(async () => {
    loadPastilla();
  });

  function loadPastilla() {
    import("../../components/PastillaCompleta.svelte").then(
      (res) => (Pastilla = res.default)
    );
  }

  function handleMessage(event) {
    vis.falso();
    historyPosition.sumar();
    add();
    loadPastilla();
  }

  let Pastilla;
</script>

<!--portada-->
<div id="cover">
  <!--grid-->
  <!-- class="z-20 w-full min-h-screen grid grid-rows-3 grid-cols-4 lg:grid-cols-9 gap-3 px-3 sm:px-4" -->
  <div
    class="z-20 w-full min-h-screen grid grid-rows-3 grid-cols-4 lg:grid-cols-9 gap-3 px-3 sm:px-4"
  >
    <div class="w-full h-screen absolute z-10">
      <Cables
        step={$historyPosition}
        patch="bool"
        escena={pasos[$historyPosition].cables_escena}
      />
    </div>

    <!-- <Pastilla /> -->
    <svelte:component
      this={Pastilla}
      on:message={handleMessage}
      {...pasos[$historyPosition]}
      visible={$vis}
    />
  </div>
</div>
