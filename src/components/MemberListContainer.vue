<template>
  <member-list-content :members="this.members" />
</template>

<script>
import MemberListContent from "./MemberListContent.vue";
import API from "../api";

export default {
  components: { MemberListContent },
  data() {
    return {
      members: []
    };
  },
  async created() {
    this.members = await API.getMembers();
  }
};
</script>

<style></style>
