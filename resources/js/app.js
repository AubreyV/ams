import router from './router';


import LoginPage from './Employees/pages/LoginPage'

require('./bootstrap')

const app = new Vue({
  el: '#app',
  router,
  components: {
    'login-page': LoginPage
  }
})
