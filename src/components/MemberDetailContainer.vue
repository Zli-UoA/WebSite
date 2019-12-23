<template>
  <transition name="member">
    <member-detail-content v-if="this.member !== null" :member="this.member" />
  </transition>
</template>

<script>
import MemberDetailContent from "./MemberDetailContent.vue";
import { getMember } from "../store";

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
    if (this.$store.getters.memberById(this.id) === undefined) {
      this.$store.dispatch(
        getMember({ id: this.id, onErr: () => this.$router.replace("/notfound") })
      );
    } else {
      this.member = this.$store.getters.memberById(this.id);
    }
  }
};
</script>

<style scoped>
.member-enter-active {
  transition: 500ms ease;
}

.member-enter,
.member-leave {
  opacity: 0;
}
</style>
