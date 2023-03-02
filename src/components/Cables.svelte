<script>
  import { onMount } from 'svelte'
  import { historyPosition, init, vis } from '$lib/store.js'

  export let step
  export let inicio
  export let patch
  export let escena

  let timer

  let initVis = 'hidden'
  let pathPatch = `${patch}/patch.js`

  $: {
    if (step) {
      cambioEscenaCables($historyPosition)
    }
    if (inicio > 1) {
      goInicio()
      init.reset()
      vis.falso()
      historyPosition.reset()
      console.log('movida ini', $historyPosition)
    }
  }

  let canvas
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
    })
  }
  onMount(() => {
    initializeCables()
  })

  function showError(errId, errMsg) {
    alert('An error occured: ' + errId + ', ' + errMsg)
  }

  function patchInitialized() {
    // You can now access the patch object (CABLES.patch), register variable watchers and so on
  }

  function patchFinishedLoading() {
    initVis = 'visible'
    timer = setTimeout(() => {
      historyPosition.sumar()
    }, 3000)
  }
  const cambioEscenaCables = () => {
    if (escena != false) {
      CABLES.patch.config.patchFunctiontrigger(escena)
    }
  }

  const goInicio = () => {
    CABLES.patch.config.patchFunctionInicio(escena)
  }

  function myFunction() {
    alert('function called!')
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
    style="width: 100%; height: 100%; visibility: {initVis};"
  />
</div>
