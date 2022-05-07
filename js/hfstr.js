'use strict';
//======================================================================
// # hfstr: 문자열 관련 모듈
//======================================================================
/**
 *
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
 *
 * @param {*} tstr
 * @param {*} token
 * @returns
 */
const get_lastNum = (tstr, token = '_') => {
    const ti = tstr.lastIndexOf(token) + 1;
    return +tstr.substr(ti);
};




module.exports = Object.seal({
    is_empty,
    get_lastNum
});

//======================================================================
