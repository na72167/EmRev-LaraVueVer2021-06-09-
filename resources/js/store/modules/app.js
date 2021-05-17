// 全体に共通する処理など
const state = {
  loading: true,
};

const getters = {
  loading: state => state.loading,
};

const mutations = {
    SET_LOADING: (state) => {
      state.loading = true;
    },
    CLEAR_LOADING: (state) => {
      state.loading = false;
    },
};

const actions = {
  setLoading({ commit }) {
    commit("SET_LOADING");
  },
  clearLoading({ commit }) {
    commit("CLEAR_LOADING");
  },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
