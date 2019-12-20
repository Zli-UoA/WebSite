<template>
  <about-content :abouts="abouts" />
</template>

<script>
import AboutContent from "./AboutContent.vue";

export default {
  components: { AboutContent },
  data() {
    return {
      abouts: [
        {
          title: "LT会",
          imageUrl: "https://bulma.io/images/placeholders/128x128.png",
          content:
            "春と秋に開催する、企業を複数招待しておこなう大LT会をはじめ、他大学とのLT会やメンバーが各自でLT会でメンバー同士のフィードバックや日々行ってることのアウトプットをしています。"
        },
        {
          title: "勉強会",
          imageUrl: "https://bulma.io/images/placeholders/128x128.png",
          content:
            "　メンバーが自分の得意な分野や気になっている言語など、一緒に勉強したい仲間を集めて勉強会を開催する場を提供します。"
        },
        {
          title: "ハッカソン",
          imageUrl: "https://bulma.io/images/placeholders/128x128.png",
          content:
            "　会津地元の企業や、サークルの学生主体でハッカソンを開いています。開発スキルを伸ばせるいい機会となり、大いに盛り上がります。"
        }
      ]
    };
  }
};
</script>

<style></style>
