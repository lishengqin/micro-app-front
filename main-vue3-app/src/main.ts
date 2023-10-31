import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js';
import { createPinia } from 'pinia';
import { configIPList } from '@/config.js';
import microApp from '@micro-zoe/micro-app'
const pinia = createPinia();
microApp.start({
  plugins: {
    modules: {
      /* 这是<micro-app />中子系统的name */
      'app-child-vue3': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              // 这里做的本质就是代理，因为在本地中启动，主系统和子系统的IP一样，但端口不一样，所以转发一下
              code = code.replace(/(from|import)(\s*['"])(\/child-vue3\/)/g, all => {
                return all.replace('/child-vue3/', configIPList['child-vue3'] + '/child-vue3/')
              })
            }
            return code
          }
        }
      ],
      'app-child2-vue3': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              // 这里做的本质就是代理，因为在本地中启动，主系统和子系统的IP一样，但端口不一样，所以转发一下
              code = code.replace(/(from|import)(\s*['"])(\/child2-vue3\/)/g, all => {
                return all.replace('/child2-vue3/', configIPList['child2-vue3'] + '/child2-vue3/')
              })
            }
            return code
          }
        }
      ],
    }
  }
})
createApp(App).use(router).use(pinia).mount('#app')
