<template>
  <div class="member-list-wrapper">
    <div class="search-box-wrapper">
      <search-box placeholder="メンバー検索" v-model="searchInput" />
    </div>
    <div class="member-items">
      <member-item
        v-for="member in showMembers"
        :key="member.id"
        :member="member"
        class="member-item"
      />
    </div>
  </div>
</template>

<script>
import SearchBox from './SearchBox.vue';
import MemberItem from './MemberItem';

export default {
  components: { SearchBox, MemberItem },
  props: {
    members: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchInput: '',
    };
  },
  computed: {
    showMembers() {
      return this.members.filter(x => x.name.indexOf(this.searchInput) !== -1);
    },
  },
};
</script>

<style>
.member-list-wrapper {
  width: 100vw;
  padding: 92px 140px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.search-box-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 92px;
}

.member-items {
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.member-item {
  margin: 0 auto;
}
</style>
