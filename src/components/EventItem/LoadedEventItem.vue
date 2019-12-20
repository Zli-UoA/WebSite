<template>
  <div
    class="wrapper"
    @click="() => $emit('click')" >
    <basic-image
      class="image"
      :src="event.image"
      width="348px"
      height="230px"
    ></basic-image>
    <div class="content">
      <span class="date">{{ date }}</span>
      <span class="title">{{ event.title }}</span>
      <div class="tags">
        <span
          v-for="tag in event.tags"
          :key="tag"
          class="tag">#{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import BasicImage from '../Atom/BasicImage.vue';

export default {
  components: { BasicImage },
  props: {
    event: Object,
  },
  computed: {
    date() {
      const timeFmt = t => [t.getHours(), t.getMinutes()]
        .map(x => `0${x}`)
        .map(x => x.slice(-2))
        .join(':');

      const { from, to } = this.event.time;
      const { date } = this.event;

      const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      const timeStr = `${timeFmt(from)} ~ ${timeFmt(to)}`;

      return `${dateStr} ${timeStr}`;
    },
  },
};
</script>

<style scoped>
  .wrapper {
    width: 348px;
    min-height: 454px;
    border-radius: 5px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 var(--color-black-30);
    transition: 300ms ease;
    cursor: pointer;
  }

  .wrapper:hover {
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1), 0 8px 8px 0 var(--color-black-30);
  }

  .image {
    border-radius: 5px 5px 0 0;
    overflow: hidden;
  }

  .content {
    width: 348px;
    height: 224px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 16px 32px;
    box-sizing: border-box;
  }

  .date {
    color: var(--color-danger);
    text-align: center;
  }

  .title {
    font-size: var(--font-size-medium);
    text-align: center;
    padding: 24px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    padding-right: 8px;
  }
</style>
