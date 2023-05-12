import Vue from 'vue';
import VueRouter from 'vue-router';

// Import your components for different routes
import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard
  }
];

const router = new VueRouter({
  routes
});

export default router;
