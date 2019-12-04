<template>
  <header class="header-wrapper">
    <div class="header-inner">
      <Logo class="header-logo"  :color="logoColor"/>
      <nav class="header-nav">
        <ul class="header-nav__list">
          <li class="header-nav__list__items"
              v-for="navItem in navigations"
              :key="navItem.id"
              @click="scrollEvent(navItem.id)">
            <a href="">{{navItem.name}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import Logo from './Atom/Logo.vue';

export default {
  components: { Logo },
  data() {
    return {
      logoSize: 'medium',
      logoColor: 'black',
      navigations: [
        {
          id: 1,
          name: 'Home',
        },
        {
          id: 2,
          name: 'About',
        },
        {
          id: 3,
          name: 'Member',
        },
        {
          id: 4,
          name: 'Events',
        },
        {
          id: 5,
          name: 'Contact',
        },
      ],
    };
  },
  methods: {
    scrollEvent(navigationId) {
      console.log(navigationId);
      // this.$emit('navigation-event', navigationId);
    },
  },
};
</script>
<style scoped >
  header.header-wrapper {
    height: 64px;
    width: 100％;
    padding: 21px 36px;
    margin: 0;
    background-color: var(--color-black);
  }

  .header-inner {
    width: 100%;
    height: 100%;
    margin: auto;
    align-items: center;
    display: flex;
    justify-content: right;
  }


  .header-nav {
    width: 90vw;
    margin-left: 100px;
  }

  .header-nav__list {
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style :none;
  }

  .header-nav__list__items {
    color: var(--color-white);
    font-size: var(--font-size-large);
    transform: scale(0.5);
  }

  .header-nav__list__items:hover {
    transform: scale(0.8);
  }
  .header-nav__list__items a {
    color: var(--color-white);
    text-decoration: none;
  }
</style>
