<template>
  <header class="header-wrapper">
    <div class="header-inner">
      <Logo class="header-logo"  :color="color" :size="size"/>
      <nav class="header-nav">
        <ul class="header-nav__list">
          <li class="header-nav__list__items"
              v-for="navItem in navigations"
              :key="navItem.id">
            <a :href="'#'+ navItem.name">{{navItem.name}}</a>
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
  props: {
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    navigations: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped >
  header.header-wrapper {
    height: 64px;
    width: 100%;
    padding: 21px 36px;
    margin: 0;
    padding: 0 3%;
    background-color: var(--color-black);
    box-sizing: border-box;
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
