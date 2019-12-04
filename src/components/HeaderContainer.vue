<template>
  <HeaderContent @event-navigate="emitNavigate($event)"/>
</template>

<script>
import HeaderContent from './HeaderContent.vue';

export default {
  components: {
    HeaderContent,
  },
  methods: {
    emitNavigate(navId) {
      this.$emit('event-nav', navId);
    },
  },
};
</script>
