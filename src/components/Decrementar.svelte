<script>
  import { historyPosition, vis } from "$lib/store.js";

  function decrement() {
    vis.falso();
    historyPosition.restar();
  }
</script>

<button on:click={decrement}> - </button>
