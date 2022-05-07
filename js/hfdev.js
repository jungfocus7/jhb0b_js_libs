'use strict';
//======================================================================
// # hfdev: 개발 관련
//======================================================================
const _lgp = '[#hf]';



/**
 * 로그 출력
 * @param {massage} tmsg
 */
const log = (tmsg) => {
    if (typeof tmsg === 'string')
        console.log(_lgp, tmsg);

};




module.exports = Object.seal({
    log
});


//======================================================================
