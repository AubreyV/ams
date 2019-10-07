import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export const getToken = () => {
	var token = VueCookies.get('auth-token');

	return token ? 'Bearer '+ token : null;
};

export const destroyToken = () => {
	VueCookies.remove('auth-token')
};

export const setToken = token => {
	VueCookies.set('auth-token',token,60 * 60 * 24)
};

export default { getToken, destroyToken, setToken };
