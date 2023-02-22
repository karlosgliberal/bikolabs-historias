<script>
  import { page } from '$app/stores'
  export let texto = 'link'
  export let link = '/'
  let currentLink = $page.url.pathname
  export let isColor = ''
</script>

<a class:active={currentLink == link} class="group text-white-500 transition-all duration-300 ease-in-out" href={link}>
  {#if !isColor}
    <span
      class="inline-block bg-left-bottom bg-gradient-to-r from-yellow-600 to-yellow-500 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
    >
      {texto}
    </span>
  {/if}

  {#if isColor}
    <span
      class="inline-block bg-left-bottom bg-gradient-to-r from-pink-600 to-pink-500 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
    >
      {texto}
    </span>
  {/if}
</a>

<style>
  .active {
    @apply font-bold;
  }
</style>
