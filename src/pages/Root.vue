<template>
  <div>
    <transition name="init" v-if="isInitializing">
      <init-animation class="init" />
    </transition>
    <div v-show="!isInitializing">
      <transition name="header">
        <header-container v-show="showHeader" />
      </transition>
      <top-container id="Home" />
      <span ref="anchor" />
      <about-container id="About" />
      <member-container id="Member" @loaded="isLoaded.member = true" />
      <event-container id="Events" @loaded="isLoaded.event = true" />
      <contact-container id="Contact" />
    </div>
  </div>
</template>

<script>
import TopContainer from "../components/TopContainer.vue";
import AboutContainer from "../components/AboutContainer.vue";
import MemberContainer from "../components/MemberContainer.vue";
import EventContainer from "../components/EventContainer.vue";
import ContactContainer from "../components/ContactContainer.vue";
import HeaderContainer from "../components/HeaderContainer.vue";
import InitAnimation from "../components/InitAnimation.vue";

export default {
  components: {
    TopContainer,
    AboutContainer,
    MemberContainer,
    EventContainer,
    ContactContainer,
    HeaderContainer,
    InitAnimation
  },
  data() {
    return {
      isLoaded: {
        member: false,
        event: false
      },
      showHeader: false
    };
  },
  computed: {
    isInitializing() {
      return !Object.values(this.isLoaded).every(x => x);
    }
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

<style>
.init {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

.init-enter-active,
.init-leave-active {
  transition: 1000ms ease;
}

.init-enter,
.init-leave-to {
  transform: scale3d(2, 2, 2);
  opacity: 0;
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
