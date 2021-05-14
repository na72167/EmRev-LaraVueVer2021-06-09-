import Vue from 'vue'
import VueRouter from 'vue-router'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/404',
    name: 'NotFound',
    component: () =>
        import ('./views/errors/NotFound'),
  },
  {
    path: '/',
    name: 'Home',
    component: () =>
        import ('./views/Home'),
  },
  {
    path: '/mypage/:id',
    name: 'MyPage',
    component: () =>
        import ('./views/MyPage'),
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history', // ★ 追加
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
