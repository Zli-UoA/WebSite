<template>
  <member-content :members="members" :is-loading="members.length === 0" />
</template>

<script>
import { mapGetters } from "vuex";
import MemberContent from "./MemberContent.vue";
import { getMembers } from "../store";

export default {
  components: { MemberContent },
  computed: {
    ...mapGetters(["members"])
  },
  async created() {
    this.$store.dispatch(getMembers());
  }
};
</script>
