<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <router-view />
    <FooterSection />
  </div>
</template>

<style>
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  padding: 0;
}
</style>
