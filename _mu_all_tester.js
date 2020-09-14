'use strict';

const { _mu_com, _mu_num, _mu_arr } = require('./_mu_all');



console.log('====================================================================================================');
console.log('=== _mu_num: ', _mu_num);
console.log('====================================================================================================');
console.log('----------------------------------------------------------------------');
console.log('-- is_float');
console.log('----------------------------------------------------------------------');
(() => {
    console.log('_mu_num.is_float:', _mu_num.is_float(0.231));
    console.log('_mu_num.is_float:', _mu_num.is_float(Math.PI));
    console.log('_mu_num.is_float:', _mu_num.is_float(772));
    console.log('_mu_num.is_float:', _mu_num.is_float(67.0));
    console.log('_mu_num.is_float:', _mu_num.is_float(942.03));
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('----------------------------------------------------------------------');
console.log('-- is_minus');
console.log('----------------------------------------------------------------------');
(() => {
    console.log('_mu_num.is_minus:', _mu_num.is_minus(114));
    console.log('_mu_num.is_minus:', _mu_num.is_minus(-114));
    console.log('_mu_num.is_minus:', _mu_num.is_minus(772-1982));
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('----------------------------------------------------------------------');
console.log('-- random');
console.log('----------------------------------------------------------------------');
(() => {
    console.log('_mu_num.random:', _mu_num.random(10));
    console.log('_mu_num.random:', _mu_num.random(921));
    console.log('_mu_num.random:', _mu_num.random(69));
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('----------------------------------------------------------------------');
console.log('-- randRange');
console.log('----------------------------------------------------------------------');
(() => {
    console.log('_mu_num.random:', _mu_num.randRange(10, 30));
    console.log('_mu_num.random:', _mu_num.randRange(0, 7));
    console.log('_mu_num.random:', _mu_num.randRange(900, 1400));
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('----------------------------------------------------------------------');
console.log('-- is_odd');
console.log('----------------------------------------------------------------------');
(() => {
    console.log('_mu_num.is_odd:', _mu_num.is_odd(10));
    console.log('_mu_num.random:', _mu_num.is_odd(7));
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('----------------------------------------------------------------------');
console.log('-- is_even');
console.log('----------------------------------------------------------------------');
(() => {
    console.log('_mu_num.is_odd:', _mu_num.is_even(3));
    console.log('_mu_num.random:', _mu_num.is_even(70));
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('====================================================================================================');
console.log('');
console.log('');
console.log('');
console.log('');
console.log('');



console.log('====================================================================================================');
console.log('=== _mu_arr: ', _mu_arr);
console.log('====================================================================================================');
console.log('----------------------------------------------------------------------');
console.log('-- is_arr');
console.log('----------------------------------------------------------------------');
(() => {
    const _arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    console.log('_mu_arr.is_arr:', _mu_arr.is_arr(_arr));
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('----------------------------------------------------------------------');
console.log('-- is_contains');
console.log('----------------------------------------------------------------------');
(() => {
    const _arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    console.log('_mu_arr.is_contains:', _mu_arr.is_contains(_arr, 'f'));
    console.log('_mu_arr.is_contains:', _mu_arr.is_contains(_arr, 'k'));
    console.log('_mu_arr.is_contains:', _mu_arr.is_contains(_arr, 't'));
    console.log('_mu_arr.is_contains:', _mu_arr.is_contains(_arr, '0'));
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('----------------------------------------------------------------------');
console.log('-- shuffle');
console.log('----------------------------------------------------------------------');
(() => {
    const _arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    _mu_arr.shuffle(_arr);
    console.log('_mu_arr.shuffle:', _arr);
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('----------------------------------------------------------------------');
console.log('-- copy');
console.log('----------------------------------------------------------------------');
(() => {
    const _arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let _xxa = _mu_arr.copy(_arr);
    _xxa[2] = '1';
    console.log('_mu_arr.copy:', _arr, _xxa);
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('----------------------------------------------------------------------');
console.log('-- get_at');
console.log('----------------------------------------------------------------------');
(() => {
    const _arr = '0123456789'.split('');
    // const _arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let tl = 20, i = -20; i < tl; i++) {
        let te = _mu_arr.get_at(_arr, i);
        console.log('   _mu_arr.get_at:', i, te);
    }
})();
console.log('----------------------------------------------------------------------');
console.log('');
console.log('');


console.log('====================================================================================================');
console.log('');
console.log('');
console.log('');
console.log('');
console.log('');




console.log('====>>');