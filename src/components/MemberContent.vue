<template>
  <div class="member-content-wrapper">
    <title-tag :inverse="true">Members</title-tag>
    <p class="info">Zliのメンバーを紹介します</p>
    <div v-if="isLoading" class="items">
      <font-awesome-icon class="arrow" icon="chevron-left" />
      <member-item :is-loading="true" />
      <member-item :is-loading="true" />
      <member-item :is-loading="true" />
      <font-awesome-icon class="arrow" icon="chevron-right" />
    </div>
    <div v-else class="items">
      <font-awesome-icon
        v-show="members.length >= 3"
        class="arrow"
        icon="chevron-left"
        @click="incriment"
      />
      <member-item
        v-for="member in showMembers"
        @click="jumpMemberPage"
        :key="member.name"
        :member="member"
      />
      <font-awesome-icon
        v-show="members.length >= 3"
        class="arrow"
        icon="chevron-right"
        @click="decriment"
      />
    </div>
  </div>
</template>

<script>
import TitleTag from './Atom/TitleTag.vue';
import MemberItem from './MemberItem';

export default {
  components: { TitleTag, MemberItem },
  props: {
    members: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      offset: 0,
    };
  },
  computed: {
    showMembers() {
      if (this.members.length <= 3) {
        return this.members;
      }

      return [...new Array(3)]
        .map((_, i) => (this.offset + i) % this.members.length)
        .map(i => this.members[i]);
    },
  },
  methods: {
    incriment() {
      this.offset = (this.offset + 1) % this.members.length;
    },
    decriment() {
      this.offset = (this.offset <= 0 ? this.members.length : this.offset) - 1;
    },
    jumpMemberPage() {
      // TODO: route member page
    },
  },
};
</script>

<style scoped>
.member-content-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-color: var(--color-black);
  padding: 64px 0;
}

.info {
  color: var(--color-white);
  font-size: 40px;
  margin: 64px 0;
}

.items {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.arrow {
  color: var(--color-white);
  font-size: 48px;
}

.arrow:hover {
  opacity: 0.7;
}
</style>
