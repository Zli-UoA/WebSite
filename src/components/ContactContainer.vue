<template>
    <contact-content :form-url="formUrl" />
</template>

<script>
import ContactContent from './ContactContent.vue';

export default {
  components: { ContactContent },
  data() {
    return {
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd7JhhbZRIZRBd3Y613k3f8_UWz-o8eWfr-6edhLaveOypWwg/viewform',
    };
  },
};
</script>
