import Vue from 'vue';
import Router from 'vue-router';

// Import your components
import Login from './components/Login.vue';
import DashboardPage from './components/Dashboard.vue';

Vue.use(Router);

export default new Router({
  routes: [
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
  ]
});


// const router = new VueRouter({
//   routes
// });

// export default router;
