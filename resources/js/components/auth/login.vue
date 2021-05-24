<template>

    <!-- TODO:認証周りのセキュリティ関係があまりよく分かっていないのでこれを参考に書き変えなどを行ってみる。
    SPAのログイン認証のベストプラクティスがわからなかったのでわりと網羅的に研究してみた〜JWT or Session どっち？〜
    https://qiita.com/Hiro-mi/items/18e00060a0f8654f49d6-->

    <!-- ログイン関係 -->
    <div class="login js-login-style hidden">

        <form class="login-formStyle" @submit.prevent="login">

            <h2 class="login-title">Login</h2>
            <div class="login-commonMsgArea">
                <!-- 接続エラー等のメッセージをここに出力させる。 -->
                <span class="#">
                    <strong>{{ Validation.loginCommonErrMsg }}</strong>
                </span>
            </div>

            <!-- メールアドレス入力欄 -->
            <div class="login-emailaddressField">
                <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
                <label class="#">
                    <!-- バリに引っかかった際にはerrクラスを付属させる。 -->
                    <input class="login-emailForm" :class="{ errInput: Validation.loginEmailErrMsg }" type="text" placeholder="Email" v-model="loginForm.email">
                    <div class="login-areaMsg">
                        <!-- エラーメッセージの出力 -->
                        <span class="#">
                            <strong>{{ Validation.loginEmailErrMsg }}</strong>
                        </span>
                    </div>
                </label>
            </div>

            <!-- パスワード入力 -->
            <div class="login-passwardField">
                <label class="#">
                    <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
                    <input class="login-passwordForm" :class="{ errInput: Validation.loginPasswordErrMsg }" type="password" placeholder="Password" v-model="loginForm.password">
                    <div class="login-areaMsg">
                      <!-- エラーメッセージの出力 -->
                        <span class="#">
                            <strong>{{ Validation.loginPasswordErrMsg }}</strong>
                        </span>
                    </div>
                </label>
            </div>

            <div class="login-registerBtnField">
              <!-- <input class="login-registerBtn" type="submit" value="ログイン"> -->
              <button class="login-registerBtnField"
                type="submit"
                :disabled="isSubmit"
              >
              {{ loginButton }}
              </button>
            </div>

        </form>

    </div>
</template>

<script>
// @は基本半角で
// 外部のjsファイルの読み込みが上手くいかないのでマジックナンバーやメソッドの切り分けは一旦保留。
// TODO:読み込み元ファイルを一度読み込み先ファイルと同階層に移さないとパスが読み込まれないエラーを解決する。
import Cookies from "js-cookie";
import axios from "axios";
import {validHalfNumAlp,validEmail,validEmailDup,validMaxLen,validMinLen} from "./utils/validate"
import {LOGIN_NUM} from "./utils/login-number-mappings"

// 【Vue】配列の追加・削除には注意が必要👮
// https://qiita.com/_masa_u/items/f9076777b044673eea2a
export default {
  data () {
    return {
      // 入力情報を保持
      loginForm: {
        email: null,
        password: null
      },
      // エラーメッセージを保持
      Validation:{
        loginEmailErrMsg: null,
        loginPasswordErrMsg: null,
        loginCommonErrMsg: null
      },
      // 各バリテーションの総合的な結果情報の管理
      // (上のValidation内の各プロパティ内にmsg内があるかどうかで判定してもいいけど今後TS導入予定なのでもしかすると
      //「扱う情報の型数を狭めて管理するプロパティの数を増やした方が型制御の恩恵を受けやすいのかな？」
      // と思ったので一旦この形で)
      loginFormResult: {
        emailResult: false,
        passwordResult: false
      },
      // 604800・・・一週間を秒換算したもの
      // TODO:ログイン有効期限が1ヶ月は長すぎる気がするので
      isSubmit: false,
      loginButton: '登録する',
      LoginUser: null,
      sesLimit: LOGIN_NUM.SES_LIMIT,
      debug: null,
    }
  },
  methods: {
    async login() {
      // そのうちこれを参考に書き直す
      // JavaScriptでconsole.log()を使うのはやめよう
      // https://qiita.com/baby-degu/items/1046763163bc794870ea
      // ぶっちゃけログインのバリテーションっているのかな〜？

      //Emailのバリデーション
      if (!this.loginForm.email) {
        // 空かどうかのバリテーション
        console.log("(login)メールアドレスの入力がありません");
        this.Validation.loginEmailErrMsg = "メールアドレスの入力がありません"

      } else if(!validEmail(this.loginForm.email)){
        // メールアドレスの形式確認
        console.log("(login)メールアドレスの形式が正しくありません");
        this.Validation.loginEmailErrMsg = "メールアドレスの形式が正しくありません"

      } else if(validHalfNumAlp(this.loginForm.email)){
        // 半角英数字のバリテーション
        console.log("(login)メールアドレスを半角英数で入力してください");
        this.Validation.loginEmailErrMsg = "メールアドレスを半角英数で入力してください"

      } else if(await !validEmailDup(this.loginForm.email)){
        //メールアドレスが存在するか確認のバリテーション
        console.log("(login)メールアドレスが登録されていません");
        this.Validation.loginEmailErrMsg = "メールアドレスが登録されていません"
      }
      //TODO:ここの部分は呼び出し先ファイル関係に問題があるためか、未定義のプロパティ:lengthを呼び出している
      //というエラーが出ている
      // else if(validMinLen(this.loginForm.loginEmail,LOGIN_NUM.LOGIN_EMAIL_MAXLEN)){
      //   //最大文字数のバリテーション
      //   console.log("(login)メールアドレスを15文字以内にしてください");
      //   this.Validation.loginEmailErrMsg = "メールアドレスは15文字以内にしてください"

      // } else if(validMinLen(this.loginForm.loginEmail,LOGIN_NUM.LOGIN_EMAIL_MINLEN)){
      //   //最小文字数のバリテーション
      //   console.log("(login)メールアドレスを15文字以内にしてください");
      //   this.Validation.loginEmailErrMsg = "メールアドレスは15文字以内にしてください"

      // }
      else {
        //バリテーションOKな場合
        console.log("(login)EmailバリテーションOKです");
        this.loginFormResult.emailResult = true;
      }

      //パスワードのバリデーション
      if (!this.loginForm.password) {
        //空文字チェック
        console.log("(login)パスワードを入力してください");
        this.Validation.PasswordErrMsg = "パスワードを入力してください"
      } else if(!validHalfNumAlp(this.loginForm.password)){
        //半角英数字チェック
        console.log("(login)パスワードは半角英数字で入力してください");
        this.Validation.PasswordErrMsg = "パスワードは半角英数字で入力してください"
      }
      //TODO:ここの部分は呼び出し先ファイル関係に問題があるためか、未定義のプロパティ:lengthを呼び出している
      //というエラーが出ている
      // else if(validMaxLen(this.loginForm.password,LOGIN_NUM.LOGIN_PASSWORD_MAXLEN)){
      //   //最大文字数チェック
      //   console.log("(login)パスワードは15文字以内で入力してください");
      //   this.Validation.PasswordErrMsg = "パスワードは15文字以内で入力してください"
      // } else if(validMinLen(this.loginForm.password,LOGIN_NUM.LOGIN_PASSWORD_MINLEN)){
      //   //最小文字数チェック
      //   console.log("(login)パスワードは5文字以上で入力してください");
      //   this.Validation.PasswordErrMsg = "パスワードは5文字以上入力してください"
      // } else if(this.loginForm.password === this.loginForm.password_confirmation){
      //   //確認用パスワードと合致するかチェック
      //   console.log("(login)確認用パスワードと一致しません");
      //   this.Validation.PasswordErrMsg = "確認用パスワードと一致しません"
      // }
      else {
        console.log("(login)PasswordバリテーションOKです");
        this.loginFormResult.passwordResult = true;
      }

      if(this.loginFormResult.emailResult === true && this.loginFormResult.passwordResult === true){
        console.log("ログイン用バリテーションOKです。");
        try {
            this.isSubmit = true;
            this.submitButton = '登録中です';
          if (this.loginFormResult.emailResult === false && this.loginFormResult.passwordResult === false){
            console.log("登録内容にエラーがありました。");
            this.Validation.loginCommonErrMsg = '登録内容にエラーがありました。';
            this.isSubmit = false;
            this.submitButton = "登録";
            return false;
          }else if(this.loginFormResult.emailResult === true && this.loginFormResult.passwordResult === true){
            // ロード画面実装処理
            // this.$store.dispatch("app/setLoading");
            console.log("ログイン処理に入りました。");
            this.LoginUser = await axios.post('/api/login',this.loginForm);
            console.log(this.LoginUser);

            if(this.LoginUser){
              // プロパティ内のデータの取得が出来ない時はVueDevToolでデータの階層を確認する。
              // 挿入したデータは1ヶ月で削除
              Cookies.set('user_id',this.LoginUser.data.id, {expires: 7});
              Cookies.set('roll',this.LoginUser.data.roll, {expires: 7});
              // Cookieにログイン時刻とIDを挿入。
              Cookies.set('login_date', Date.now(), {expires: 7});
              Cookies.set('login_limit',Date.now()+this.sesLimit, {expires: 7});

              // バリテーション結果の初期化
              this.loginForm = "";
              this.loginFormResult.emailResult = false;
              this.loginFormResult.passwordResult = false;
              // マイページへ飛ばすパスを書く。
              this.$router.push(`/mypage/${Cookies.get('user_id')}`);
            }else if(!this.LoginUser){
              this.Validation.loginCommonErrMsg = 'メールアドレスまたはパスワードが違います';
              return false;
            }
          }
        } catch (e) {
          console.log("ログイン処理中に例外的エラーが発生しました。");
          this.Validation.loginCommonErrMsg = '接続に失敗しました。'
          this.loginFormResult.emailResult = false;
          this.loginFormResult.passwordResult = false;
        } finally {
          // 必ず実行する処理の記述(try..catch..finally)
          // https://www.javadrive.jp/start/exception/index3.html
          // ローディング画面の終了
          this.isSubmitting = false;
          this.isSubmit = false;
        }
      }
    }
  }
}
</script>

<style lang="scss" scope>
  .login{
    height: 350px;
    width: 400px;
    padding: 20px 0;
    position: relative;
    left: 10px;
    background-color: #fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 1;
    transition: all .5s;
    &-title{
      text-align: center;
      font-size: 22px;
      margin: 10px 0;
      height: 30px;
    }
    &-formStyle{
      height: 300px;
      width: 320px;
      margin: 0 40px;
      position: absolute;
    }
    &-emailaddressField{
      height: 57px;
    }
    &-emailForm{
      border: 0;
      border-bottom: 1px solid #b4becb;
      width: 100%;
      padding: 3px;
      font-size: 16px;
      position: absolute;
      top:97px;
      &:focus{
        outline: none;
        border-bottom: 1px solid #047aed;
      }
    }
    &-passwardField{
      height: 57px;
    }
    &-passwordForm{
      border: 0;
      border-bottom: 1px solid #b4becb;
      width: 100%;
      padding: 3px;
      font-size: 16px;
      position: absolute;
      top:177px;
      &:focus{
        outline: none;
        border-bottom: 1px solid #047aed;
      }
    }
    &-registerBtnField{
      height: 57px;
      padding: 0 105px;
    }
    &-registerBtn{
      position: absolute;
      top:250px;
      padding: 10px 30px;
      background-color: #047aed;
      border: none;
      border-radius: 5px;
      color: #fff;
    }
  }
</style>
