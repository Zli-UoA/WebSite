<template>
  <member-list-content :members="this.members" />
</template>

<script>
import { mapGetters } from "vuex";
import MemberListContent from "./MemberListContent.vue";
import { getMembers } from "../store";

export default {
  components: { MemberListContent },
  computed: {
    ...mapGetters(["members"])
  },
  async created() {
    this.$store.dispatch(getMembers());
  }
};
</script>

<style></style>
