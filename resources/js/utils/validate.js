// バリテーション定義ファイル

/**
 * URLのバリテーション
 * @param {String} textval
 * @return {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

/**
 * 小文字の文字列か検証する
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
 * 半角英数字を有効にする
 * @param {String} halfNumAlp
 * @return {Boolean}
 */
export function validHalfNumAlp(halfNumAlp) {
  const re = /^[0-9a-zA-Z]*$/
  return re.test(halfNumAlp);
}

/**
 * 半角数字かを検証する
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
