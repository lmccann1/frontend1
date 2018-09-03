import Vue from 'vue';
import Router from 'vue-router';
import DashBoard from './components/DashBoard.vue';
import Account from './components/Account.vue';
import GetAccount from './components/GetAccount.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard,
    },
    {
      path: '/account',
      name: 'account',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Account,
      // component: () => import(/* webpackChunkName: "about" */ './view/Dashboard.vue'),
    },
    {
      path: '/getaccount',
      name: 'getaccount',
      component: GetAccount,
    },
    {
      path: '/home',
      name: 'home',
      component: DashBoard,
    },
  ],
});
