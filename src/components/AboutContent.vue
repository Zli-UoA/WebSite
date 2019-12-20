<template>
  <div class="about-content-wrapper">
    <title-tag>About</title-tag>
    <p>
      <span>Zliは会津大学のIT系勉強会サークルです。</span>
      <br />
      <span>初めは小さなLT会から始まり50人規模の大きなサークルになりました。</span>
    </p>
    <div class="content">
      <about-item
        v-for="about in abouts"
        :key="about.title"
        :image-url="about.imageUrl"
        :title="about.title"
        >{{ about.content }}</about-item
      >
    </div>
  </div>
</template>

<script>
import TitleTag from "./Atom/TitleTag.vue";
import AboutItem from "./AboutItem.vue";

export default {
  components: { TitleTag, AboutItem },
  props: {
    abouts: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.about-content-wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0;
}

p {
  font-size: 32px;
  text-align: center;
  margin: 50px 0;
}

.content {
  display: flex;
  width: 100%;
  padding: 0 128px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-around;
}
</style>
