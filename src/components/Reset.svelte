<script>
  import { historyPosition, vis } from "$lib/store.js";

  function increment() {
    vis.falso();
    historyPosition.reset();
    console.log($historyPosition);
  }
</script>

<button on:click={increment}> Reset </button>
