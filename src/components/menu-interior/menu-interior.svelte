<script>
  import BurgerMenu from 'svelte-burger-menu'
  import Items from './components/Items.svelte'

  let src = 'images/logo.svg'
  const burguerProps = {
    backgroundColor: 'white',
    padding: '10',
    width: '100%',
  }
</script>

<div class="hidden tablet:inline">
  <nav class="flex items-center gap-4 text-xs tablet:text-sm">
    <div>
      <a href="/"><img {src} alt="" width="17px" /></a>
    </div>
    <Items />
  </nav>
</div>

<div class="inline tablet:hidden">
  <div class="flex flex-row justify-between">
    <div class="pt-3 ">
      <BurgerMenu {...burguerProps}>
        <div class="flex flex-col gap-5 text-2xl p-4 text-black font-cabin">
          <Items />
        </div>
      </BurgerMenu>
    </div>
    <div class="mr-3 z-20 absolute right-1 top-2">
      <a href="/"><img {src} alt="" width="20px" /></a>
    </div>
  </div>
</div>

<style>
</style>
