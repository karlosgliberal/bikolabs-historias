<script>
  import { fly } from "svelte/transition";

  export let text = "";
  export let mayusculas = "true";
</script>

<!-- Pastilla borde lateral sin fondo HEADER + SPAN -->

<div
  class="relative px-6 py-6 border-l border-teal-500 sm:w-3/5 sm:max-w-lg rounded-sm mt-10"
>
  <div class="mx-auto max-w-md">
    <div class="space-y-2">
      <p
        class="text-lg leading-7 text-slate-800 font-mono {mayusculas === 'true'
          ? 'uppercase'
          : ''}"
      >
        {text}
      </p>
    </div>
  </div>
</div>
