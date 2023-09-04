<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  if (window.eventCenterForAppNameVite) {
    console.log(
      '子系统接收data属性传来的值',
      window.eventCenterForAppNameVite.getData('app-child-vue3')
    );
  }
});
</script>

<template>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
