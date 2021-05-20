import Cookies from "js-cookie";
import router from "../router";
import store from "../store";
import {AUTH_ROUTER_NUM} from "./utils/auth_route_num"

// ゲスト判定かログイン判定か
const AuthFilter = () => {

  let isPublic = Cookies.get('user_id');
  let isRoll = Cookies.get('roll');
  let isLoginData = Cookies.get('login_date');
  let isLoginLimit = Cookies.get('login_limit');

  // JavaScriptにおける配列の空要素除去filterパターン
  // https://qiita.com/akameco/items/1636e0448e81e17e3646
  // .fillter(Boolean)が上手く動作しないので、上の変数の配列管理は後回しにする。

  //ユーザー認証チェック
  if (isPublic) {
    console.log('ログイン済みユーザーです。');
    if(isLoginLimit < Date.now()){
      console.log('ログイン有効期限外です。');
      //TODO:フラッシュメッセージで「ログイン有効期限外です。再度ログインし直して下さい。」と表示。
      //TODO:配列で纏める。https://webrandum.net/js-cookie/
      //userStateの更新
      store.dispatch("users/setLoginUserInfo");
    }else if(isLoginLimit > Date.now()){
      console.log('ログイン有効期限内です。');
      Cookies.set('login_limit',Date.now()+AUTH_ROUTER_NUM.SES_LIMIT, {expires: AUTH_ROUTER_NUM.LOGON_LIMIT});
      //userState情報の再挿入(ページ遷移ごとに再挿入させる事でvuex内のuserStateを永続化させている。)
      store.dispatch("users/setLoginUserInfo");
    }
  }else if(!(isPublic)){
    //TODO:フラッシュメッセージで「ログイン情報がありません。ホームに戻ります。」と表示。
    store.dispatch("users/setLoginUserInfo");
    router.push('/', () => {});
  }

};

export { AuthFilter };
