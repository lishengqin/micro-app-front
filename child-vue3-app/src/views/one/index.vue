<template>
  <div>
    <button @click="postMsg">点击我，给主系统发送消息</button>
    <div class="one">我是vue3子系统-one</div>
  </div>
</template>
<script setup lang="ts">
const postMsg = () => {
  if (window.eventCenterForAppNameVite) {
    window.eventCenterForAppNameVite.dispatch({
      from: '来自子系统的消息哦',
      msg: '子应用发送的数据',
    });
  }
};
</script>
