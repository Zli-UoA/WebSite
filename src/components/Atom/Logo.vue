<template functional>
  <div :class="props.size">
    <svg viewBox="0 0 184 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="main"
        :class="props.color"
        d="M14 18L30 0H110.5L39 79.5H159.654L143.928 97H0L70.5 18H14Z" />
      <g class="sub" :class="props.color">
        <path d="M123.897 0H147.5L76 79.5H52.5L123.897 0Z" />
        <path d="M184 0H159.897L142.443 19.6712H154.479H166.524L184 0Z" />
        <path d="M89.5 79.5H113.5L161.367 26.5588H137.293L89.5 79.5Z" />
      </g>
    </svg>
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

  svg {
    width: 100%;
    height: 100%;
  }

  path.main {
    fill: #FFD600;
  }

  g.sub {
    fill: #2C2C2C;
  }

  path.main.gray {
    fill: #818181;
  }

  g.sub.gray {
    fill: #F2F2F2;
  }

  path.main.black {
    fill: #2C2C2C;
  }

  g.sub.black {
    fill: #818181;
  }
</style>
