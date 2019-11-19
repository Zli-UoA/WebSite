<template>
    <member-content :members="members" />
</template>

<script>
import API from '../js/api';
import MemberContent from './MemberContent.vue';

export default {
  components: { MemberContent },
  data() {
    return {
      members: [],
      isLoading: true,
    };
  },
  async created() {
    this.members = await API.getMembers();
    this.isLoading = false;
  },
};
</script>
