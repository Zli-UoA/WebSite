<template>
  <div class="wrapper">
    <basic-image
      width="240px"
      height="240px"
      :src="imageUrl"
      :round="true" />
    <div class="title">{{ title }}</div>
    <p class="content"><slot /></p>
  </div>
</template>

<script>
import BasicImage from './Atom/BasicImage.vue';

export default {
  name: 'about-item',
  props: {
    imageUrl: String,
    title: String,
  },
  components: { BasicImage },
};
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 240px;
  }

  div.title {
    font-size: 48px;
    text-align: center;
    padding: 8px;
    box-sizing: border-box;
  }

  p.content {
    width: 100%;
    word-wrap: break-word;
    margin: 0;
    font-size: 24px;
  }
</style>
