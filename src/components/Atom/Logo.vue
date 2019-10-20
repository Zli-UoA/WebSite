<template functional>
  <div :class="props.size">
    <img src="../../assets/logo.png" />
  </div>
</template>

<style scoped>
  img {
    width: 100%;
  }

  div, div.medium {
    display: inline-flex;
    align-content: center;
    width: 128px;
    height: auto;
  }

  div.small {
    width: 64px;
  }

  div.large {
    width: 256px;
  }
</style>
