<template>
  <div class="wrapper">
    <div class="image" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 320px;
  height: 320px;
}

.image {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-color: #888;
  overflow: hidden;
}

.image::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: var(--color-black-30);
  border-radius: 50%;

  animation-name: loading;
  animation-duration: 1000ms;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}

@keyframes loading {
  from {
    transform: scale(0, 0);
    opacity: 1;
  }
  to {
    transform: scale(1, 1);
    opacity: 0;
  }
}
</style>
