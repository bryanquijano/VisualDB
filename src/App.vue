<script setup>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Nav />
  <div class="container mx-auto">
    <router-view />
  </div>
  <Footer />
</template>
