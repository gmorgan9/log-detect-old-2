import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import DashboardPage from './components/Dashboard.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
