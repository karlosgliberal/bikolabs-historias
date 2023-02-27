<script>
  import { init } from '$lib/store.js'
  export let texto = 'link'
  export let link = '/'
  export let isInverted = ''

  function increment() {
    init.start()
    console.log($init)
  }
</script>

<a on:click={increment} class="group text-white-500 transition-all duration-300 ease-in-out" href={link}>

  {#if !isInverted}
    <span
      class="inline-block bg-left-bottom bg-gradient-to-r from-yellow-600 to-yellow-500 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
    >
      {texto}
    </span>
  {/if}

  {#if isInverted}
    <span
      class="text-black inline-block bg-left-bottom bg-gradient-to-r from-yellow-600 to-yellow-500 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
    >
     {texto}
    </span>
  {/if}
</a>
