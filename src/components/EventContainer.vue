<template>
  <event-content :events="events" :is-loading="isLoading" />
</template>

<script>
import { mapGetters } from "vuex";
import EventContent from "./EventContent.vue";
import { getEvents } from "../store";

export default {
  components: { EventContent },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapGetters(["events"])
  },
  async created() {
    this.$store.dispatch(getEvents());
    this.isLoading = false;
    this.$emit("loaded");
  }
};
</script>

<style scoped></style>
