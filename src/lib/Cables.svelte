<script>
  import { onMount } from "svelte";

  export let step;
  export let patch;

  let pathPatch = `${patch}/patch.js`;

  $: {
    if (step == 1) {
      console.log("movida");
      handleClick();
    }
  }
  let canvas;
  const initializeRemarkable = () => {
    console.log("movida d");
    CABLES.patch = new CABLES.Patch({
      patch: CABLES.exportedPatch,
      prefixAssetPath: `${patch}/`,
      glCanvasId: "glcanvas",
      glCanvasResizeToWindow: false,
      onError: showError,
      onPatchLoaded: patchInitialized,
      onFinishedLoading: patchFinishedLoading,
      outSidefunction: myFunction,

      canvas: { alpha: true, premultipliedAlpha: true },
    });
  };
  onMount(() => {
    initializeRemarkable();
  });

  function showError(errId, errMsg) {
    alert("An error occured: " + errId + ", " + errMsg);
  }

  function patchInitialized() {
    // You can now access the patch object (CABLES.patch), register variable watchers and so on
  }

  function patchFinishedLoading() {
    // The patch is ready now, all assets have been loaded
  }
  function handleClick() {
    CABLES.patch.config.patchFunctiontrigger();
  }
  function myFunction() {
    alert("function called!");
  }
</script>

<svelte:head>
  <script src={pathPatch} on:load={initializeRemarkable}></script>
</svelte:head>

<div class="mb-4 ">
  <canvas
    id="glcanvas"
    width="600"
    height="300"
    style="width: 600px; height: 300px;"
  />
</div>
