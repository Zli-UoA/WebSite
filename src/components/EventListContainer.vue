<template>
  <event-list :events="this.events" />
</template>

<script>
import EventList from "./EventList.vue";
import API from "../api";

export default {
  components: { EventList },
  data() {
    return {
      events: []
    };
  },
  async created() {
    this.events = await API.getEvents();
  }
};
</script>

<style></style>
