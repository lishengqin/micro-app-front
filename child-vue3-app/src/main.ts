import { createApp } from 'vue'
import './style.css'
import router from "@/router/index.js"
import App from './App.vue'

createApp(App).use(router).mount('#child-vue3-app')
function handleMicroData() {
  // eventCenterForAppNameVite 是基座添加到window的数据通信对象
  if (window.eventCenterForAppNameVite) {
    // 监听基座下发的数据变化
    window.eventCenterForAppNameVite.addDataListener((data: Record<string, unknown>) => {
      router.replace({ path: data.path })
    })
  }
}
handleMicroData()