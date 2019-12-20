<template>
  <member-content :members="members" :is-loading="isLoading" />
</template>

<script>
import API from "../api";
import MemberContent from "./MemberContent.vue";

export default {
  components: { MemberContent },
  data() {
    return {
      members: [],
      isLoading: true
    };
  },
  async created() {
    this.members = await API.getMembers();
    this.isLoading = false;
    this.$emit("loaded");
  }
};
</script>
