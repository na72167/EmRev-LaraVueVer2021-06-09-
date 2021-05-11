<template>
        <!-- ヘッダー関係 -->
    <header id="index-top" class="header js-toggle-sp-menu-target">
        <div class="header__content-wrap">
        <!-- タイトル -->
        <h1 class="header__title" href="index.php"><a href="index.php" class="header__title-link">EmRev</a></h1>
            <!-- v-show・v-ifの使い分け -->
            <!-- 判断元がtrueかfalse・・・v-if -->
            <!-- それ以外の判断元・・・v-show -->
            <!-- もっと詳しく -->
            <!-- https://qiita.com/Aqua_ix/items/61eac355f3c24d7676e1 -->
            <!-- ステート内にログイン履歴があるかどうかどうかを元に表示判定をする。 -->
            <!-- ture -->
            <nav class="header__nav" v-if="isLogin">
              <li class="header__nav-list js-toggle-sp-menu">MENU</li>
              <li class="header__nav-list"><a href="./reviewRegister-cList.php">REVIEW REGISTRATION</a></li>
              <li class="header__nav-list" @click="logout">LOGOUT</li>
            </nav>

            <!-- false(正確にはそれ以外) -->
            <nav class="header__nav" v-else>
              <!-- ここでプロパティの切り替えを行う。そのプロパティを親コンポーネントに伝えてログイン・サインアップのコンポーネントを切り替える。 -->
              <li class="header__nav-list active-login-menu" @click="changeLoginProp">LOGIN</li>
              <li class="header__nav-list active-signup-menu" @click="changeSignUpProp">SIGNUP</li>
            </nav>
        </div>
    </header>

    <!-- propsと$emitでデータを引き渡す -->
    <!-- https://qiita.com/d0ne1s/items/f88ecd6aaa90c7bbc5d4 -->

</template>

<script>

//次はviexを使ってheader内ボタンから送信されるauth切り替えプロパティ
//をsignupコンポーネントとloginコンポーネントの切り替えをする処理を書く。
import { mapGetters } from "vuex";

export default {
    computed: {
      //ログイン情報確認getter
      ...mapGetters(["userLoginCheck"]),
    },
    data () {
      return {
        isLogin: this.userLoginCheck
      }
    },
    methods: {
        // propsと$emitでデータを引き渡す
        // https://qiita.com/d0ne1s/items/f88ecd6aaa90c7bbc5d4
        // ログインコンポーネント切り替え
        async changeLoginProp() {
          //actionのメソッドに変更
          await this.$store.dispatch('auth/changeLogin','login')
        },
        // ユーザー登録コンポーネント切り替え
        async changeSignUpProp() {
          //mutaion に直接 commit せず、action 経由で実行することを強く推奨する
          //https://uncle-javascript.com/vuex-actions
          await this.$store.dispatch('auth/changeSignUp','signUp');
        },
        // async/awate
        // async logout () {
        //   // authストアのresigterアクションを呼び出す
        //   // 多分dispatchの第一引数はstoreフォルダ内のファイルを探している。
        //   // 対象関数のPromiseの結果が返ってくるまで処理が一時停止される。
        //   await this.$store.dispatch('auth/logout')
        //   //ステート内を空にする為に第二引数にnullを指定する。
        //   context.commit('setUser', null)
        //   // ホームに移動する
        //   this.$router.push('/')
        // },
        unti() {
        // ホームに移動する
        this.$router.push('/myPage')
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
</style>
