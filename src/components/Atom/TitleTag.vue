<template functional>
  <div :class="{ inverse: props.inverse, [data.staticClass]: true }" :style="data.style">
    <slot />
  </div>
</template>

<style scoped>
div {
  display: inline-block;
  padding: 4px 48px;
  font-size: 40px;
  background: var(--color-black);
  color: var(--color-white);
}

div.inverse {
  color: var(--color-black);
  background: var(--color-white);
}
</style>
