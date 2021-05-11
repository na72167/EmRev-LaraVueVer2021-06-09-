import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from "js-cookie";
import auth from './modules/auth';
import app from './modules/app';
import error from './modules/error';

// TODO: camelCaseライブラリの影響でテキスト内の一部がキャメルケースになっているかもしれないので
// パス周りで影響が出るかも。
// 自分がよく使う npm package
// https://hapicode.com/javascript/npmjs.html

Vue.use(Vuex)
Vue.use(Cookies)

// TODO:Vuexに型付けしたい。
// Vue/Vuexに静的に型を付ける
// https://joe-re.hatenablog.com/entry/2017/07/26/101805

// Webpackでフォルダ内の全ファイルを一気にrequireする
// https://qiita.com/jkr_2255/items/d23e66323857d3189a00
// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', false, /\.js$/);

// // (コピペ元コメント翻訳)import app from './modules/app'` は必要ありません。
// // モジュールファイルからすべての vuex モジュールを自動的に要求します。
// import camelCase from 'camelcase';
// // TODO: ここのmodules下のフォルダ読み込み処理があまり良く分かってない。
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = camelCase(modulePath.replace(/^\.\/(.*)\.\w+$/, '$1'));
//   const value = modulesFiles(modulePath);
//   modules[moduleName] = value.default;
//   return modules;
// }, {});

//vueの標準機能に関する物を追加で使いたい場合はここに記入する。
const store = new Vuex.Store({
  modules: {
    auth,
    app,
    error
  }
})

export default store
