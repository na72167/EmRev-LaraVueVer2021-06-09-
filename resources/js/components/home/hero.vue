<template>
    <section class="hero">
        <!-- テキスト関係 -->
        <div class="hero__content">
            <div class="hero__text-wrap">
                <h1 class="hero__text-catchTheam">
                Easier Deployment
                </h1>
                <div class="hero__text-about">
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサン
                </div>
                <a class="hero__text-aboutLink" href="#index-about">このアプリについて</a>
            </div>
            <!-- TODO:ログイン機能とログアウト機能が完成した後、ifの条件をイコールに変更する。 -->
            <div class="hero__signup-loginWrap"
              v-if="!user"
            >
              <!-- TODO: v-bind:classを使ってdateに依存したスタイル(トランジションクラス使用)の設定を行う。 -->
              <!-- [Vue.js メモ]条件に応じてトランジション変更したい場合 -->
              <!-- https://qiita.com/riversun/items/a233bdf589c78ea9b149 -->
              <!-- 【JS】Vueの:classの書き方3通り -->
              <!-- https://jsnotice.com/posts/2019-06-29/ -->
              <!-- Vue.jsでいい感じのアニメーションを作りたい -->
              <!-- https://qiita.com/b0ntenmaru/items/ba25ecec99820faddd8e#%E8%A4%87%E6%95%B0%E8%A6%81%E7%B4%A0%E3%81%AE%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B8%E3%82%B7%E3%83%A7%E3%83%B3 -->
              <!-- 会社情報登録ページ画面の一覧表示に使うといいかも -->
              <!-- https://qiita.com/gyarasu/items/eadc0690037609c041e3 -->
              <!-- Eslint-plugin-vue: 「v-model」ディレクティブはでサポートされていません -->
              <!-- https://bleepcoder.com/ja/eslint-plugin-vue/311235046/v-model-directives-aren-t-supported-on-div-elements -->
              <!-- Vue.jsのv-modelを正しく使う -->
              <!-- https://qiita.com/simezi9/items/c27d69f17d2d08722b3a -->
                <SignUp
                  v-if="authComponentsState === 'signUp'"
                />
                <Login
                  v-if="authComponentsState === 'login'"
                />
            </div>
        </div>
    </section>
</template>

<script>

// Cannot find module 'モジュールファイル名'の原因
// 1.タイポ
// 2.対象ファイルに何かしらのエラーが出ており,呼び込み元のファイルからモジュールと認識されていない(?)
// app.js:203 Uncaught ReferenceError:の原因
// 1.エイリアス名とファイル名が違う(passが../auth/SignUp なのにエイリアス名がsignUp等)
// あとvueのコンポーネント名は大文字が基本っぽい
// mapGettersとmapStatesの使い分け・・・読み込み時のみstateを参照したい->mapGetters
// リアルタイムでstateを参照したい->mapStates
// mapGettersで書く時とmapStateで書く時ではパスの書き方が違う?
// authComponentsState 'auth/authComponentsState'

import Cookies from "js-cookie";
import { mapState } from "vuex";
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';

export default {
  components: {
    SignUp,
    Login
  },
  computed: {
    ...mapState({
    //mapStateを通してstate内データを扱いたい場合は以下の様に書く。
    authComponentsState: state => state.auth.authComponentsState,
    user: state => state.users.user
    })
  }
}
</script>

<style lang="scss" scope>
    .hero{
    height: 400px;
    width: 100%;
    background-color: #047aed;
    position: relative;
    &::before{
        //ヒーローバナーの模様部分(この辺場当たり的にスタイルを当ててしまったのであとでキレイにする。)z-index
        content: "";
        height:100px;
        width: 100%;
        background-color: #fff;
        transform: skewY(-3deg);
        position: absolute;
        bottom: -70px;
    }

    //=============================================================
    //コンテンツ全体
    //=============================================================

    &__content{
        height: 100%;
        max-width: 1100px;
        margin:0 auto;
        //基本的にはoverflow:hidden;で親要素からはみ出た際に早めに気づける様に
        //するがここのみレイアウトの都合上、overflow:visible;を使う。
        overflow: visible;
    }
    &__text-wrap{
        height: 250px;
        width: 500px;
        margin-right: 100px;
        color:#fff;
        float: left;
        position: relative;
        top: 100px;
        text-align: center;
    }
    &__text-catchTheam{
        font-size: 40px;
        font-weight: 300;
        line-height: 1.2;
        margin:20px 0;
    }
    &__text-aboutLink{
        border: 1px #fff solid;
        border-radius: 5px;
        padding: 10px 30px;
        position: relative;
        top: 20px;
        text-decoration:none;
        &:link{
        color:#fff;
        }
        &:visited{
        color:#fff;
        }
        &:hover{
        transition: all .5s;
        background-color: #fff;
        color: #047aed;
        }
    }
        // //jsアニメーション用クラス
        // .hidden{
        //     transform: translateY(130%);
        // }
    }
</style>
