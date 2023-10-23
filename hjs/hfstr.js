'use strict';
//======================================================================
// # hfstr: 문자열 관련 모듈
//======================================================================
/**
 * 문자열 유효성 확인
 * @param {string} str
 * @returns boolean
 */
const is_str = (str) => {
    if (typeof str === 'string')
        return str.trim() !== '';
    else
        return false;
};


/**
 * 이름에서 마지막 번호 확인
 * @param {string} str
 * @param {string} token
 * @returns number
 */
const get_lastNum = (str, token = '_') => {
    const ti = str.lastIndexOf(token) + 1;
    return +str.substr(ti);
};


/**
 * 문자열을 ArrayBuffer객체로 변환
 * @param {string} str
 * @returns Uint16Array
 */
const str2ab = (str) => {
    const l = str.length;
    let ab = new Uint16Array(new ArrayBuffer(l * 2));
    for (let i = 0; i < l; i++) {
        ab[i] = str.charCodeAt(i);
    }

    return ab;
};


/**
 * ArrayBuffer객체를 문자열로 변환
 * @param {ArrayBuffer} ab
 * @returns string
 */
const ab2str = (ab) => {
    return String.fromCharCode.apply(null, ab);
};



export default Object.seal({
    is_str,
    get_lastNum,
    str2ab,
    ab2str
});
//======================================================================
