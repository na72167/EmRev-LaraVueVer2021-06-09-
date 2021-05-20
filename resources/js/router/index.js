import Vue from 'vue'
import { AuthFilter } from './auth';
import VueRouter from 'vue-router'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
// vue-router 現在のパスによってスタイルを変更する
// https://zukucode.com/2017/05/vue-router-style.html
// vue-routerチートシート
// https://qiita.com/morrr/items/873ea25a806167c8d426
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    // 対象のページが無い時は
    path: '/404',
    name: 'NotFound',
    component: () =>
        import ('../views/errors/NotFound'),
  },
  {
    path: '/',
    name: 'Home',
    component: () =>
        import ('../views/Home'),
  },
  {
    path: '/mypage/:id',
    name: 'MyPage',
    component: () =>
        import ('../views/MyPage'),
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history', // ★ 追加
  routes
})

//【Vue.js】全ての画面で実行したい処理の実装方法
// https://hafilog.com/aftereach
router.afterEach(AuthFilter);
// 【Vue.js】ナビゲーションガードについて
// https://tsudoi.org/weblog/5738/
// ローディングのアニメーションに使う
// router.beforeResolve();

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
