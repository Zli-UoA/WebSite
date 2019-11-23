<template>
  <div
    class="wrapper"
    @click="() => $emit('click')">
    <basic-image
      width="320px"
      height="320px"
      :src="member.imageUrl"
      :round="true" />
    <div class="content">
      <div class="name">{{ member.name }}</div>
      <div class="icons">
        <a
          v-for="link in links"
          :key="link[1]"
          :href="link[1]"
          @click.stop
          target="__bleak">
          <font-awesome-icon :icon="link[0]" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BasicImage from '../Atom/BasicImage.vue';

// linkのKeyからIconの名前に変換する関数
const linkToIcon = (linkName) => {
  switch (linkName) {
    case 'hp':
      return ['fas', 'globe'];
    case 'github':
      return ['fab', 'github'];
    case 'twitter':
      return ['fab', 'twitter'];
    case 'facebook':
      return ['fab', 'facebook'];
    default:
      return linkName;
  }
};

export default {
  components: { BasicImage },
  props: {
    member: Object,
  },
  computed: {
    links() {
      return Object.keys(this.member.links)
        .map(x => ([linkToIcon(x), this.member.links[x]]))
        .filter(tuple => tuple[1] !== '');
    },
  },
};
</script>

<style scoped>
  .wrapper {
    position: relative;
    width: 320px;
    height: 320px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    border-radius: 50%;
    cursor: pointer;
  }

  .content:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .content:not(:hover) * {
    display: none;
  }

  .name {
    font-size: 42px;
  }

  .icons {
    display: flex;
    width: 60%;
    justify-content: space-around;
  }

  .icons > a {
    font-size: 32px;
    color: white;
  }

  .icons > a:hover {
    color: #ccc;
  }
</style>
