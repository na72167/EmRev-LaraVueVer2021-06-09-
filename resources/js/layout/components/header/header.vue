<template>
        <!-- ヘッダー関係 -->
    <header id="index-top" class="header js-toggle-sp-menu-target">
      <div class="header__content-wrap">
        <!-- タイトル -->
        <h1 class="header__title" href="index.php"><a href="index.php" class="header__title-link">EmRev</a></h1>
        <!-- v-show・v-ifの使い分け -->
        <!-- https://qiita.com/Aqua_ix/items/61eac355f3c24d7676e1 -->

        <div v-if="user">
          <nav class="header__nav">
            <li class="header__nav-list" @click="switchMenuState">MENU</li>
            <router-link to="/SelectReviewCompany" class="menuAbout__itemWrap-lineNone">
              <li class="header__nav-list">REVIEW POSTING</li>
            </router-link>
            <li class="header__nav-list" @click="logout">LOGOUT</li>
          </nav>
            <!-- ここの:classはメニュー内容のアニメーション関係のもの -->
            <AboutMenu
              :class="aboutMenuState"
            />
        </div>

        <nav class="header__nav" v-else-if="!user">
          <li class="header__nav-list active-login-menu" @click="changeLoginProp">LOGIN</li>
          <li class="header__nav-list active-signup-menu" @click="changeSignUpProp">SIGNUP</li>
        </nav>

        </div>
      </div>
    </header>

    <!-- propsと$emitでデータを引き渡す -->
    <!-- https://qiita.com/d0ne1s/items/f88ecd6aaa90c7bbc5d4 -->

</template>

<script>
import Cookies from "js-cookie";
import { mapState } from "vuex";
import AboutMenu from './AboutMenu';

export default {
  components: {
    AboutMenu
  },
  computed: {
    ...mapState({
      user: state => state.users.user,
      aboutMenuState: state => state.app.aboutMenuState
    }),
  },
  methods: {
    // propsと$emitでデータを引き渡す
    // https://qiita.com/d0ne1s/items/f88ecd6aaa90c7bbc5d4
    // ログインコンポーネント切り替え
    async changeLoginProp() {
      // actionのメソッドに変更
      await this.$store.dispatch('auth/changeLogin','login')
    },
    // ユーザー登録コンポーネント切り替え
    async changeSignUpProp() {
      // mutaion に直接 commit せず、action 経由で実行することを強く推奨する
      // https://uncle-javascript.com/vuex-actions
      await this.$store.dispatch('auth/changeSignUp','signUp');
    },
    logout () {
      //TODO:空の配列を外部ファイルに用意するか検討する。
      Cookies.remove('user_id');
      Cookies.remove('roll');
      Cookies.remove('login_date');
      Cookies.remove('login_limit');
      // ホームに移動する
      // 指定パスと同一ページで遷移をすると再レンダリングされないので、
      // App.vueファイル内でページ遷移を検知後専用メソッドを発火させる処理を書いている。
      this.$router.push('/', () => {});
    },
    async switchMenuState() {
      // 'openAboutMenu'は動的クラスの要素になる。
      this.switchingMenuState = this.aboutMenuState;
      this.switchingMenuState = this.switchingMenuState === false ? 'openAboutMenu' : false;
      await this.$store.dispatch('app/switchMenuComponent',this.switchingMenuState);
    }
  },
}
</script>

<style lang="scss" scope>
    .header{
        height: 70px;
        background-color: #047aed;
        overflow: hidden;
        width: 100%;

        &__content-wrap{
            height: 100%;
            margin: 0 auto;
            max-width: 1100px;
        }
        &__title{
            display: inline;
            font-size: 2em;
            position: relative;
            color:#fff;
            top: calc(70px / 2 - 51px / 2);
            margin-left: 67px;
            font-weight: 300;
        }
        &__title-link{
            color:#fff;
            text-decoration: none;
            &:link{
            color:#fff;
            }
            &:visited{
            color:#fff;
            }
        }

        &__nav{
            float: right;
            position: relative;
            margin-right: 67px;
            top: calc(70px / 2 - 25px / 2);
            &-list{
            list-style-type: none;
            float: left;
            margin-right: 10px;
            color:#fff;
            &:last-child{
                margin-right: 0px;
            }
            &:hover {
                border-bottom: 2px #fff solid;
            }
            }
        }
    }
    .openAboutMenu{
      transition: all .5s;
      transform: translateX(100%);
    }
</style>
