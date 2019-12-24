<template>
  <div>
    <transition name="header">
      <header-container v-show="showHeader" />
    </transition>
    <top-container id="Home" />
    <span ref="anchor" />
    <about-container id="About" class="part" />
    <member-container id="Member" class="part" />
    <event-container id="Events" class="part" />
    <contact-container id="Contact" class="part" />
  </div>
</template>

<script>
import TopContainer from "../components/TopContainer.vue";
import AboutContainer from "../components/AboutContainer.vue";
import MemberContainer from "../components/MemberContainer.vue";
import EventContainer from "../components/EventContainer.vue";
import ContactContainer from "../components/ContactContainer.vue";
import HeaderContainer from "../components/HeaderContainer.vue";

export default {
  components: {
    TopContainer,
    AboutContainer,
    MemberContainer,
    EventContainer,
    ContactContainer,
    HeaderContainer
  },
  data() {
    return {
      showHeader: false
    };
  },
  mounted() {
    const opts = {
      threshold: 0,
      rootMargin: "-25% 0px 0px 0px"
    };
    const observer = new IntersectionObserver(ev => {
      this.showHeader = !ev[0].isIntersecting;
    }, opts);
    observer.observe(this.$refs.anchor);
  }
};
</script>

<style scoped>
#Home {
  position: sticky;
  top: 0;
  z-index: -1;
}

.part {
  padding-top: 128px;
}

.header-enter-active,
.header-leave-active {
  transition: 0.5s ease-out;
}

.header-enter,
.header-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
