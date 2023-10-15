<template>
  <Navbar />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './layouts/Navbar.vue';
</script>
