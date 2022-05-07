'use strict';
//======================================================================
// 배열 관련 모듈
//======================================================================
/**
 *
 * @param {*} tarr
 * @returns
 */
const is_arr = (tarr) => {
    return Array.isArray(tarr) && (tarr.length > 0);
    // if (!Array.isArray(tarr)) return false;
    // return (tarr !== null) && (tarr.length > 0);

};



/**
 *
 * @param {*} tarr
 * @param {*} te
 * @returns
 */
const is_contains = (tarr, te) => {
    if (is_arr(tarr) === false) return false;


    let tb = false;

    const tl = tarr.length
    for (let i = 0; i < tl; i++) {
        if (tarr[i] === te) {
            tb = true;
            break;
        }
    }

    return tb;

};



/**
 *
 * @param {*} tarr
 * @returns
 */
const shuffle = (tarr) => {
    if (is_arr(tarr) === false) return;


    const tl = tarr.length;
    for (let i = 0; i < tl; i++) {
        let te = tarr[i];
        let ti = _mu_num.randRange(0, tl - 1);
        tarr[i] = tarr[ti];
        tarr[ti] = te;
    }

};



/**
 *
 * @param {*} tarr
 * @returns
 */
const copy = (tarr) => {
    if (is_arr(tarr) === false) return null;

    return tarr.slice();
};




module.exports = Object.seal({
    is_arr,
    is_contains,
    shuffle,
    copy
});


//======================================================================
