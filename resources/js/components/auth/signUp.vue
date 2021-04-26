<template>
<!-- 会員登録関係 -->
    <div class="signup js-signup-style">

    <!-- postメソッド・uriに/register持ちのルーティングにアクセス -->
    <form method="POST" class="signup-formStyle" @submit.prevent="signUp">

        <h2 class="signup-title">SignUp</h2>
        <div class="signup-commonMsgArea">
            <!-- 接続エラー等のメッセージをここに出力させる。 -->
            <!--例外処理発生時に出力されるメッセージを出す処理-->
        </div>

        <!-- メールアドレス入力欄 -->
        <div class="signup-emailaddressField">
            <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
            <label class="#">
                <!-- バリに引っかかった際にはerrクラスを付属させる。 -->
                <!-- v-model・・・入力情報の紐付けと管理 -->
                <!-- エラーメッセージが存在した場合,inputフォームにエラー時のスタイルが適用される様になる。 -->
                <input class="signup-emailForm" :class="{ errInput: Validation.EmailErrMsg }" type="text" placeholder="Email" v-model="signUpForm.email">
                <div class="signup-areaMsg">
                    <!-- エラーメッセージの出力 -->
                    <span class="#">
                        <strong>{{ Validation.EmailErrMsg }}</strong>
                    </span>
                </div>
            </label>
        </div>

        <!-- パスワード入力 -->
        <div class="signup-passwardField">
          <label class="#">
              <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
              <input class="signup-passwordForm" :class="{ errInput: Validation.PasswordErrMsg }" type="password" placeholder="Password" v-model="signUpForm.password">
              <div class="signup-areaMsg">
                  <!-- エラーメッセージの出力 -->
                  <span class="#">
                      <strong>{{ Validation.PasswordErrMsg }}</strong>
                  </span>
              </div>
          </label>
        </div>

        <!-- 確認用パスワード入力 -->
        <div class="signup-confirmationPasswardField">
          <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
          <label class="#">
              <input class="signup-passwordConfirmationForm" type="password" placeholder="Confirmation Password" v-model="signUpForm.password_confirmation">
          </label>
        </div>

        <div class="signup-registerBtnField">
          <input class="signup-registerBtn" type="submit" value="登録する">
        </div>

    </form>
    </div>
</template>

<script>
import validURL from '../utils/validate';

export default {
    data () {
      return {
        // 入力情報を保持
        signUpForm: {
          email: '',
          password: '',
          password_confirmation: ''
        },
        // エラーメッセージを保持
        Validation:{
            EmailErrMsg: "",
            PasswordErrMsg: "",
            PasswordConfirmationErrMsg: ""
        },
        // 各バリテーションの総合的な結果情報の管理
        // (上のValidation内の各プロパティ内にmsgがあるかどうかで判定してもいいけど今後TS導入予定なのでもしかすると
        //「扱う情報の型数を狭めて管理するプロパティの数を増やした方が型制御の恩恵を受けやすいのかな？」
        // と思ったので一旦この形で)
        signUpFormResult: {
          emailResult: false,
          passwordResult: false,
          password_confirmationResult: false
        }
      }
    },
    methods: {
      // :rulesがvuetify独自のタグかどうか調べる。
      // https://qiita.com/tekunikaruza_jp/items/0a68d86084d961d632ac
      signUp () {
        //Emailのバリデーション
        if (!this.signUpForm.email) {
          // 空文字
            this.Validation.EmailErrMsg = "ログインIDを入力してください"
        } else if(!this.checkString(this.loginForm.loginId)){
            this.Validation.EmailErrMsg = "半角英数で入力してください"
        } else {
            this.signUpFormResult.emailResult = true;
        }

        //パスワードのバリデーション
        if (!this.signUpForm.email) {
            this.Validation.PasswordErrMsg = "ログインIDを入力してください"
        } else if(!this.checkString(this.loginForm.loginId)){
            this.Validation.PasswordErrMsg = "半角英数で入力してください"
        } else {
            this.signUpFormResult.passwordResult = true;
        }

        //パスワード(再入力)のバリテーション
        if (!this.signUpForm.password_confirmation) {
            this.Validation.PasswordConfirmationErrMsg = "ログインIDを入力してください"
        } else if(!this.checkString(this.loginForm.loginId)){
            this.Validation.PasswordConfirmationErrMsg = "半角英数で入力してください"
        } else {
            this.signUpFormResult.password_confirmationResult = true;
        }

        if(this.signUpFormResult.emailResult === true && this.signUpFormResult.passwordResult === true && this.signUpFormResult.password_confirmationResult === true){
          console.log("ユーザ登録バリテーションOKです。");
          try {
            //動作確認待ち
            console.log("登録処理に入りました。");
            console.log(this.signUpForm);
            return true;
          } catch (e) {
            console.log("登録処理中に例外的エラーが発生しました。");
            return false;
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
