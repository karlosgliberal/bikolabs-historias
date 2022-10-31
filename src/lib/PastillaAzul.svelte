<script>
  export let text = "";
  export let title = "";
</script>

<!-- Pastilla Azul Doble  -->
<div>
  <div
    class="relative bg-slate-800 px-4 py-5 shadow-sm ring-1 ring-teal-100 rounded-sm"
  >
    <div class="ml-6 max-w-md">
      <div class="space-y-2">
        <p class="text-teal-300 text-xl justify-center font-mono">{title}</p>
      </div>
    </div>
  </div>
  {#if text != ""}
    <div
      class="relative bg-slate-800  py-5 shadow-sm ring-1 ring-teal-100 sm:w-3/5 sm:max-w-lg rounded-sm"
    >
      <div class="mx-auto max-w-md">
        <div class="space-y-2">
          <p class="text-lg leading-7 text-gray-100 font-light">
            {text}
          </p>
        </div>
      </div>
    </div>
  {/if}
</div>
