<template functional>
  <figure :style="{ width: props.width, height: props.height }">
    <img
      :class="{ round: props.round }"
      :src="props.src" />
  </figure>
</template>

<style scoped>
  figure {
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  img.round {
    border-radius: 50%;
  }
</style>
