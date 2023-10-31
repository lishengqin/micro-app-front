import { createApp } from 'vue'
import './style.css'
import router from "@/router/index.js"
import App from './App.vue'

createApp(App).use(router).mount('#child-vue3-app2')
function handleMicroData() {
  // eventCenterForAppNameVite2 是基座添加到window的数据通信对象
  if (window.eventCenterForAppNameVite2) {
    // 监听基座下发的数据变化
    window.eventCenterForAppNameVite2.addDataListener((data: Record<string, unknown>) => {
      router.replace({ path: data.path })
    })
  }
}
handleMicroData()