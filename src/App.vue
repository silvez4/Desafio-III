<template>
  <div>
    <!-- <router-link class="link" :to="{ path: '/user', query: { name: 'Foo' }}">Say hello</router-link> -->
    <router-view />
    <AgifyApi />
  </div>
</template>

<script setup>
import AgifyApi from "./components/AgifyApi.vue";
</script>
