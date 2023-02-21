<script>
  import MenuAnimacion from '../components/menu/MenuAnimacion.svelte'
  import Footer from '../components/footer/Footer.svelte'
  import Cables from '../components/Cables.svelte'
  import { page } from '$app/stores'
  let escena = false
</script>

<div id="cover">
  <div class="z-20 w-full h-screen">
    <div class="w-full h-screen absolute z-10">
      <Cables step="1" inicio="0" {escena} patch="notfound" />
    </div>

    <div class="z-10 w-1/4 text-sm absolute top-6 left-6 hidden tablet:inline">
      <nav>
        <MenuAnimacion />
      </nav>
    </div>
    <Footer />
  </div>
</div>
