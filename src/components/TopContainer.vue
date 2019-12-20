<template>
  <top-content :image-url="image" />
</template>

<script>
import TopContent from "./TopContent.vue";

export default {
  components: { TopContent },
  data() {
    return {
      image:
        "https://lh3.googleusercontent.com/EKackXtEtkzD1CLbOqbU7984AT9mGmTf46wvhwdbxK3Eyvzljqo3rM1M8_tTD-Bg3BPCxZ6fc0gqggdp3BgyRP7kY7VK-wa68E0rOjaed30QlrF-yh5_kSuNfdHENuhBtXCIXV5SqI-RQsVlE-56uqGGTUlJ-0Ukw7uPICPIcZAJJKre4YDCy5GIBQMcz2shWiW1Klxvs05hheLQgbCTzIZCTIRQfoJ8nQnSrv-DZVvoHBeAEdOCy-lgIYuQoVZCqOqmK2i9NTSqPdV4heTlT2D3bxzYNzy1_Oa83cIuw8SWWKBrhlt9zVV2T0Zo_79FiTYmDYtKnbtZwMxjSEv6ubZ4Hz0nOw7Ok7jiU9vHstm_hoZ5LLBmlkFG3KTkaK-lERiZ82r8JdNk5ap_MVPsnHLTobLpZF-fx9puWVL3jhX80H0y2MREEDk0C6G1JguUIdgKXgvgOKz0nsiB3UOugWUwQN8c4TJwFqfgy65Urhbuyt2qKOQ_ZKEhRZMNQeuz5gBQu5gI1WTn-qAXNT4J_mgvO2R9JPBAkQ-z2rNzXUXfpmiQtlql2cqokeSwoO6Js4kACHiHw88_1Zy8_7AkDGDYo10sTBGSoUKs1Ms6wl8gvK3cURJESvgW6fy0mKvh2u2TqGfqCzd-O8KV55KV_TI5Y7iMoMf4VVH3C2mhveJdM1ovBh4eCmWhutwvp094gg9Xl6dVmieSQ-cfFHa1hOccMOL7vWH1s0wRI72Sm2Fn9RI5AQ=w2368-h1578-no"
    };
  }
};
</script>
