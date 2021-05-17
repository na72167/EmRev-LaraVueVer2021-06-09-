<template>
<!-- 会員登録関係 -->
    <div class="signup js-signup-style">

    <!-- postメソッド・uriに/register持ちのルーティングにアクセス -->
    <form class="signup-formStyle" @submit.prevent="signUp">

        <h2 class="signup-title">SignUp</h2>
        <div class="signup-commonMsgArea">
            <!-- 接続エラー等のメッセージをここに出力させる。 -->
            <span class="#">
                <strong>{{ Validation.signUpCommonErrMsg }}</strong>
            </span>
        </div>

        <!-- メールアドレス入力欄 -->
        <div class="signup-emailaddressField">
            <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
            <label class="#">
                <!-- バリに引っかかった際にはerrクラスを付属させる。 -->
                <!-- v-model・・・入力情報の紐付けと管理 -->
                <!-- エラーメッセージが存在した場合,inputフォームにエラー時のスタイルが適用される様になる。 -->
                <input class="signup-emailForm" :class="{ errInput: Validation.signUpEmailErrMsg }" type="text" placeholder="Email" v-model="signUpForm.email">
                <div class="signup-areaMsg">
                    <!-- エラーメッセージの出力 -->
                    <span class="#">
                        <strong>{{ Validation.signUpEmailErrMsg }}</strong>
                    </span>
                </div>
            </label>
        </div>

        <!-- パスワード入力 -->
        <div class="signup-passwardField">
          <label class="#">
              <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
              <input class="signup-passwordForm" :class="{ errInput: Validation.signUpPasswordErrMsg }" type="password" placeholder="Password" v-model="signUpForm.password">
              <div class="signup-areaMsg">
                  <!-- エラーメッセージの出力 -->
                  <span class="#">
                      <strong>{{ Validation.signUpPasswordErrMsg }}</strong>
                  </span>
              </div>
          </label>
        </div>

        <!-- 確認用パスワード入力 -->
        <div class="signup-confirmationPasswardField">
          <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 register-->
          <label class="#">
              <input class="signup-passwordConfirmationForm" :class="{ errInput: Validation.signUpPasswordConfirmationErrMsg }" type="password" placeholder="Confirmation Password" v-model="signUpForm.password_confirmation">
          </label>
        </div>

        <div class="signup-registerBtnField">
          <!-- <input
          class="signup-registerBtn"
          type="submit"
          value=""
          :disabled="isSubmit"
          > -->
          <button class="signup-registerBtnField"
            type="submit"
            :disabled="isSubmit"
          >
          {{ signUpButton }}
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
import {SIGNUP_NUM} from "./utils/signUp-number-mappings"

export default {
    data () {
      return {
        // 入力情報を保持
        signUpForm: {
          email: null,
          password: null,
          password_confirmation: null
        },
        // エラーメッセージを保持
        Validation:{
            signUpEmailErrMsg: null,
            signUpPasswordErrMsg: null,
            signUpPasswordConfirmationErrMsg: null,
            signUpCommonErrMsg: null
        },
        // 各バリテーションの総合的な結果情報の管理
        // (上のValidation内の各プロパティ内にmsgがあるかどうかで判定してもいいけど今後TS導入予定なのでもしかすると
        //「扱う情報の型数を狭めて管理するプロパティの数を増やした方が型制御の恩恵を受けやすいのかな？」
        // と思ったので一旦この形で)
        signUpFormResult: {
          emailResult: false,
          passwordResult: false,
          password_confirmationResult: false
        },
        //連続で登録処理をさせない用
        isSubmit: false,
        signUpButton: '登録する',
        RegistUser: null,
        sesLimit: 3600,
        debug: null,
      }
    },
    methods: {
      // 【JavaScript】varとfunction"文"は使わずにletとconstを使って欲しい
      // https://qiita.com/mejileben/items/b8502173216aebae8d36
      // :rulesがvuetify独自のタグかどうか調べる。
      // https://qiita.com/tekunikaruza_jp/items/0a68d86084d961d632ac
      //バリ関数は後で纏める。
      // jQueryやJavaScriptでvar_dump()したいときは、console.log(hoge)してChromeのコンソールでみればいいらしい
      // https://blog.nakachon.com/2012/04/10/jquery%E3%82%84javascript%E3%81%A7var_dump%E3%81%97%E3%81%9F%E3%81%84%E3%81%A8%E3%81%8D%E3%81%AF%E3%80%81console-loghoge%E3%81%97%E3%81%A6chrome%E3%81%AE%E3%82%B3%E3%83%B3%E3%82%BD%E3%83%BC/
          async signUp() {
            //Emailのバリデーション
            if (!this.signUpForm.email) {
              //空かどうかのバリテーション
              console.log("(signUp)メールアドレスの入力がありません");
              this.Validation.signUpEmailErrMsg = 'メールアドレスを入力してください'

            } else if(!validEmail(this.signUpForm.email)){
              // メールアドレスの形式確認
              console.log("(signUp)メールアドレスの形式が正しくありません");
              this.Validation.signUpEmailErrMsg = 'メールアドレスの形式が正しくありません'

            } else if(validHalfNumAlp(this.signUpForm.email)){
              //半角英数字のバリテーション
              console.log("(signUp)メールアドレスを半角英数で入力してください");
              this.Validation.signUpEmailErrMsg = '半角英数で入力してください'

            } else if(validMaxLen(this.signUpForm.email,SIGNUP_NUM.SIGNUP_EMAIL_MAXLEN)){
              //最大文字数のバリテーション
              console.log("(signUp)メールアドレスを20文字以内にしてください");
              this.Validation.signUpEmailErrMsg = 'メールアドレスは20文字以内にしてください'

            } else if(validMinLen(this.signUpForm.email,SIGNUP_NUM.SIGNUP_EMAIL_MINLEN)){
              //最小文字数のバリテーション
              console.log("(signUp)メールアドレスは4文字以上にしてください");
              this.Validation.signUpEmailErrMsg = 'メールアドレスは4文字以上にしてください'

            }
            // else if(await validEmailDup(this.signUpForm.email)){
            //   //重複確認のバリテーション
            //   console.log("(signUp)メールアドレスが重複しています");
            //   this.Validation.signUpEmailErrMsg = "メールアドレスが重複しています"

            // }
            else {
              //バリテーションがOKな場合
              console.log("(signUp)メールアドレスのバリテーションOKです");
              this.Validation.signUpEmailErrMsg = ""
              this.signUpFormResult.emailResult = true;
            }

            //パスワードのバリデーション
            if (!this.signUpForm.password) {
              //空文字チェック
              console.log("(signUp)パスワードを入力してください");
              this.Validation.signUpPasswordErrMsg = 'パスワードを入力してください'
            } else if(!validHalfNumAlp(this.signUpForm.password)) {
              //半角英数字チェック
              console.log("(signUp)パスワードは半角英数字で入力してください");
              this.Validation.signUpPasswordErrMsg = 'パスワードは半角英数字で入力してください'
            } else if(validMaxLen(this.signUpForm.password,SIGNUP_NUM.SIGNUP_PASSWORD_MAXLEN)){
              //最大文字数チェック
              console.log("(signUp)パスワードは20文字以内で入力してください");
              this.Validation.signUpPasswordErrMsg = 'パスワードは20文字以内で入力してください'
            } else if(validMinLen(this.signUpForm.password,SIGNUP_NUM.SIGNUP_PASSWORD_MINLEN)){
              //最小文字数チェック
              console.log("(signUp)パスワードは6文字以上で入力してください");
              this.Validation.signUpPasswordErrMsg = 'パスワードは6文字以上入力してください'
            } else if(this.signUpForm.password !== this.signUpForm.password_confirmation){
              //確認用パスワードと条件が合うか確認
              console.log("(signUp)確認用パスワードと一致しません");
              this.Validation.signUpPasswordErrMsg = '確認用パスワードと一致しません'
            } else {
              //バリテーションOK
              console.log("(signUp)パスワードのバリテーションOKです");
              this.signUpFormResult.passwordResult = true;
            }

          // バリテーションが通っているかを確認。
          if(this.signUpFormResult.emailResult === true && this.signUpFormResult.passwordResult === true){
            console.log("ユーザー登録用バリテーションOKです。");
            try {
                this.isSubmit = true;
                this.submitButton = '登録中です';
                if (this.signUpFormResult.emailResult === false && this.signUpFormResult.passwordResult === false){
                  console.log("登録内容にエラーがありました。");
                  this.Validation.signUpCommonErrMsg = '登録内容にエラーがありました。'
                  this.isSubmit = false;
                  this.submitButton = "登録";
                  return false;
                }else if(this.signUpFormResult.emailResult === true && this.signUpFormResult.passwordResult === true){
                  // ロード画面実装処理
                  // this.$store.dispatch("app/setLoading");
                  this.Validation = "";
                  console.log("登録処理に入りました。");
                  this.RegistUser = await axios.post('/api/register',this.signUpForm);
                  console.log('レスポンス内容'.RegistUser);

                  //ユーザー情報管理
                  // Cookieにログイン時刻とIDを挿入。
                  Cookies.set('login_date', Date.now());
                  Cookies.set('login_limit',Date.now()+this.sesLimit);
                  // プロパティ内のデータの取得が出来ない時はVueDevToolでデータの階層を確認する。
                  Cookies.set('user_id',this.RegistUser.data.id);

                  //バリテーション結果の初期化
                  this.signUpForm = "";
                  this.signUpFormResult.emailResult = false;
                  this.signUpFormResult.passwordResult = false;

                  this.$store.dispatch("users/setLoginUserInfo");
                  // マイページへ飛ばすパスを書く。
                  this.$router.push(`/mypage/${Cookies.get('user_id')}`)
                }
              } catch (e) {
                  console.log("登録処理中に例外エラーが発生しました。");
                  this.Validation.signUpCommonErrMsg = '接続に失敗しました。'
                  this.signUpFormResult.emailResult = false;
                  this.signUpFormResult.passwordResult = false;
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
  .signup{
    height: 350px;
    width: 400px;
    background-color: #fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    float: left;
    position: relative;
    top: 10px;
    left: 10px;
    z-index: 1;
    transition: all .5s;
    &-loginWrap{
      height: 367px;
      width: 420px;
      position: relative;
      top: 40px;
      right: 10px;
      overflow: hidden;
    }
    &-title{
      text-align: center;
      font-size: 22px;
      margin: 10px 0;
    }
    &-formStyle{
      height: 236px;
      width: 320px;
      margin: 40px auto;
    }
    &-emailaddressField{
      height: 57px;
      position: relative;
    }
    &-emailForm{
      border: 0;
      border-bottom: 1px solid #b4becb;
      width: 100%;
      padding: 3px;
      font-size: 16px;
      position: absolute;
      top:27px;
      &:focus{
        outline: none;
        border-bottom: 1px solid #047aed;
      }
    }
    &-passwardField{
      height: 57px;
      position: relative;
    }
    &-passwordForm{
      border: 0;
      border-bottom: 1px solid #b4becb;
      width: 100%;
      padding: 3px;
      font-size: 16px;
      position: absolute;
      top:27px;
      &:focus{
        outline: none;
        border-bottom: 1px solid #047aed;
      }
    }
    &-confirmationPasswardField{
      height: 57px;
      position: relative;
    }
    &-passwordConfirmationForm{
      border: 0;
      border-bottom: 1px solid #b4becb;
      width: 100%;
      padding: 3px;
      font-size: 16px;
      position: absolute;
      top:27px;
      &:focus{
        outline: none;
        border-bottom: 1px solid #047aed;
      }
    }

    &-registerBtnField{
      height: 57px;
      position: relative;
      padding: 0 105px;
    }
    &-registerBtn{
      position: absolute;
      top:30px;
      padding: 10px 30px;
      background-color: #047aed;
      border: none;
      border-radius: 5px;
      color: #fff;
    }
  }
</style>
