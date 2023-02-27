<script>
  export let isInverted = '';
</script>

<div class="flex flex-row gap-2 items-center">
  {#if !isInverted}
  <img src="images/logowhite.svg" alt="" width="13px" />
   <div class="">+</div>
  <img src="images/logobikowhite.svg" alt="" width="40px" />
  {/if}
  {#if isInverted}
  <img src="images/logoblack.svg" alt="" width="13px" />
   <div class="text-black">+</div>
  <img src="images/logobikoblack.svg" alt="" width="40px" />
  {/if}
</div>
