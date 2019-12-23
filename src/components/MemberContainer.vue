<template>
  <member-content :members="members" :is-loading="isLoading" />
</template>

<script>
import { mapGetters } from "vuex";
import MemberContent from "./MemberContent.vue";
import { getMembers } from "../store";

export default {
  components: { MemberContent },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapGetters(["members"])
  },
  async created() {
    this.$store.dispatch(getMembers());
    this.isLoading = false;
    this.$emit("loaded");
  }
};
</script>
