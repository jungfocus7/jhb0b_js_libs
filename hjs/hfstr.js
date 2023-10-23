'use strict';
//======================================================================
// # hfstr: 문자열 관련 모듈
//======================================================================
/**
 * 문자열 유효성 확인
 * @param {*} tstr
 * @returns
 */
const is_str = (tstr) => {
    if (typeof tstr === 'string')
        return tstr.trim() !== '';
    else
        return false;

};



/**
 * 이름에서 마지막 번호 확인
 * @param {*} tstr
 * @param {*} token
 * @returns
 */
const get_lastNum = (tstr, token = '_') => {
    const ti = tstr.lastIndexOf(token) + 1;
    return +tstr.substr(ti);

};



/**
 * 문자열 >> ArrayBuffer 변환
 * @param {*} tstr
 * @returns
 */
const str2ab = (tstr) => {
    const tl = tstr.length;

    let tab = new Uint16Array(new ArrayBuffer(tl * 2));
    for (let i = 0; i < tl; i++) {
        tab[i] = tstr.charCodeAt(i);
    }

    return tab;

};



/**
 * ArrayBuffer >> 문자열 변환
 * @param {*} tab
 * @returns
 */
const ab2str = (tab) => {
    return String.fromCharCode.apply(null, tab);

};




module.exports = Object.seal({
    is_empty,
    get_lastNum
});


//======================================================================
