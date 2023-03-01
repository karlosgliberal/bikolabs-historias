<script>
  import Logos from '../footer/Logos.svelte'
  export let isInverted = ''
</script>

<nav class="flex gap-3 items-center text font-cabin">
  <Logos {isInverted} />
</nav>
