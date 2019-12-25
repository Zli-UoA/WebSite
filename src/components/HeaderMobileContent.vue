<template>
  <div>
    <header class="header-wrapper">
      <div class="header-inner">
        <Logo class="header-logo" :color="color" :size="size" />
        <div class="header__menu">
          <div class="header__menu__line" @click="clickMenu" :class="{ 'is-active': isActive }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <transition name="nav">
        <nav class="header-nav" v-show="isShowNavbar">
          <div class="header-nav__wrapper">
            <ul class="header-nav__list">
              <li class="header-nav__list__items" v-for="navItem in navigations" :key="navItem.id">
                <a :href="'#' + navItem.name" @click="closeMenu">{{ navItem.name }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </header>
  </div>
</template>
<script>
import Logo from "./Atom/Logo.vue";

export default {
  components: { Logo },
  props: {
    size: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    navigations: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isShowNavbar: false,
      isActive: false
    };
  },
  methods: {
    clickMenu() {
      this.isShowNavbar = !this.isShowNavbar;
      this.isActive = !this.isActive;
    },
    closeMenu() {
      this.isShowNavbar = false;
      this.isActive = false;
    }
  }
};
</script>
<style scoped>
header.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100vw;
  margin: 0;
  padding: 0 3%;
  background-color: var(--color-black-gray);
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}

.header-inner {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.header__menu {
  width: 3rem;
  height: 1rem;
}

.header__menu__line {
  margin-left: 20px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.header__menu__line span {
  width: 5%;
  height: 1.3px;
  background: var(--color-white);
  display: block;
  transition: 0.6s;
  position: absolute;
}
.header__menu__line span:first-child {
  top: 20px;
}
.header__menu__line span:nth-child(2) {
  top: 32px;
}
.header__menu__line span:last-child {
  bottom: 20px;
}
.header__menu__line.is-active span {
  transition: 0.6s;
}
.header__menu__line.is-active span:first-child {
  transform: rotate(45deg);
  top: 50%;
}
.header__menu__line.is-active span:nth-child(2) {
  opacity: 0;
}
.header__menu__line.is-active span:last-child {
  transform: rotate(-45deg);
  top: 50%;
}

.header-nav {
  width: 100%;
  height: 35vh;
  display: block;
  position: absolute;
  align-items: center;
  left: 0;
  border-top: solid 1px var(--color-warning);
}

.header-nav__wrapper {
  backdrop-filter: blur(10px);
}

.header-nav__list {
  list-style-type: none;
  text-align: center;
  background: var(--color-black-gray);
  width: 100%;
  margin: 0;
  padding: 0%;
  left: 0;
}

.header-nav__list__items {
  padding: 10px 0;
}

.header-nav__list__items a {
  text-decoration: none;
  color: var(--color-white);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.header-nav__list__items a:hover {
  color: var(--color-warning);
}

.nav-enter {
  opacity: 0;
  transform: translateX(-1000px);
}
.nav-enter-to,
.nav-leave {
  opacity: 1;
  transform: translateX(0px);
}
.nav-leave-to {
  opacity: 0;
  transform: translateX(1000px);
}
.nav-enter-active,
.nav-leave-active {
  transition: 0.15s;
}
</style>
