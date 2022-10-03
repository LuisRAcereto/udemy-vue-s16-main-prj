import authActions from './actions.js';
import authMutations from './mutations';
import authGetters from './getters.js';

export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
