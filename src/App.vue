<template>
  <div id="app">
    <header-container @event-nav="scrollEvent($event)" />
    <top-container id="top-container"/>
    <about-container id="about-container"/>
    <member-container id="member-container"/>
    <event-container id="event-container"/>
    <contact-container id="contact-container"/>
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
  methods: {
    scrollEvent(navId) {
      if (navId === 1) {
        window.scrollTo(0, this.scrollElements.topContent);
      } else if (navId === 2) {
        window.scrollTo(0, this.scrollElements.aboutContent);
      } else if (navId === 3) {
        window.scrollTo(0, this.scrollElements.memberContent);
      } else if (navId === 4) {
        window.scrollTo(0, this.scrollElements.eventContent);
      } else {
        window.scrollTo(0, this.scrollElements.contactContent);
      }
    },
  },
  mounted() {
    this.scrollElements.topContent = document.getElementById('top-container').getBoundingClientRect().top;
    this.scrollElements.aboutContent = document.getElementById('about-container').getBoundingClientRect().top;
    this.scrollElements.memberContent = document.getElementById('member-container').getBoundingClientRect().top;
    this.scrollElements.eventContent = document.getElementById('event-container').getBoundingClientRect().top;
    this.scrollElements.contactContent = document.getElementById('contact-container').getBoundingClientRect().top;
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
