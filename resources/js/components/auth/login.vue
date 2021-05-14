<template>
    <!-- ログイン関係 -->
    <div class="login js-login-style hidden">

        <form method="POST" class="login-formStyle" @submit.prevent="login">

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
                    <input class="login-emailForm" :class="{ errInput: Validation.loginEmailErrMsg }" v-model="loginForm.email">
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
                    <input class="login-passwordForm" :class="{ errInput: Validation.loginPasswordErrMsg }" v-model="loginForm.password">
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
import {validHalfNumAlp,validEmail,validEmailDup,validMaxLen,validMixLen} from "./utils/validate"
import {LOGIN_NUM} from "./utils/login-number-mappings"

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
        passwordResult: false,
        password_confirmationResult: false
      },
      //連続で登録処理をさせない用
      isSubmit: false,
      loginButton: '登録する',
      RegistUser: null,
      sesLimit: 3600,
      debug: null,
    }
  },
  methods: {
    login: async function () {
      // そのうちこれを参考に書き直す
      // JavaScriptでconsole.log()を使うのはやめよう
      // https://qiita.com/baby-degu/items/1046763163bc794870ea
      // ぶっちゃけログインのバリテーションっているのかな〜？signUp

        //Emailのバリデーション
        if (!this.loginForm.email) {
          // 空かどうかのバリテーション
          console.log("(login)メールアドレスの入力がありません");
          this.Validation.loginEmailErrMsg = "メールアドレスの入力がありません"

        } else if(!validEmail(this.loginForm.loginEmail)){
          // メールアドレスの形式確認
          console.log("(login)メールアドレスを半角英数で入力してください");
          this.Validation.loginEmailErrMsg = "メールアドレスを半角英数で入力してください"

        } else if(validHalfNumAlp(this.loginForm.loginEmail)){
          // 半角英数字のバリテーション
        console.log("(login)メールアドレスを半角英数で入力してください");
        this.Validation.loginEmailErrMsg = "メールアドレスを半角英数で入力してください"

          // 次する事 バリの記入の続き。ログインメソッドの記入続き

        } else if(length(this.loginForm.loginEmail) > 15){
          //最大文字数のバリテーション
          console.log("(login)メールアドレスを15文字以内にしてください");
          this.Validation.loginEmailErrMsg = "メールアドレスは15文字以内にしてください"

        } else if(length(this.loginForm.loginEmail) > 15){
          //最小文字数のバリテーション
          console.log("(login)メールアドレスを15文字以内にしてください");
          this.Validation.loginEmailErrMsg = "メールアドレスは15文字以内にしてください"

        } else {
          //バリテーションOKな場合
          console.log("(login)バリテーションOKです");
          this.loginFormResult.emailResult = true;
        }

        //パスワードのバリデーション
        if (!this.loginForm.password) {
          //空文字チェック
          console.log("(login)パスワードを入力してください");
          this.Validation.PasswordErrMsg = "パスワードを入力してください"
        } else if(this.loginForm.loginId.match(/^[0-9a-zA-Z]*$/)){
          //半角英数字チェック
          console.log("(login)パスワードは半角英数字で入力してください");
          this.Validation.PasswordErrMsg = "パスワードは半角英数字で入力してください"
        } else if(length(this.loginForm.password) > 15){
          //最大文字数チェック
          console.log("(login)パスワードは15文字以内で入力してください");
          this.Validation.PasswordErrMsg = "パスワードは15文字以内で入力してください"
        } else if(length(this.loginForm.password) < 5){
          //最小文字数チェック
          console.log("(login)パスワードは5文字以上で入力してください");
          this.Validation.PasswordErrMsg = "パスワードは5文字以上入力してください"
        } else if(this.loginForm.password === this.loginForm.password_confirmation){
          //最小文字数チェック
          console.log("(login)確認用パスワードと一致しません");
          this.Validation.PasswordErrMsg = "確認用パスワードと一致しません"
        } else {
          //バリテーションOK
          this.loginFormResult.passwordResult = true;
        }

        if(this.loginFormResult.emailResult === true && this.loginFormResult.passwordResult === true && this.loginFormResult.password_confirmationResult === true){
          console.log("ログイン用バリテーションOKです。");
          try {
            //動作確認待ち
            console.log("ログイン処理に入りました。");
            console.log(this.loginForm);
            //登録しているかの確認
            //想定している処理の流れ・・・フォーム内情報をdispachを経由してvuex->laravelへリクエスト。
            //そのレスポンス内容を元に共通メッセージを出力させる。
            //上の登録処理から返ってきた結果をgetterで取得。それを元にメッセージの挿入を判断する。
            // if () {
            //   console.log("(login)登録情報がありませんでした。");
            //   this.Validation.loginCommonErrMsg = "メールアドレスまたはパスワードが違います"
            // }
            return true;
          } catch (e) {
            console.log("ログイン処理中に例外的エラーが発生しました。");
            //そのレスポンス内容を元に共通メッセージを出力させる。
            this.Validation.loginCommonErrMsg = "エラーが発生しました。しばらく経ってからやり直してください。"
            return false;
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
