<template>
  <div id="app">
    <transition name="init" v-if="isInitializing">
      <init-animation class="init" />
    </transition>
    <div v-show="!isInitializing">
      <header-container />
      <top-container id="Home" />
      <about-container id="About" />
      <member-container id="Member" @loaded="isLoaded.member = true" />
      <event-container id="Events" @loaded="isLoaded.event = true" />
      <contact-container id="Contact" />
    </div>
  </div>
</template>

<script>
import TopContainer from './components/TopContainer.vue';
import AboutContainer from './components/AboutContainer.vue';
import MemberContainer from './components/MemberContainer.vue';
import EventContainer from './components/EventContainer.vue';
import ContactContainer from './components/ContactContainer.vue';
import HeaderContainer from './components/HeaderContainer.vue';
import InitAnimation from './components/InitAnimation.vue';

export default {
  components: {
    TopContainer,
    AboutContainer,
    MemberContainer,
    EventContainer,
    ContactContainer,
    HeaderContainer,
    InitAnimation,
  },
  data() {
    return {
      isLoaded: {
        member: false,
        event: false,
      },
    };
  },
  computed: {
    isInitializing() {
      return !Object.values(this.isLoaded).every(x => x);
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
}

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
</style>
