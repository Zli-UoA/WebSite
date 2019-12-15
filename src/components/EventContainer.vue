<template>
  <event-content :events="events" :is-loading="isLoading" />
</template>

<script>
import EventContent from './EventContent.vue';
import API from '../api';

export default {
  components: { EventContent },
  data() {
    return {
      events: [],
      isLoading: true,
    };
  },
  async created() {
    this.events = await API.getEvents();
    this.isLoading = false;
    this.$emit('loaded');
  },
};
</script>

<style scoped></style>
