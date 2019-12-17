<template>
  <iframe
    :src="`${formUrl}?embedded=true`"
    :width="width"
    :height="height"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    >読み込んでいます…</iframe
  >
</template>

<script>
export default {
  props: {
    formUrl: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 640,
    },
    height: {
      type: Number,
      default: 655,
    },
  },
};
</script>

<style scoped></style>
