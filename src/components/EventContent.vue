<template>
  <div class="event-content-wrapper">
    <title-tag>Events</title-tag>
    <div v-if="isLoading" class="content">
      <event-item class="item" :is-loading="true" />
      <event-item class="item" :is-loading="true" />
      <event-item class="item" :is-loading="true" />
    </div>
    <div v-else class="content">
      <event-item
        class="item"
        v-for="item in events"
        :key="item.name"
        :event="item"
        :is-loading="isLoading"
        @click="() => jumpLink(item.url)"
      />
    </div>
    <div class="more">
      <router-link to="/">
        <font-awesome-icon
          class="down-icon"
          :icon="['fas', 'chevron-circle-down']"
        />過去のイベントを見る
      </router-link>
    </div>
  </div>
</template>

<script>
import TitleTag from "./Atom/TitleTag.vue";
import EventItem from "./EventItem";

export default {
  components: { TitleTag, EventItem },
  props: {
    events: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    jumpLink(url) {
      window.location.href = url;
    }
  }
};
</script>

<style scoped>
.event-content-wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;
  background: var(--color-white);
}

.content {
  padding: 64px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content .item {
  margin-right: 32px;
}

.content .item:last-child {
  margin-right: 0;
}

.more {
  font-size: 16px;
  color: var(--color-black-gray);
}

.more a {
  text-decoration: none;
  color: var(--color-black-gray);
}

.more .down-icon {
  margin-right: 8px;
}
</style>
