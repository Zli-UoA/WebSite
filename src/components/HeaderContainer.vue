<template>
  <HeaderContent :size="logoSize" :color="logoColor" :navigations="navigations" />
</template>

<script>
import HeaderContent from './HeaderContent.vue';

export default {
  components: {
    HeaderContent,
  },
  data() {
    return {
      logoSize: 'small',
      logoColor: 'gray',
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
};
</script>
