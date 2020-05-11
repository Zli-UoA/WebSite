<template>
  <div>
    <slot v-if="isDesktop" name="desktop" />
    <slot v-else name="mobile" />
  </div>
</template>

<script>
export default {
  data() {
    return { isDesktop: true };
  },
  async mounted() {
    await this.$nextTick();
    const mql = window.matchMedia("screen and (min-width: 767px)");
    this.isDesktop = mql.matches;
    mql.addListener(x => {
      this.isDesktop = x.matches;
    });
  }
};
</script>

<style scoped></style>
