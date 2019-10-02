import VueRouter from 'vue-router';

// Template Components
import NavBar from './BaseComponents/Navbar';
import SideBar from './BaseComponents/SideBar';

// Employee Module
import App from './Employees/App';
import Dashboard from './Employees/pages/Dashboard';

let routes = [
  {
    path: '/employee',
    // meta: {
    //   requiresAuth: true,
    //   guard: 'admin'
    // },
    components: {
      default:  App,
      sideBar: SideBar,
      navBar: NavBar,
    },
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
    ]
  }
];


let router = new VueRouter({
  routes,
  mode: 'history'
});

window.router = router;
export default router;