<template>
  <div id="app">
    <header-container/>
    <top-container id="Home"/>
    <about-container id="About"/>
    <member-container id="Member"/>
    <event-container id="Events"/>
    <contact-container id="Contact"/>
  </div>
</template>

<script>
import TopContainer from './components/TopContainer.vue';
import AboutContainer from './components/AboutContainer.vue';
import MemberContainer from './components/MemberContainer.vue';
import EventContainer from './components/EventContainer.vue';
import ContactContainer from './components/ContactContainer.vue';
import HeaderContainer from './components/HeaderContainer.vue';

export default {
  components: {
    TopContainer,
    AboutContainer,
    MemberContainer,
    EventContainer,
    ContactContainer,
    HeaderContainer,
  },
  data() {
    return {
      scrollElements: {
        topContent: null,
        aboutContent: null,
        memberContent: null,
        eventContent: null,
        contactContent: null,
      },
    };
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
</style>
