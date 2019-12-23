<template>
  <event-list :events="this.events" />
</template>

<script>
import { mapGetters } from "vuex";
import EventList from "./EventList.vue";
import { getEvents } from "../store";

export default {
  components: { EventList },
  computed: {
    ...mapGetters(["events"])
  },
  created() {
    this.$store.dispatch(getEvents());
  }
};
</script>

<style></style>
