(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/intro/Intro.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/intro/Intro.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    mode: {
      type: String
    }
  },
  passwordReminder: function passwordReminder() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //Emailのバリデーション
              if (!_this.passwordReminderForm.email) {
                //空かどうかのバリテーション
                console.log("(signUp)メールアドレスの入力がありません");
                _this.Validation.passwordReminderEmailErrMsg = 'メールアドレスを入力してください';
              } else if (!validEmail(_this.passwordReminderForm.email)) {
                // メールアドレスの形式確認
                console.log("(signUp)メールアドレスの形式が正しくありません");
                _this.Validation.passwordReminderEmailErrMsg = 'メールアドレスの形式が正しくありません';
              } else if (validHalfNumAlp(_this.passwordReminderForm.email)) {
                //半角英数字のバリテーション
                console.log("(signUp)メールアドレスを半角英数で入力してください");
                _this.Validation.passwordReminderEmailErrMsg = '半角英数で入力してください';
              } else if (validMaxLen(_this.passwordReminderForm.email, SIGNUP_NUM.SIGNUP_EMAIL_MAXLEN)) {
                //最大文字数のバリテーション
                console.log("(signUp)メールアドレスを20文字以内にしてください");
                _this.Validation.passwordReminderEmailErrMsg = 'メールアドレスは20文字以内にしてください';
              } else if (validMinLen(_this.passwordReminderForm.email, SIGNUP_NUM.SIGNUP_EMAIL_MINLEN)) {
                //最小文字数のバリテーション
                console.log("(signUp)メールアドレスは4文字以上にしてください");
                _this.Validation.passwordReminderEmailErrMsg = 'メールアドレスは4文字以上にしてください';
              } // else if(await validEmailDup(this.passwordReminderForm.email)){
              //   //重複確認のバリテーション
              //   console.log("(signUp)メールアドレスが重複しています");
              //   this.Validation.passwordReminderEmailErrMsg = "メールアドレスが重複しています"
              // }
              else {
                  //バリテーションがOKな場合
                  console.log("(signUp)メールアドレスのバリテーションOKです");
                  _this.Validation.passwordReminderEmailErrMsg = "";
                  _this.passwordReminderResult.emailResult = true;
                } // バリテーションが通っているかを確認。


              if (!(_this.passwordReminderResult.emailResult === true)) {
                _context.next = 38;
                break;
              }

              console.log("ユーザー登録用バリテーションOKです。");
              _context.prev = 3;
              _this.isSubmit = true;
              _this.submitButton = '登録中です';

              if (!(_this.passwordReminderResult.emailResult === false)) {
                _context.next = 14;
                break;
              }

              console.log("登録内容にエラーがありました。");
              _this.Validation.signUpCommonErrMsg = '登録内容にエラーがありました。';
              _this.isSubmit = false;
              _this.submitButton = "登録";
              return _context.abrupt("return", false);

            case 14:
              if (!(_this.passwordReminderResult.emailResult === true)) {
                _context.next = 27;
                break;
              }

              å; // ロード画面実装処理
              // this.$store.dispatch("app/setLoading");

              console.log("登録処理に入りました。");
              _context.next = 19;
              return axios.post('/api/register', _this.passwordReminderForm);

            case 19:
              _this.RegistUser = _context.sent;
              console.log('レスポンス内容'.RegistUser); //ユーザー情報管理
              // Cookieにログイン時刻とIDと権限情報挿入。
              // プロパティ内のデータの取得が出来ない時はVueDevToolでデータの階層を確認する。

              Cookies.set('user_id', _this.RegistUser.data.id, {
                expires: 30
              });
              Cookies.set('roll', _this.RegistUser.data.roll, {
                expires: 30
              });
              Cookies.set('login_date', Date.now(), {
                expires: 30
              });
              Cookies.set('login_limit', Date.now() + _this.sesLimit, {
                expires: 30
              });

              _this.$store.dispatch("users/setLoginUserInfo"); // マイページへ飛ばすパスを書く。


              _this.$router.push('/mypage');

            case 27:
              _context.next = 34;
              break;

            case 29:
              _context.prev = 29;
              _context.t0 = _context["catch"](3);
              console.log("登録処理中に例外エラーが発生しました。");
              _this.Validation.signUpCommonErrMsg = '接続に失敗しました。';
              _this.passwordReminderResult.emailResult = false;

            case 34:
              _context.prev = 34;
              // 必ず実行する処理の記述(try..catch..finally)
              // https://www.javadrive.jp/start/exception/index3.html
              // ローディング画面の終了
              _this.isSubmitting = false;
              _this.isSubmit = false;
              return _context.finish(34);

            case 38:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 29, 34, 38]]);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/validate */ "./resources/js/components/passwordReminder/utils/validate.js");
/* harmony import */ var _utils_passwordReminder_number_mappings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/passwordReminder-number-mappings */ "./resources/js/components/passwordReminder/utils/passwordReminder-number-mappings.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // 入力情報を保持
      passwordReminderForm: {
        email: null
      },
      // エラーメッセージを保持
      Validation: {
        passwordReminderEmailErrMsg: null
      },
      // 各バリテーションの総合的な結果情報の管理
      // (上のValidation内の各プロパティ内にmsgがあるかどうかで判定してもいいけど今後TS導入予定なのでもしかすると
      //「扱う情報の型数を狭めて管理するプロパティの数を増やした方が型制御の恩恵を受けやすいのかな？」
      // と思ったので一旦この形で)
      passwordReminderResult: {
        emailResult: false
      },
      //連続で登録処理をさせない用
      RegistUser: null,
      isSubmit: false,
      passwordReminderButton: '変更画面へ移動する',
      passwordReminderDate: null
    };
  },
  methods: {
    passwordReminder: function passwordReminder() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //Emailのバリデーション
                if (!_this.passwordReminderForm.email) {
                  //空かどうかのバリテーション
                  console.log("(PassReminder)メールアドレスの入力がありません");
                  _this.Validation.passwordReminderEmailErrMsg = 'メールアドレスを入力してください';
                } else if (!Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__["validEmail"])(_this.passwordReminderForm.email)) {
                  // メールアドレスの形式確認
                  console.log("(PassReminder)メールアドレスの形式が正しくありません");
                  _this.Validation.passwordReminderEmailErrMsg = 'メールアドレスの形式が正しくありません';
                } else if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__["validHalfNumAlp"])(_this.passwordReminderForm.email)) {
                  //半角英数字のバリテーション
                  console.log("(PassReminder)メールアドレスを半角英数で入力してください");
                  _this.Validation.passwordReminderEmailErrMsg = '半角英数で入力してください';
                } else if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__["validMaxLen"])(_this.passwordReminderForm.email, _utils_passwordReminder_number_mappings__WEBPACK_IMPORTED_MODULE_3__["PASSREMINDER_NUM"].PASSREMINDER_EMAIL_MAXLEN)) {
                  //最大文字数のバリテーション
                  console.log("(PassReminder)メールアドレスを20文字以内にしてください");
                  _this.Validation.passwordReminderEmailErrMsg = 'メールアドレスは20文字以内にしてください';
                } else if (Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__["validMinLen"])(_this.passwordReminderForm.email, _utils_passwordReminder_number_mappings__WEBPACK_IMPORTED_MODULE_3__["PASSREMINDER_NUM"].PASSREMINDER_EMAIL_MINLEN)) {
                  //最小文字数のバリテーション
                  console.log("(PassReminder)メールアドレスは4文字以上にしてください");
                  _this.Validation.passwordReminderEmailErrMsg = 'メールアドレスは4文字以上にしてください';
                } // else if(await validEmailDup(this.passwordReminderForm.email)){
                //   //メールアドレスが存在するかのバリテーション
                //   console.log("(PassReminder)入力されたメールアドレスは登録されていません。");
                //   this.Validation.passwordReminderEmailErrMsg = "入力されたメールアドレスは登録されていません"
                // }
                else {
                    //バリテーションがOKな場合
                    console.log("(PassReminder)メールアドレスのバリテーションOKです");
                    _this.Validation.passwordReminderEmailErrMsg = "";
                    _this.passwordReminderResult.emailResult = true;
                  } // バリテーションが通っているかを確認。


                if (!(_this.passwordReminderResult.emailResult === true)) {
                  _context.next = 31;
                  break;
                }

                console.log("パスワード変更用バリテーションOKです。");
                _context.prev = 3;
                _this.isSubmit = true;
                _this.submitButton = '登録中です';

                if (!(_this.passwordReminderResult.emailResult === false)) {
                  _context.next = 14;
                  break;
                }

                console.log("登録内容にエラーがありました。");
                _this.Validation.PASSREMINDERCommonErrMsg = '登録内容にエラーがありました。';
                _this.isSubmit = false;
                _this.submitButton = "登録";
                return _context.abrupt("return", false);

              case 14:
                if (!(_this.passwordReminderResult.emailResult === true)) {
                  _context.next = 20;
                  break;
                }

                // ロード画面実装処理
                // this.$store.dispatch("app/setLoading");
                console.log("パスワード変更処理に入りました。");
                _context.next = 18;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/passwordReminder', _this.passwordReminderForm);

              case 18:
                _this.passwordReminderDate = _context.sent;

                if (_this.passwordReminderDate) {
                  console.log("パスワード変更処理一部成功。");
                  console.log(_this.passwordReminderDate);
                } else if (_this.passwordReminderDate === false) {
                  console.log("パスワード変更処理失敗。");
                  console.log(_this.passwordReminderDate);
                } // ==========
                // console.log('レスポンス内容'.RegistUser);
                // // ユーザー情報管理
                // // Cookieにログイン時刻とIDと権限情報挿入。
                // // プロパティ内のデータの取得が出来ない時はVueDevToolでデータの階層を確認する。
                // Cookies.set('user_id',this.RegistUser.data.id, {expires: 30});
                // Cookies.set('roll',this.RegistUser.data.roll, {expires: 30});
                // Cookies.set('login_date', Date.now(), {expires: 30});
                // Cookies.set('login_limit',Date.now()+this.sesLimit, {expires: 30});
                // this.$store.dispatch("users/setLoginUserInfo");
                // // マイページへ飛ばすパスを書く。
                // this.$router.push('/mypage')


              case 20:
                _context.next = 27;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](3);
                console.log("登録処理中に例外エラーが発生しました。");
                _this.Validation.PassReminderCommonErrMsg = '接続に失敗しました。';
                _this.passwordReminderResult.emailResult = false;

              case 27:
                _context.prev = 27;
                // 必ず実行する処理の記述(try..catch..finally)
                // https://www.javadrive.jp/start/exception/index3.html
                // ローディング画面の終了
                _this.isSubmitting = false;
                _this.isSubmit = false;
                return _context.finish(27);

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 22, 27, 31]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PasswordReminder.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PasswordReminder.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_intro_Intro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/intro/Intro */ "./resources/js/components/intro/Intro.vue");
/* harmony import */ var _components_passwordReminder_PasswordReminder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/passwordReminder/PasswordReminder */ "./resources/js/components/passwordReminder/PasswordReminder.vue");
/* harmony import */ var _components_passwordReminder_PasswordReceive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/passwordReminder/PasswordReceive */ "./resources/js/components/passwordReminder/PasswordReceive.vue");
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ReminderCompMode: 'reminder'
    };
  },
  components: {
    Intro: _components_intro_Intro__WEBPACK_IMPORTED_MODULE_0__["default"],
    PasswordReminder: _components_passwordReminder_PasswordReminder__WEBPACK_IMPORTED_MODULE_1__["default"],
    PassRemindRecieve: _components_passwordReminder_PasswordReceive__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".passwordRreceive {\n  height: 590px;\n  width: 1400px;\n  background-color: #fff;\n  border-radius: 3px;\n  padding: 170px 0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  margin: 0 auto;\n  position: relative;\n  top: -20px;\n}\n.passwordRreceive__content {\n  height: 200px;\n  width: 700px;\n  margin: 0 auto;\n  padding: 20px 0;\n}\n.passwordRreceive__input {\n  border: 1px solid #b4becb;\n  height: 40px;\n  width: 700px;\n}\n.passwordRreceive__title {\n  font-size: 2rem;\n  text-align: center;\n}\n.passwordRreceive__content-bottom {\n  display: block;\n  height: 46px;\n  width: 116px;\n  margin: 20px auto 0;\n  padding: 10px 27px;\n  font-size: 15px;\n  background-color: #06D1EC;\n  color: #fff;\n  border: 1px solid #fff;\n  border-radius: 3px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".passwordReminder {\n  height: 590px;\n  width: 1400px;\n  background-color: #fff;\n  border-radius: 3px;\n  padding: 170px 0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  margin: 0 auto;\n  position: relative;\n  top: -20px;\n}\n.passwordReminder__content {\n  height: 200px;\n  width: 700px;\n  margin: 0 auto;\n  padding: 20px 0;\n}\n.passwordReminder__input {\n  border: 1px solid #b4becb;\n  height: 40px;\n  width: 700px;\n}\n.passwordReminder__title {\n  font-size: 2rem;\n  text-align: center;\n}\n.passwordReminder__content-bottom {\n  display: block;\n  height: 46px;\n  width: 116px;\n  margin: 20px auto 0;\n  padding: 10px 27px;\n  font-size: 15px;\n  background-color: #06D1EC;\n  color: #fff;\n  border: 1px solid #fff;\n  border-radius: 3px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "intro" }, [
      _c("div", { staticClass: "intro__wrap" }, [
        _c("div", { staticClass: "intro__text" }, [
          _c("div", { staticClass: "intro__text-title" }, [
            _c("span", { staticClass: "intro__text-sub" })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=template&id=52020f11&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=template&id=52020f11& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return this.mode === "receive"
    ? _c("section", { staticClass: "passwordRreceive" }, [
        _c("div", { staticClass: "passwordRreceive__content" }, [
          _c("h1", { staticClass: "passrePasswordReminder__title" }, [
            _vm._v("Password Reminder")
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "form",
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.passwordReceive($event)
                }
              }
            },
            [
              _c("p", [
                _vm._v(
                  "ご指定のメールアドレスお送りした【パスワード再発行認証】メール内にある「認証キー」をご入力ください。"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "area-msg" }),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "area-msg" }),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "area-msg" }),
              _vm._v(" "),
              _vm._m(3)
            ]
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", {}, [
      _vm._v("\n        Email\n        "),
      _c("input", { attrs: { type: "text", name: "email", value: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", {}, [
      _vm._v("\n        認証キー\n        "),
      _c("input", {
        attrs: {
          type: "text",
          name: "token",
          placeholder: "受信した認証キーを入力"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", {}, [
      _vm._v("\n        変更後パスワード\n        "),
      _c("input", {
        attrs: {
          type: "text",
          name: "password",
          placeholder: "変更後パスワードを入力"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn-container" }, [
      _c("input", {
        staticClass: "btn btn-mid",
        attrs: { type: "submit", name: "send", value: "再発行する" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=template&id=1d0339b4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=template&id=1d0339b4& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "passwordReminder" }, [
    _c("div", { staticClass: "passwordReminder__content" }, [
      _c("h1", { staticClass: "passwordReminder__title" }, [
        _vm._v("Password Reminder")
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.passwordReminder($event)
            }
          }
        },
        [
          _c("h4", [_vm._v("メールアドレス")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "ご指定のメールアドレス宛にパスワード再発行用のURLと認証キーをお送り致します。"
            )
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.passwordReminderForm.email,
                expression: "passwordReminderForm.email"
              }
            ],
            staticClass: "passwordReminder__input",
            class: { errInput: _vm.Validation.passwordReminderEmailErrMsg },
            attrs: { type: "text", placeholder: "ここにメールアドレスを入力" },
            domProps: { value: _vm.passwordReminderForm.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.passwordReminderForm, "email", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "passwordReminder-areaMsg" }, [
            _c("span", { staticClass: "#" }, [
              _c("strong", [
                _vm._v(_vm._s(_vm.Validation.passwordReminderEmailErrMsg))
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "passwordReminder__content-bottom",
              attrs: { type: "submit" }
            },
            [
              _vm._v(
                "\n        " + _vm._s(_vm.passwordReminderButton) + "\n      "
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PasswordReminder.vue?vue&type=template&id=5055c2cc&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PasswordReminder.vue?vue&type=template&id=5055c2cc& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Intro"),
      _vm._v(" "),
      this.ReminderCompMode === "reminder" ? _c("PasswordReminder") : _vm._e(),
      _vm._v(" "),
      this.ReminderCompMode === "receive" ? _c("PassRemindRecieve") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/intro/Intro.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/intro/Intro.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Intro.vue?vue&type=template&id=ba507124& */ "./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124&");
/* harmony import */ var _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Intro.vue?vue&type=script&lang=js& */ "./resources/js/components/intro/Intro.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/intro/Intro.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/intro/Intro.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/intro/Intro.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Intro.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/intro/Intro.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Intro.vue?vue&type=template&id=ba507124& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/intro/Intro.vue?vue&type=template&id=ba507124&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_ba507124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/passwordReminder/PasswordReceive.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/passwordReminder/PasswordReceive.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordReceive_vue_vue_type_template_id_52020f11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordReceive.vue?vue&type=template&id=52020f11& */ "./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=template&id=52020f11&");
/* harmony import */ var _PasswordReceive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordReceive.vue?vue&type=script&lang=js& */ "./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PasswordReceive_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PasswordReceive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordReceive_vue_vue_type_template_id_52020f11___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordReceive_vue_vue_type_template_id_52020f11___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/passwordReminder/PasswordReceive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReceive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReceive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReceive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReceive_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReceive_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReceive_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReceive_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReceive_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=template&id=52020f11&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=template&id=52020f11& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReceive_vue_vue_type_template_id_52020f11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReceive.vue?vue&type=template&id=52020f11& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReceive.vue?vue&type=template&id=52020f11&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReceive_vue_vue_type_template_id_52020f11___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReceive_vue_vue_type_template_id_52020f11___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/passwordReminder/PasswordReminder.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/passwordReminder/PasswordReminder.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordReminder_vue_vue_type_template_id_1d0339b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordReminder.vue?vue&type=template&id=1d0339b4& */ "./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=template&id=1d0339b4&");
/* harmony import */ var _PasswordReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordReminder.vue?vue&type=script&lang=js& */ "./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PasswordReminder_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PasswordReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordReminder_vue_vue_type_template_id_1d0339b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordReminder_vue_vue_type_template_id_1d0339b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/passwordReminder/PasswordReminder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReminder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=template&id=1d0339b4&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=template&id=1d0339b4& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_template_id_1d0339b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReminder.vue?vue&type=template&id=1d0339b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passwordReminder/PasswordReminder.vue?vue&type=template&id=1d0339b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_template_id_1d0339b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_template_id_1d0339b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/passwordReminder/utils/passwordReminder-number-mappings.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/passwordReminder/utils/passwordReminder-number-mappings.js ***!
  \********************************************************************************************/
/*! exports provided: PASSREMINDER_NUM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSREMINDER_NUM", function() { return PASSREMINDER_NUM; });
// TODO: utilファイルをまとめる。
var PASSREMINDER_NUM = {
  PASSREMINDER_EMAIL_MAXLEN: 20,
  PASSREMINDER_EMAIL_MINLEN: 4,
  PASSREMINDER_PASSWORD_MAXLEN: 20,
  PASSREMINDER_PASSWORD_MINLEN: 6,
  SES_LIMIT: 604800
};

/***/ }),

/***/ "./resources/js/components/passwordReminder/utils/validate.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/passwordReminder/utils/validate.js ***!
  \********************************************************************/
/*! exports provided: validLowerCase, validUpperCase, validAlphabets, validEmail, validEmailDup, validPassword, validNum, validNonLeadingZero, validZip, validTel, validHalfNumAlp, validNumber, validWhiteSpace, validMaxLen, validMinLen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validLowerCase", function() { return validLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validUpperCase", function() { return validUpperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validAlphabets", function() { return validAlphabets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validEmail", function() { return validEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validEmailDup", function() { return validEmailDup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPassword", function() { return validPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validNum", function() { return validNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validNonLeadingZero", function() { return validNonLeadingZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validZip", function() { return validZip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validTel", function() { return validTel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validHalfNumAlp", function() { return validHalfNumAlp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validNumber", function() { return validNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validWhiteSpace", function() { return validWhiteSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMaxLen", function() { return validMaxLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMinLen", function() { return validMinLen; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/**
 * 小文字の文字列か検証するvalidHalfNumAlp
 * @return {Boolean}
 * @param {String} str
 */

function validLowerCase(str) {
  var reg = /^[a-z]+$/;
  return reg.test(str);
}
/**
 * 大文字の文字列を検証する
 * @return {Boolean}
 * @param {String} str
 */

function validUpperCase(str) {
  var reg = /^[A-Z]+$/;
  return reg.test(str);
}
/**
 * 文字列にアルファベットだけが含まれているかどうかを調べる
 * @param {String} str
 * @param {Boolean}
 */

function validAlphabets(str) {
  var reg = /^[A-Za-z]+$/;
  return reg.test(str);
}
/**
 * メールアドレスの検証
 * @param {String} email
 * @return {Boolean}
 */

function validEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
/**
 * メールアドレスの重複検証
 * @param {String} email
 * @return {Boolean}
 */

function validEmailDup(_x) {
  return _validEmailDup.apply(this, arguments);
}
/**
 * パスワードの検証
 * @param {String} password
 * @return {Boolean}
 */

function _validEmailDup() {
  _validEmailDup = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email) {
    var query, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = {
              'email': email
            };
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/emailDup', query);

          case 3:
            response = _context.sent;
            //TODO:重複が合った場合のresponseの内容の確認
            // 重複が合った場合はtrueを返す処理を書く。
            console.dir(response);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validEmailDup.apply(this, arguments);
}

function validPassword(password) {
  var re = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,20}$/;
  return re.test(password);
}
/**
 * 数値を検証する
 * @param {String} number
 * @return {Boolean}
 */

function validNum(num) {
  var re = /^[0-9]+$/;
  return re.test(num);
}
/**
 * 数字の先頭が0でないことを確認する
 * @param {String} number
 * @return {Boolean}
 */

function validNonLeadingZero(num) {
  return num.toString()[0] !== "0";
}
/**
 * 郵便番号の検証
 * @param {String} zip
 * @return {Boolean}
 */

function validZip(zip) {
  var re = /^\d{3}[-]\d{4}$|^\d{3}[-]\d{2}$|^\d{3}$/;
  return re.test(zip);
}
/**
 * 電話番号の検証
 * @param {String} tel
 * @return {Boolean}
 */

function validTel(tel) {
  var re = /^0\d{1,4}-\d{1,4}-\d{3,4}$/;
  return re.test(tel);
}
/**
 * 半角英数字であるかを検証にする
 * @param {String} halfNumAlp
 * @return {Boolean}
 */

function validHalfNumAlp(halfNumAlp) {
  var re = /^[0-9a-zA-Z]*$/;
  return re.test(halfNumAlp);
}
/**
 * 半角数字であるかを検証する
 * @param {String} validNumber
 * @return {Boolean}
 */

function validNumber(Number) {
  var re = /^[0-9]+$/;
  return re.test(Number);
}
/**
 * 空白かどうかを検証する
*/

function validWhiteSpace(string) {
  var re = /^[\x20\u3000]+$/;
  return re.test(string);
}
/**
 * 最大文字数の検証
 * @param {String} string
 * @param {Integer} maxNum
 * @return {Boolean}
 */

function validMaxLen(string, maxNum) {
  if (string.length >= maxNum) {
    return true;
  } else {
    return false;
  }
}
/**
* 最小文字数の検証
* @param {String} string
* @param {Integer} minNum
* @return {Boolean}
*/

function validMinLen(string, minNum) {
  if (string.length <= minNum) {
    return true;
  } else {
    return false;
  }
}

/***/ }),

/***/ "./resources/js/views/PasswordReminder.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/PasswordReminder.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordReminder_vue_vue_type_template_id_5055c2cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordReminder.vue?vue&type=template&id=5055c2cc& */ "./resources/js/views/PasswordReminder.vue?vue&type=template&id=5055c2cc&");
/* harmony import */ var _PasswordReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordReminder.vue?vue&type=script&lang=js& */ "./resources/js/views/PasswordReminder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordReminder_vue_vue_type_template_id_5055c2cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordReminder_vue_vue_type_template_id_5055c2cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/PasswordReminder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/PasswordReminder.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/PasswordReminder.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReminder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PasswordReminder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/PasswordReminder.vue?vue&type=template&id=5055c2cc&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/PasswordReminder.vue?vue&type=template&id=5055c2cc& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_template_id_5055c2cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReminder.vue?vue&type=template&id=5055c2cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PasswordReminder.vue?vue&type=template&id=5055c2cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_template_id_5055c2cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReminder_vue_vue_type_template_id_5055c2cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);