<template>
  <div class="wrapper">
    <title-tag class="title" :inverse="true">Contact</title-tag>
    <div class="content">
      <google-form :form-url="formUrl" />
    </div>
  </div>
</template>

<script>
import TitleTag from './Atom/TitleTag.vue';
import GoogleForm from './GoogleForm.vue';

export default {
  components: { GoogleForm, TitleTag },
  props: {
    formUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  padding: 98px;
}

.content {
  padding-top: 100px;
}
</style>
