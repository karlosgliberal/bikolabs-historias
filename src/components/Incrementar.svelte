<script>
  import { historyPosition, vis } from "$lib/store.js";

  function increment() {
    vis.falso();
    historyPosition.sumar();
  }
</script>

<button on:click={increment}> + </button>
