<script>
  import { historyPosition, vis } from "$lib/store.js";

  function decrement() {
    vis.falso();
    historyPosition.restar((n) => n - 1);
    console.log($historyPosition);
  }
</script>

<button on:click={decrement}> - </button>
