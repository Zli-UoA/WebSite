<template>
  <member-detail-container :id="$route.params.id" />
</template>

<script>
import MemberDetailContainer from "../components/MemberDetailContainer.vue";

export default {
  components: { MemberDetailContainer }
};
</script>

<style></style>
