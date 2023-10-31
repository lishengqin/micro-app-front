<template>
  <div>
    <div style="font-size: 32px; color: #1b00ff; line-height: 100px">子系统2号的菜单one</div>

    <button @click="postMsg">点击我，给主系统发送消息</button>
    <div class="one">我是vue3-2222----子系统-one</div>
  </div>
</template>
<script setup lang="ts">
const postMsg = () => {
  if (window.eventCenterForAppNameVite2) {
    window.eventCenterForAppNameVite2.dispatch({
      from: '来自2号的子系统的消息哦',
      msg: '子应用发送的数据',
    });
  }
};
</script>
