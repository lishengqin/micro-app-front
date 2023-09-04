<template>
  <div class="layout-wrap">
    <top class="top" />
    <div class="content">
      <left class="left" />
      <right class="right" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import top from './top.vue';
import left from './left.vue';
import right from './right.vue';
</script>
<style scoped lang="scss">
.layout-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .top {
    height: 50px;
    border-bottom: 1px solid #fff;
    background: #f5d0d7;
  }
  .content {
    flex: 1;
    display: flex;
    .left {
      width: 280px;
      border-right: 1px solid #fff;
      background: #eedde0;
    }
    .right {
      flex: 1;
    }
  }
}
</style>
