import Vue from 'vue';
import routes from './router';
import LoginPage from './Employees/pages/LoginPage'
import ApiService from './common/api.service';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import { CHECK_AUTH } from './store/actions.type'

Vue.use(Vuex)
Vue.use(VueRouter)

import { initialize } from './common/checkAuth';
import store from './store';

const router = new VueRouter({
    routes,
    mode: 'history'
});

require('./bootstrap')
ApiService.init();
initialize(store, router);

const app = new Vue({
  el: '#app',
  router,
  store,
  mounted(){
	  store.dispatch(CHECK_AUTH)
  }
})
