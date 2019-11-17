<template>
    <div class="member-content-wrapper">
        <title-tag :inverse="true">Members</title-tag>
        <p class="info">Zliのメンバーを紹介します</p>
        <div class="items">
            <font-awesome-icon
                class="arrow"
                icon="chevron-left"
                @click="incriment" />
            <member-item
                v-for="member in showMembers"
                :key="member.name"
                :member="member" />
            <font-awesome-icon
                class="arrow"
                icon="chevron-right"
                @click="decriment" />
        </div>
    </div>
</template>

<script>
import TitleTag from './Atom/TitleTag.vue';
import MemberItem from './MemberItem.vue';

export default {
  components: { TitleTag, MemberItem },
  props: {
    members: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      offset: 0,
    };
  },
  computed: {
    showMembers() {
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
  },
};
</script>

<style scoped>
    .member-content-wrapper {
        width: 1440px;
        height: 855px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-color: var(--color-black);
    }

    .info {
        color: var(--color-white);
        font-size: 40px;
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
