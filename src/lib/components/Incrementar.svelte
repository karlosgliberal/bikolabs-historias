<script>
  import { historyPosition } from "$lib/store.js";

  function increment() {
    historyPosition.sumar((n) => n + 1);
    console.log($historyPosition);
  }
</script>

<button on:click={increment}> + </button>
