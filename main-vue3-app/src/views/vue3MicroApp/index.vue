<template>
  <div>
    <div style="color: red; margin-bottom: 10px; background: pink">
      我是用来承接子系统页面的呀！！！
      {{ route.path }}
    </div>
    <micro-app :url="url" :name="name" :data="data" @datachange="dataChange" />
  </div>
</template>
<script setup lang="ts">
import { configIPList } from '@/config.js';

import microZoeApp, { getActiveApps, EventCenterForMicroApp } from '@micro-zoe/micro-app';
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const data = ref({
  msg: '我是主系统通过data属性传给子系统的值',
});
/**
 * url：子系统的域名ip和base拼接的，这个base需要与子系统的vite.config中的base保持一致
 * name: 子系统的特定标识，便于后续数据通信
 * */
const url = configIPList['child-vue3'] + '/child-vue3/';
const name = 'app-child-vue3';
const dataChange = v => {
  console.log(v);
};
// @ts-ignore 因为vite子应用关闭了沙箱，我们需要为子应用appname-vite创建EventCenterForMicroApp对象来实现数据通信
window.eventCenterForAppNameVite = new EventCenterForMicroApp(name);
watch(
  () => route.path,
  () => {
    microZoeApp.setData(name, { path: route.path });
  }
);
</script>
