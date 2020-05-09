<template>
  <event-content :events="events" :is-loading="events.lenght === 0" />
</template>

<script>
import { mapGetters } from "vuex";
import EventContent from "./EventContent.vue";
import { getEvents } from "../store";

export default {
  components: { EventContent },
  computed: {
    ...mapGetters(["events"])
  },
  async created() {
    this.$store.dispatch(getEvents());
  }
};
</script>

<style scoped></style>
