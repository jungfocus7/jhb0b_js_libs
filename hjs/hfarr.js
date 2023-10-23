'use strict';
//======================================================================
// # hfarr: 배열 관련 모듈
//======================================================================
import hfnum from './hfnum.js';



/**
 * 배열객체 유효성 확인
 * @param {array} arr
 * @returns boolean
 */
const is_arr = (arr) => {
    return Array.isArray(arr) && (arr.length > 0);
};


/**
 * 배열객체 없는지 확인
 * @param {array} arr
 * @returns boolean
 */
const is_empty = (arr) => {
    if (Array.isArray(arr) && (arr.length > 0))
        return false;
    else
        return true;
};


/**
 * 배열에 요소 확인
 * @param {array} arr
 * @param {object} e
 * @returns boolean
 */
const is_contains = (arr, e) => {
    if (is_arr(arr) === false) return false;

    let rb = false;
    const l = arr.length
    for (let i = 0; i < l; i++) {
        if (arr[i] === e) {
            rb = true;
            break;
        }
    }
    return rb;
};


/**
 * 배열 섞기
 * @param {array} arr
 * @returns void
 */
const shuffle = (arr) => {
    if (is_arr(arr) === false) return;

    const l = arr.length;
    for (let i = 0; i < l; i++) {
        let te = arr[i];
        let ti = hfnum.randRange(0, l - 1);
        arr[i] = arr[ti];
        arr[ti] = te;
    }
};


/**
 * 배열 복사
 * @param {array} arr
 * @returns array
 */
const copy = (arr) => {
    if (is_arr(arr) === false) return null;

    return arr.slice();
};



export default Object.seal({
    is_arr,
    is_empty,
    is_contains,
    shuffle,
    copy
});
//======================================================================
