<template>
  <div class="event-list-wrapper">
    <div class="search-box-wrapper">
      <search-box placeholder="イベントを検索" v-model="searchInput" />
    </div>
    <div class="event-items">
      <event-item
        v-for="event in showEvents"
        :key="event.id"
        :event="event"
        class="event-item"
        @click="() => jumpPage(event.url)"
      />
    </div>
  </div>
</template>

<script>
import SearchBox from "./SearchBox.vue";
import EventItem from "./EventItem";

export default {
  components: { SearchBox, EventItem },
  props: {
    events: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchInput: ""
    };
  },
  computed: {
    showEvents() {
      return this.events.filter(x => x.title.indexOf(this.searchInput) !== -1);
    }
  },
  methods: {
    jumpPage(url) {
      window.location.href = url;
    }
  }
};
</script>

<style scoped>
.event-list-wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.search-box-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 92px;
}

.event-items {
  display: grid;
}

.event-item {
  margin: 0 auto;
}

@media screen and (min-width: 767px) {
  .event-list-wrapper {
    padding: 10vh 10vw;
  }

  .event-items {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 10vh 5vw;
  }
}

@media screen and (max-width: 767px) {
  .event-list-wrapper {
    padding: 10vh 10vw;
  }

  .search-box-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 10vh;
  }

  .event-items {
    gap: 5vh 10vw;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  .event-item {
    margin: 0 auto;
    width: 160px !important;
    height: 160px !important;
  }
}
</style>
