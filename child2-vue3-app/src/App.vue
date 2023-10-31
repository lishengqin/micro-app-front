<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

onMounted(() => {
  if (window.eventCenterForAppNameVite2) {
    let data = window.eventCenterForAppNameVite2.getData('app-child-vue3');
    router.replace({ path: data.path });
  }
});
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>
