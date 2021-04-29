<template>
<!-- 会員登録関係 -->
    <div class="signup js-signup-style">

    <!-- postメソッド・uriに/register持ちのルーティングにアクセス -->
    <form method="POST" class="signup-formStyle" @submit.prevent="signUp">

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
                        <strong>{{ Validation.EmailErrMsg }}</strong>
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
                      <strong>{{ Validation.PasswordErrMsg }}</strong>
                  </span>
              </div>
          </label>
        </div>

        <!-- 確認用パスワード入力 -->
        <div class="signup-confirmationPasswardField">
          <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
          <label class="#">
              <input class="signup-passwordConfirmationForm" :class="{ errInput: Validation.signUpPasswordConfirmationErrMsg }" type="password" placeholder="Confirmation Password" v-model="signUpForm.password_confirmation">
          </label>
        </div>

        <div class="signup-registerBtnField">
          <input class="signup-registerBtn" type="submit" value="登録する">
        </div>

    </form>
    </div>
</template>

<script>
// 外部のjsファイルの読み込みが上手くいかないのでマジックナンバーやメソッドの切り分けは一旦保留。
// import SIGNUP_NUM from '.../utils/signUp'

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
            signUpEmailErrMsg: "",
            signUpPasswordErrMsg: "",
            signUpPasswordConfirmationErrMsg: "",
            signUpCommonErrMsg: ""
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
      //バリ関数は後で纏める。
      signUp () {
        //Emailのバリデーション
        if (!this.signUpForm.email) {
          //空かどうかのバリテーション
          console.log("(signUp)メールアドレスの入力がありません");
          this.Validation.EmailErrMsg = "メールアドレスを入力してください"

        } else if(this.signUpForm.loginId.match(/^[0-9a-zA-Z]*$/)){
          //半角英数字のバリテーション
          console.log("(signUp)メールアドレスを半角英数で入力してください");
          this.Validation.EmailErrMsg = "半角英数で入力してください"

        } else if(length(this.signUpForm.loginId) > 15){
          //マジックナンバーになってる。
          //最大文字数のバリテーション
          console.log("(signUp)メールアドレスを15文字以内にしてください");
          this.Validation.EmailErrMsg = "メールアドレスは15文字以内にしてください"
        // } else if(){
        //   //ここはさすがに外部ファイルに切り出せないと長くなりすぎるので一旦保留。
        //   //重複確認のバリテーション
        //   console.log("(signUp)メールアドレスが重複しています");
        //   this.Validation.EmailErrMsg = "メールアドレスが重複しています"
        } else {
          //バリテーションがOKな場合
          console.log("(signUp)バリテーションOKです");
          this.signUpFormResult.emailResult = true;
        }

        //パスワードのバリデーション
        if (!this.signUpForm.password) {
          //空文字チェック
          console.log("(signUp)パスワードを入力してください");
          this.Validation.PasswordErrMsg = "パスワードを入力してください"
        } else if(this.loginForm.loginId.match(/^[0-9a-zA-Z]*$/)){
          //半角英数字チェック
          console.log("(signUp)パスワードは半角英数字で入力してください");
          this.Validation.PasswordErrMsg = "パスワードは半角英数字で入力してください"
        } else if(length(this.signUpForm.password) > 15){
          //最大文字数チェック
          console.log("(signUp)パスワードは15文字以内で入力してください");
          this.Validation.PasswordErrMsg = "パスワードは15文字以内で入力してください"
        } else if(length(this.signUpForm.password) < 5){
          //最小文字数チェック
          console.log("(signUp)パスワードは5文字以上で入力してください");
          this.Validation.PasswordErrMsg = "パスワードは5文字以上入力してください"
        } else if(this.signUpForm.password === this.signUpForm.password_confirmation){
          //最小文字数チェック
          console.log("(signUp)確認用パスワードと一致しません");
          this.Validation.PasswordErrMsg = "確認用パスワードと一致しません"
        } else {
          //バリテーションOK
          console.log("(signUp)バリテーションOKです");
          this.signUpFormResult.passwordResult = true;
        }


        if(this.signUpFormResult.emailResult === true && this.signUpFormResult.passwordResult === true){
          console.log("ユーザ登録バリテーションOKです。");
          try {
            //動作確認待ち
            console.log("登録処理に入りました。");
            console.log(this.signUpForm);

            // マイページへ飛ばすパスを書く。
            // プロパティの保持期間がよくわからないので、画面遷移後
            this.signUpFormResult.emailResult = false;
            this.signUpFormResult.passwordResult = false;
          } catch (e) {
            console.log("登録処理中に例外的エラーが発生しました。");
            this.signUpFormResult.emailResult = false;
            this.signUpFormResult.passwordResult = false;
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
