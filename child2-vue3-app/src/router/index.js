import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: {
      name: 'one',
    },
  },

  {
    path: '/vue3MicroApp2/one',
    name: 'one',
    component: () => import(/* webpackChunkName: "one" */ '../views/one/index.vue'),
  },
  {
    path: '/vue3MicroApp2/two',
    name: 'two',
    component: () => import(/* webpackChunkName: "two" */ '../views/two/index.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
