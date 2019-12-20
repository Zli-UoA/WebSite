<template>
  <transition name="member">
    <member-detail-content v-if="this.member !== null" :member="this.member" />
  </transition>
</template>

<script>
import MemberDetailContent from "./MemberDetailContent.vue";
import API from "../api";

export default {
  components: { MemberDetailContent },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      member: null
    };
  },
  async created() {
    try {
      this.member = await API.getMember(this.id);
    } catch (e) {
      this.$router.replace("/notfound");
    }
  }
};
</script>

<style>
.member-enter-active {
  transition: 500ms ease;
}

.member-enter,
.member-leave {
  opacity: 0;
}
</style>
