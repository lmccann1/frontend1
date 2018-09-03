import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import axios from 'axios';
import router from './router';
import './registerServiceWorker';
import App from './App.vue';


window.axios = axios;

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');

