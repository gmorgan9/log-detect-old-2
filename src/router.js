// import { createRouter, createWebHistory } from 'vue-router';
// import LoginPage from './components/LoginPage.vue';
// import DashboardPage from './components/Dashboard.vue';

// const routes = [
//   {
//     path: '/login',
//     name: 'Login',
//     component: LoginPage
//   },
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: DashboardPage
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });

// export default router;


import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginPage from './components/LoginPage.vue';
import DashboardPage from './components/Dashboard.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage
    }
  ]
});

export default router;
