<script>
  import { vis, historyPosition, init } from '$lib/store.js'
  import { onMount } from 'svelte'
  import pasos from '$lib/data/es/pasos.json'
  import Cables from '../components/Cables.svelte'
  import Footer from '../components/footer/Footer.svelte'
  import Loading from '../components/Loading.svelte'
  import Decrementar from '../components/Decrementar.svelte'
  import Boton from '../components/Boton.svelte'
  import MenuAccionSuperior from '../components/menu-accion-superior/MenuAccionSuperior.svelte'
  import MenuAccionSuperiorMobile from '../components/menu-accion-superior/MenuAccionSuperiorMobile.svelte'

  let Pastilla

  onMount(async () => {
    loadPastilla()
  })

  function loadPastilla() {
    import('../components/PastillaCompleta.svelte').then(res => (Pastilla = res.default))
  }

  export const getIsInverted = id => {
    if (id >= 19 && id < 27) {
      return true
    }
    return false
  }
</script>

<svelte:head>
  <title>Riscanvi</title>
  <meta name="description" content="Riscanvi" />
</svelte:head>

<div id="cover" class="bg-zinc-900 text-white">
  <div class="z-20 w-full h-screen">
    <div class="w-full h-screen absolute z-10">
      <Cables step={$historyPosition} inicio={$init} patch="bool" escena={pasos[$historyPosition].cables_escena} />
    </div>
    {#if $historyPosition == 0}
      <Loading />
    {:else}
      <svelte:component
        this={Pastilla}
        {...pasos[$historyPosition]}
        visible={$vis}
        position={pasos[$historyPosition].position}
        id={pasos[$historyPosition].id}
      />
    {/if}
    <div class="actions_wrapper">
      {#if $historyPosition > 1}
        <Decrementar />
      {/if}
      {#if $historyPosition < 28}
        {#if $historyPosition != 0}
          <Boton />
        {/if}
      {/if}
    </div>

    <div class="z-20"><Footer /></div>
    <div class="z-20 w-1/4 absolute top-6 left-6 hidden tablet:inline">
      <MenuAccionSuperior isInverted={getIsInverted($historyPosition)} />
    </div>
    <div class="z-20 w-1/4 absolute top-3 left-3 tablet:hidden">
      <MenuAccionSuperiorMobile isInverted={getIsInverted($historyPosition)} />
    </div>
  </div>
</div>

<style>
  .actions_wrapper {
    @apply z-30 absolute w-full tablet:w-auto bottom-[40px] tablet:bottom-[8%] desktop:bottom-9 right-0 tablet:right-5 p-4 tablet:p-0 flex items-center gap-6;
  }
</style>
