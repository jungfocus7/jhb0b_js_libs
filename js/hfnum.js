'use strict';
//======================================================================
// 넘버 관련 모듈
//======================================================================
/**
 *
 * @param {*} tv
 * @returns
 */
const is_float = (tv) => {
    return (tv % 1) !== 0;

};



/**
 *
 * @param {*} tv
 * @returns
 */
const is_minus = (tv) => {
    return tv < 0;

};



/**
 *
 * @param {*} tv
 * @returns
 */
const random = (tv) => {
    return Math.round(Math.random() * (tv - 1));

};



/**
 *
 * @param {*} min
 * @param {*} max
 * @returns
 */
const randRange = (min, max) => {
    return min + Math.round(Math.random() * (max - min));

};



/**
 *
 * @param {*} tv
 * @returns
 */
const is_odd = (tv) => {
    return (tv % 2) > 0;

};



/**
 *
 * @param {*} tv
 * @returns
 */
const is_even = (tv) => {
    return (tv % 2) === 0;

};



module.exports = Object.seal({
    is_float,
    is_minus,
    random,
    randRange,
    is_odd,
    is_even
});


//======================================================================
