import axios from "axios";
/**
 * 小文字の文字列か検証するvalidHalfNumAlp
 * @return {Boolean}
 * @param {String} str
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * 大文字の文字列を検証する
 * @return {Boolean}
 * @param {String} str
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 文字列にアルファベットだけが含まれているかどうかを調べる
 * @param {String} str
 * @param {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * メールアドレスの検証
 * @param {String} email
 * @return {Boolean}
 */
export function validEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * メールアドレスの重複検証
 * @param {String} email
 * @return {Boolean}
 */
export async function validEmailDup(email) {
  // request内でのキー割り振り
  const query = {
    'email': email
  }
  const response = await axios.post('/api/emailDup',query);
  // TODO:重複が合った場合のresponseの内容の確認
  // 重複が合った場合はtrueを返す処理を書く。
  console.dir(response);
  return response
}

/**
 * パスワードの検証
 * @param {String} password
 * @return {Boolean}
 */
export function validPassword(password) {
    const re = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,20}$/;
    return re.test(password);
}

/**
 * 数値を検証する
 * @param {String} number
 * @return {Boolean}
 */
export function validNum(num) {
  const re = /^[0-9]+$/;
  return re.test(num);
}

/**
 * 数字の先頭が0でないことを確認する
 * @param {String} number
 * @return {Boolean}
 */
export function validNonLeadingZero(num) {
    return num.toString()[0] !== "0";
}

/**
 * 郵便番号の検証
 * @param {String} zip
 * @return {Boolean}
 */
export function validZip(zip) {
  const re = /^\d{3}[-]\d{4}$|^\d{3}[-]\d{2}$|^\d{3}$/;
  return re.test(zip);
}

/**
 * 電話番号の検証
 * @param {String} tel
 * @return {Boolean}
 */
export function validTel(tel) {
  const re = /^0\d{1,4}-\d{1,4}-\d{3,4}$/
  return re.test(tel);
}

/**
 * 半角英数字であるかを検証にする
 * @param {String} halfNumAlp
 * @return {Boolean}
 */
export function validHalfNumAlp(halfNumAlp) {
  const re = /^[0-9a-zA-Z]*$/
  return re.test(halfNumAlp);
}

/**
 * 半角数字であるかを検証する
 * @param {String} validNumber
 * @return {Boolean}
 */
export function validNumber(Number){
    const re = /^[0-9]+$/
    return re.test(Number);
  }

/**
 * 空白かどうかを検証する
*/
export function validWhiteSpace(string) {
  const re = /^[\x20\u3000]+$/
  return re.test(string)
}

/**
 * 最大文字数の検証
 * @param {String} string
 * @param {Integer} maxNum
 * @return {Boolean}
 */
export function validMaxLen(string,maxNum){
  if(string.length >= maxNum){
    return true
  } else {
    return false
  }
}

/**
* 最小文字数の検証
* @param {String} string
* @param {Integer} minNum
* @return {Boolean}
*/
export function validMinLen(string,minNum){
  if(string.length <= minNum){
    return true
  } else {
    return false
  }
}

