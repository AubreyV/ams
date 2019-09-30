require('./bootstrap');

import LoginPage from './Employees/pages/LoginPage';

const app = new Vue({
    el: '#app',
    components: {
        'login-page': LoginPage,
    }
});