<template>
  <div>
    <div class="desktop">
      <slot name="desktop" />
    </div>
    <div class="mobile">
      <slot name="mobile" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 767px) {
  .desktop {
    display: none;
  }
}

@media screen and (min-width: 767px) {
  .mobile {
    display: none;
  }
}
</style>
