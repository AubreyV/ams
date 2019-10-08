import ApiService from "../common/api.service";
import JwtService from "../common/jwt.service";
import {
  LOGIN,
  CHECK_AUTH,
  LOGOUT
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  errMsg(state) {
    return state.errors;
  },
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise((resolve ,reject) => {
      ApiService.post("login", credentials )
        .then(({data}) => {
          context.commit(SET_AUTH, data.user);
          JwtService.setToken(data.token)
          ApiService.setHeader()
          resolve()
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data);
          reject(response.data)
        });
    });
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("user")
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
        })
        .catch(({ response }) => {
          JwtService.destroyToken();
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },

  [LOGOUT](context){
    return new Promise(resolve => {
      ApiService.post('logout')
      .then(({ data }) => {
          context.commit(PURGE_AUTH)
          JwtService.destroyToken();
          resolve()
        }).catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        })
    })
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
  },

  [PURGE_AUTH](state){
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
