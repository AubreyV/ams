import LoginPage from './Employees/pages/LoginPage'

require('./bootstrap')

const app = new Vue({
  el: '#app',
  components: {
    'login-page': LoginPage
  }
})
