<template>
  <div id="app">
    <header-container />
    <top-container />
    <about-container />
    <member-container />
    <event-container />
    <contact-container />
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
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
