<template>
  <footer>
    <div id="footer-container">
      <img width="143px" height="74px" src="../assets/Logo.png" />
    </div>
    <p id="copyright-style">Copy right ©︎ 2020 Zli.</p>
  </footer>
</template>

<script>
export default {
  name: "FooterContent"
};
</script>

<style scoped>
footer {
  height: 336px;
  background: black;
  position: relative;
}
#footer-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#copyright-style {
  color: white;
  position: absolute;
  bottom: 0;
}
</style>
