<template>
  <div class="wrapper">
    <title-tag class="title" :inverse="true">Contact</title-tag>
    <div class="content">
      <google-form
        form-url="https://docs.google.com/forms/d/e/1FAIpQLSd7JhhbZRIZRBd3Y613k3f8_UWz-o8eWfr-6edhLaveOypWwg/viewform"
      />
    </div>
  </div>
</template>

<script>
import TitleTag from './Atom/TitleTag.vue';
import GoogleForm from './GoogleForm.vue';

export default {
  components: { GoogleForm, TitleTag },
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
