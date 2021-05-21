import Vue from 'vue'
import { AccessControl } from './accessControl';
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
    path: '/MyPage/:id',
    name: 'MyPage',
    component: () =>
        import ('../views/MyPage'),
  },
  {
    path: '/PasswordReminder',
    name: 'PasswordReminder',
    component: () =>
        import ('../views/PasswordReminder'),
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  // TODO:historyModeの対策をする。
  // Vue.jsのhistory mode 404対策について
  // https://qiita.com/go6887/items/dcb7aa86ba6a006d4746
  // mode: 'history', // ★ 追加
  routes
})

// TODO:$to・$fromでアクセス元、アクセス先を取得後
// それが同一だった場合、読み込み予定のコンポーネントを再レンダリングさせる処理を書く。
// router.afterEach(AccessControl);

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
