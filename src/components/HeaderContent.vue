<template>
  <header class="header-wrapper">
    <div class="header-inner">
      <Logo class="header-logo" :color="color" :size="size" />
      <nav class="header-nav">
        <ul class="header-nav__list">
          <li class="header-nav__list__items" v-for="navItem in navigations" :key="navItem.id">
            <a :href="'#' + navItem.name">{{ navItem.name }}</a>
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
<style scoped>
header.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  margin: 0;
  padding: 0 3%;
  background-color: var(--color-black-gray);
  box-sizing: border-box;
  z-index: 999;
  backdrop-filter: blur(10px);
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
  margin: 0;
  padding: 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.header-nav__list__items {
  color: var(--color-white);
  font-size: 24px;
}

.header-nav__list__items a {
  color: var(--color-white);
  text-decoration: none;
  transition: 300ms ease;
}
.header-nav__list__items a:hover {
  color: var(--color-warning);
}
</style>
