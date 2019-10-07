export function initialize(store, router) {
  router.beforeEach((to, from, next) => {
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      const isAuthenticated = store.getters.isAuthenticated;
      
      if(requiresAuth && !isAuthenticated) {
          router.push('/login');
      } else if(to.path == '/login' && isAuthenticated) {
          router.push('/employee/dashboard');
      } else {
          next();
      }
  });
}