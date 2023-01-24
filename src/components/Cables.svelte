<script>
  import { onMount } from "svelte";
  import { historyPosition } from "$lib/store.js";

  export let step;
  export let patch;
  export let escena;

  let init = "hidden";
  let pathPatch = `${patch}/patch.js`;

  $: {
    if (step) {
      cambioEscenaCables($historyPosition);
    }
  }

  let canvas;
  const initializeCables = () => {
    CABLES.patch = new CABLES.Patch({
      patch: CABLES.exportedPatch,
      prefixAssetPath: `${patch}/`,
      glCanvasId: `cables_${patch}`,
      glCanvasResizeToWindow: false,
      onError: showError,
      onPatchLoaded: patchInitialized,
      onFinishedLoading: patchFinishedLoading,
      outSidefunction: myFunction,

      canvas: { alpha: true, premultipliedAlpha: true },
    });
  };
  onMount(() => {
    initializeCables();
  });

  function showError(errId, errMsg) {
    alert("An error occured: " + errId + ", " + errMsg);
  }

  function patchInitialized() {
    // You can now access the patch object (CABLES.patch), register variable watchers and so on
  }

  function patchFinishedLoading() {
    init = "visible";
    historyPosition.sumar();
    // The patch is ready now, all assets have been loaded
  }
  const cambioEscenaCables = () => {
    if (escena != false) {
      CABLES.patch.config.patchFunctiontrigger(escena);
    }
  };

  function myFunction() {
    alert("function called!");
  }
</script>

<svelte:head>
  <script src={pathPatch} on:load={initializeCables}></script>
</svelte:head>

<div class="mb-4 h-screen">
  <canvas
    class="z-0 absolute"
    id="cables_{patch}"
    width="100%"
    height="100%"
    style="width: 100%; height: 100%; visibility: {init};"
  />
</div>
