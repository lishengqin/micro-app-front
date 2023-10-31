import Layout from '@/views/layout/index.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: {
      name: 'about',
    },
  },

  {
    path: '/',
    name: '/root',
    component: Layout,
    children: [
      // 关于
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
      },
      // 微应用
      {
        path: '/vue3MicroApp/:page*',
        name: 'vue3MicroApp',
        component: () =>
          import(/* webpackChunkName: "vue3MicroApp" */ '../views/vue3MicroApp/index.vue'),
      },

      // 微应用
      {
        path: '/vue3MicroApp2/:page*',
        name: 'vue3MicroApp2',
        component: () =>
          import(/* webpackChunkName: "vue3MicroApp2" */ '../views/vue3MicroApp2/index.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
