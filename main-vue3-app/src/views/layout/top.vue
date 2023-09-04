<template>
  <div class="top-wrap">
    <div>我是主系统，姓名：</div>
    <div>{{ userInfo.$state.user.name }}</div>
  </div>
</template>
<script setup>
import { useUserStore } from '@/store/user';
const userInfo = useUserStore();
</script>
<style scoped lang="scss">
.top-wrap {
  display: flex;
  display: flex;
  align-items: center;
  padding-left: 32px;
}
</style>
