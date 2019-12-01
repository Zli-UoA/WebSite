<template>
    <div
        class="top-content-wrapper"
        :style="{'background-image': `url(${imageUrl})`}">
        <div class="border">
            <div class="content">
                <img width="346px" height="183px" src="../assets/Logo.png" />
                <div class="description">
                    We are <span class="yellow">Zli</span><br>
                    Ai<span class="yellow">z</span>u <span class="yellow">Li</span>ghtning Talk
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
    .top-content-wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
    }

    .border {
        width: 1100px;
        height: 560px;
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.9);
        box-sizing: border-box;
        padding: 42px;
    }

    .content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(255, 255, 255, 0.9);
        box-sizing: border-box;
        padding: 0 32px;
    }

    .yellow {
        color: var(--color-primary);
        font-weight: bold;
    }

    .description {
        text-align: center;
        font-size: 40px;
    }

    .hoge {
        width: 100px;
        height: 100px;
        background: red;
        box-shadow: 0 0 0 10px black, 0 0 0 5px gray;
    }
</style>
