'use strict';
//======================================================================
// # hfnum: 넘버 관련 모듈
//======================================================================
/**
 * 숫자가 소수점인지 확인
 * @param {number} v
 * @returns boolean
 */
const is_float = (v) => {
    return (v % 1) !== 0;
};


/**
 * 숫자가 마이너스인지 확인
 * @param {number} v
 * @returns boolean
 */
const is_minus = (v) => {
    return v < 0;
};


/**
 * 난수 발생하기
 * @param {number} v
 * @returns number
 */
const random = (v) => {
    return Math.round(Math.random() * (v - 1));
};


/**
 * 난수 발생하기 min, max
 * @param {number} min
 * @param {number} max
 * @returns number
 */
const randRange = (min, max) => {
    let tv = Math.round(Math.random() * (max - min));
    return min + tv;
};


/**
 * 숫자가 홀수인지 판단
 * @param {number} tv
 * @returns boolean
 */
const is_odd = (tv) => {
    return (tv % 2) > 0;
};


/**
 * 숫자가 짝수인지 판단
 * @param {number} tv
 * @returns boolean
 */
const is_even = (tv) => {
    return (tv % 2) === 0;
};



export default Object.seal({
    is_float,
    is_minus,
    random,
    randRange,
    is_odd,
    is_even
});
//======================================================================
