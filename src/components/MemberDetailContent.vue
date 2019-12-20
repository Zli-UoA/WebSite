<template>
  <div class="member-detail-wrapper">
    <div>
      <basic-image width="25vmax" height="25vmax" :src="member.imageUrl" :round="true" />
    </div>
    <div class="info">
      <p class="name">{{ member.name }}</p>
      <p class="description">{{ member.description }}</p>
      <ul class="links">
        <li v-for="link in links" :key="link.url" class="link">
          <font-awesome-icon class="link-icon" size="lg" :icon="link.icon" />
          <a :href="link.url">{{ link.url }}</a>
        </li>
      </ul>
    </div>
    <img class="zline" src="../assets/Line.svg" />
  </div>
</template>

<script>
import BasicImage from "./Atom/BasicImage.vue";

const linkToIcon = linkName => {
  switch (linkName) {
    case "hp":
      return ["fas", "globe"];
    case "github":
      return ["fab", "github"];
    case "twitter":
      return ["fab", "twitter"];
    case "facebook":
      return ["fab", "facebook"];
    default:
      return linkName;
  }
};

export default {
  components: { BasicImage },
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  computed: {
    links() {
      return Object.keys(this.member.links)
        .map(x => ({
          icon: linkToIcon(x),
          url: this.member.links[x]
        }))
        .filter(x => x.url.length !== 0);
    }
  }
};
</script>

<style scoped>
.member-detail-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  margin: 0;
}

.description {
  margin: 0;
}

.links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link {
  display: flex;
  align-items: center;
}

.link-icon {
  margin-right: 8px;
  color: var(--color-black-gray);
}

.link a {
  color: var(--color-black);
  text-decoration: none;
}

.link a:hover {
  color: var(--color-black-50);
}

.zline {
  width: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
}

@media screen and (min-width: 767px) {
  .member-detail-wrapper {
    padding: 0 10vw;
    justify-content: space-between;
  }

  .info {
    font-size: 32px;
    width: 50vw;
  }

  .name {
    font-size: 64px;
    margin-bottom: 48px;
  }

  .description {
    height: 180px;
  }

  .links {
    font-size: 24px;
  }

  .zline {
    height: 50vh;
  }
}

@media screen and (max-width: 767px) {
  .member-detail-wrapper {
    padding: 10vw 10vw 0;
    flex-direction: column;
    justify-content: start;
  }

  .info {
    font-size: 20px;
    width: 100%;
  }

  .name {
    font-size: 48px;
    margin-bottom: 16px;
    text-align: center;
  }

  .description {
    margin-bottom: 16px;
  }

  .links {
    position: absolute;
    bottom: 10vw;
    font-size: 16px;
  }

  .zline {
    height: 25vh;
    opacity: 0.5;
  }
}
</style>
