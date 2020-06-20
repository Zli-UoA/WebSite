<template>
  <div class="about-info-wrapper">
    <basic-image width="500px" height="500px" :src="src" />
    <div class="info-content">
      <div>
        {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import BasicImage from "./Atom/BasicImage.vue";

export default {
  components: { BasicImage },
  props: {
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    side: {
      type: String,
      default: "left"
    }
  }
};
</script>

<style scoped>
.about-info-wrapper {
  display: flex;
  flex-direction: row;
}

.info-content {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
