<template functional>
  <figure
    :style="{
      width: props.width,
      height: props.height
    }" >
    <div
      v-if="props.overlay"
      :class="{ round: props.round }"
      :style="{ background: props.overlay }" />
    <img
      :class="{ round: props.round }"
      :src="props.src" />
  </figure>
</template>

<style scoped>
  figure {
    position: relative;
    margin: 0;
    padding: 0;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }

  .round {
    border-radius: 50%;
  }
</style>
