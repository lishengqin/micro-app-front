import { defineStore } from 'pinia';
export const useUserStore = defineStore('User', {
  state: () => ({
    user: {
      name: '张三',
    },
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
  },
});
