<template>
  <div id="app">
    <navbar />
    <Header />
    <Main />
    <Footer />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Header,
    Main,
    Footer,
  },
};
</script>
<style></style>
