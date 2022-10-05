import authActions from './actions.js';
import authMutations from './mutations';
import authGetters from './getters.js';

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
      firebaseKey: process.env.VUE_APP_FIREBASEKEY,
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
