<template>
  <header-mobile-content
    v-if="isMobileSize"
    :size="logoSize"
    :color="logoColor"
    :navigations="navigations"
  />
  <header-content v-else :size="logoSize" :color="logoColor" :navigations="navigations" />
</template>

<script>
import HeaderContent from "./HeaderContent.vue";
import HeaderMobileContent from "./HeaderMobileContent.vue";

export default {
  components: {
    HeaderMobileContent,
    HeaderContent
  },
  data() {
    return {
      logoSize: "small",
      logoColor: "gray",
      navigations: [
        {
          id: 1,
          name: "Home"
        },
        {
          id: 2,
          name: "About"
        },
        {
          id: 3,
          name: "Member"
        },
        {
          id: 4,
          name: "Events"
        },
        {
          id: 5,
          name: "Contact"
        }
      ],
      isMobileSize: false
    };
  },
  mounted() {
    console.log(window.innerWidth);
    this.isMobileSize = window.innerWidth <= 600;
  }
};
</script>
