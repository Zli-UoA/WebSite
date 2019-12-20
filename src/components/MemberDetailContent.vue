<template>
  <div>{{ member }}</div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
