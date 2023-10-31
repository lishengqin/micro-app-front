import { createRouter, createWebHashHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';
const one = defineAsyncComponent(() => import('../views/one/index.vue'));
const two = defineAsyncComponent(() => import('../views/two/index.vue'));
const routes = [
  {
    path: '/',
    redirect: {
      name: 'one',
    },
  },

  {
    path: '/vue3MicroApp/one',
    name: 'one',
    component: one,
    // component: () => import(/* webpackChunkName: "one" */ '../views/one/index.vue'),
  },
  {
    path: '/vue3MicroApp/two',
    name: 'two',
    component: two,
    // component: () => import(/* webpackChunkName: "two" */ '../views/two/index.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
