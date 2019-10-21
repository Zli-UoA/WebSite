<template functional>
  <div :class="{ inverse: props.inverse}">
    <slot />
  </div>
</template>

<style scoped>
  div {
    display: inline-block;
    padding: 4px 48px;
    font-size: 40px;
    background: black;
    color: white;
  }

  div.inverse {
    background: white;
    color: black;
  }
</style>
