<script>
  import { onMount } from "svelte";

  export let step;

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
      prefixAssetPath: "cables/",
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
  <script src="patch.js" on:load={initializeRemarkable}></script>
</svelte:head>

<div>
  <canvas
    id="glcanvas"
    width="800"
    height="400"
    style="width: 600px; height: 400px;"
  />
</div>
