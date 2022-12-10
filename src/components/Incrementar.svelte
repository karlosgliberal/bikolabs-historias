<script>
  import { historyPosition, vis } from "$lib/store.js";

  function increment() {
    vis.falso();
    historyPosition.sumar((n) => n + 1);
    console.log($historyPosition);
  }
</script>

<button on:click={increment}> + </button>
