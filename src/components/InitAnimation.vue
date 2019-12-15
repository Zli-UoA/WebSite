<template>
  <div class="animation-wrapper">
    <svg
      width="100vw"
      height="100vh"
      viewBox="0 0 649 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path class="l" d="M412.253 1H456.88L321.694 150.985H277.262L412.253 1Z" fill="#f2f2f2" />
      <path
        class="i"
        d="M525.891 1H480.318L447.318 38.1117H470.076H492.848L525.891 1Z"
        fill="#f2f2f2"
      />
      <path
        class="i"
        d="M347.219 150.985H392.596L483.098 51.1057H437.582L347.219 150.985Z"
        fill="#f2f2f2"
      />
      <path class="z" d="M0.5 16H349.45L213.292 167H648.74" stroke="#ffd600" stroke-width="32" />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.animation-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black);
}

.z {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: z 2000ms ease-in-out 0s 1 forwards;
}

@keyframes z {
  0% {
    stroke-dashoffset: 2000;
  }

  100% {
    stroke-dashoffset: 0;
  }
}

.l {
  opacity: 0;
  animation: l 2000ms ease 0s 1 forwards;
}

.i {
  opacity: 0;
  animation: l 2000ms ease 250ms 1 forwards;
}

@keyframes l {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
