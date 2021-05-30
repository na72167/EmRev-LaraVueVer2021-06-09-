//ユーザー登録やログイン関係など
import Cookies from "js-cookie";
import axios from "axios";
import { RESPONSE_STATE } from '../utils/ResponseState-mappings'

const state = {
  companySearchState: "",
  //検索時参照するステート
  searchQueries: "",
}

const getters = {

}

const mutations = {
  //検索用のプロパティを初期化
  CLEAR_SEARCH_QUERIES: (state) => {
    state.searchQueries = "";
  },
}

const actions = {
  // 検索時に入れた文字列の初期化
  clearSearchQueries({ commit }, queries) {
    commit('CLEAR_SEARCH_QUERIES');
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
