<script>
  import { fly } from "svelte/transition";
  export let visible = true;
  export let ancho = "";
  export let top = "200";
  export let left = "200";
  export let right = "auto";

</script>

{#if visible == true}
<div
  class="absolute z-20 justify-center items-center py-10 bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray px-10 place-items-center" 
    style="width: {ancho}px; top: {top}px; left: {left}px;right: {right};">
  <div class="flex flex-col justify-center items-start">
    <h1 class="hidden sm:block text-6xl font-bold text-white">Miral Suthar</h1>
    <p class="hidden sm:block text-2xl font-semibold text-gray-200">
      Hello, I am Frontend Developer from India <br /> and this is tailwindcss glassmorphism {ancho}
    </p>
  </div>
</div>
{:else}
<div class="absolute z-20 flex justify-around h-screen w-screen items-center">  
<div class="py-40 bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray px-10 " 
  style="width: {ancho}px;"
>
  <div class="flex flex-col justify-center items-center">
    <p class="hidden sm:block text-2xl justify-center font-semibold text-gray-200">
      El acierto en las decisiones de los</p>
      <p class="hidden sm:block text-2xl justify-center font-semibold text-gray-200">
        <strong> sistemas automatizados </strong>
    </p>
  </div>
</div>
</div>
{/if}
