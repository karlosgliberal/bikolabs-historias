<script>
  export let visible = true
</script>

{#if visible}
  <!--card container-->
  <div class="bg z-40 bg-opacity-100 w-full h-screen">
    <div class="bg w-full h-full flex justify-center items-center">
      <div class="spinner"></div>
    </div>
  </div>
{/if}

<style>
  .bg {
    background-color: #2F2D2C;
  }
.spinner {
  opacity: 0.3;
   width: 46px;
   height: 46px;
   border-radius: 50%;
   background: conic-gradient(#0000 10%,#ffffff);
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 5px),#000 0);
   animation: spinner 1s infinite linear;
}

@keyframes spinner {
   to {
      transform: rotate(1turn);
   }
}
</style>
