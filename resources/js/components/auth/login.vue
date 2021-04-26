<template>
    <!-- ログイン関係 -->
    <div class="login js-login-style hidden">

        <form method="POST" class="login-formStyle" @submit.prevent="login">

            <h2 class="login-title">Login</h2>
            <div class="login-commonMsgArea">
                <!-- 接続エラー等のメッセージをここに出力させる。 -->
                <!--例外処理発生時に出力されるメッセージを出す処理-->
            </div>

            <!-- メールアドレス入力欄 -->
            <div class="login-emailaddressField">
                <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
                <label class="#">
                    <!-- バリに引っかかった際にはerrクラスを付属させる。 -->
                    <input class="login-emailForm @error('email') err @enderror" v-model="#">
                    <div class="login-areaMsg">

                        @error('password')
                            <span class="" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror

                    </div>
                </label>
            </div>

            <!-- パスワード入力 -->
            <div class="login-passwardField">
                <label class="#">
                    <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
                    <input class="login-passwordForm @error('password') err @enderror" v-model="#">
                    <div class="login-areaMsg">

                        @error('password')
                            <span class="" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror

                    </div>
                </label>
            </div>

            <div class="login-registerBtnField">
                <input class="login-registerBtn" type="submit" value="ログイン">
            </div>

        </form>

    </div>
</template>

<script>
export default {
  components: {
    SignUp,
    Login
  },
  data () {
    return {
        loginForm: {
          email: '',
          password: ''
        }
    }
  },
  methods: {
    login () {
      console.log(this.loginForm)
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
