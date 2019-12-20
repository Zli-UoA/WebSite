<template>
  <div class="wrapper">
    <div class="dummy image" />
    <div class="content">
      <div class="dummy date" />
      <div class="dummy title" />
      <div class="tags">
        <div class="dummy tag" />
        <div class="dummy tag" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingEventItem"
};
</script>

<style scoped>
.wrapper {
  width: 348px;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 var(--color-black-30);
  transition: 300ms ease;
  cursor: pointer;
}

.wrapper:hover {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1), 0 8px 8px 0 var(--color-black-30);
}

.dummy.image {
  width: 348px;
  height: 230px;
  border-radius: 5px 5px 0 0;
}

.content {
  width: 348px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  box-sizing: border-box;
}

.dummy {
  background-color: var(--color-black-30);
  border-radius: 100px;
  overflow: hidden;
}

.dummy::after {
  content: "";
  display: block;
  height: 100%;
  background-color: var(--color-black-30);

  animation-name: loading;
  animation-duration: 1000ms;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}

.date {
  width: 240px;
  height: 24px;
}

.title {
  width: 240px;
  height: 49px;
  margin: 24px 0;
}

.tags {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.tag {
  width: 64px;
  height: 24px;
  margin-right: 8px;
}

@keyframes loading {
  from {
    width: 0;
    opacity: 1;
  }
  to {
    width: 100%;
    opacity: 0;
  }
}
</style>
