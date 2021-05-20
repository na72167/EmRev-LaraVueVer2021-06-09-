// 全体に共通する処理など
const state = {
  loading: true,
  aboutMenuState: false
};

const getters = {
  loading: state => state.loading,
};

// booleanを反転（トグル）させる方法4選
// https://www.deep-rain.com/programming/tips/633
const mutations = {
  SET_LOADING: (state) => {
    state.loading = true;
  },
  CLEAR_LOADING: (state) => {
    state.loading = false;
  },
  SWITCH_MENU: (state,classAttribute) => {
    state.aboutMenuState = classAttribute;
  }
};

const actions = {
  setLoading(context) {
    context.commit("SET_LOADING");
  },
  clearLoading(context) {
    context.commit("CLEAR_LOADING");
  },
  // TODO:第二引数の名前なんかいい感じにする。
  switchMenuComponent(context,classAttribute) {
    context.commit("SWITCH_MENU",classAttribute);
  },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
