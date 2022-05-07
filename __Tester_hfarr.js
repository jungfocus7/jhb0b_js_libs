const hfarr = require('./js/hfarr');
/*
    is_arr,
    is_contains,
    shuffle,
    copy
*/


const _arr1 = Array.from('abcdefg');
const _arr2 = null;
console.log('hfarr.is_arr >>> ', hfarr.is_arr(_arr1));
console.log('hfarr.is_arr >>> ', hfarr.is_arr(_arr2));
console.log('');


console.log('hfarr.is_contains >>> ', hfarr.is_contains(_arr1, 'a'));
console.log('hfarr.is_contains >>> ', hfarr.is_contains(_arr1, 'x'));
console.log('hfarr.is_contains >>> ', hfarr.is_contains(_arr1, 'g'));
console.log('hfarr.is_contains >>> ', hfarr.is_contains(_arr2, 'x'));
console.log('');


const _arr3 = Array.from('Microsoft');
const _arr4 = Array.from('NodeJsAndElectronJS');
console.log('hfarr.shuffle >>> ', hfarr.shuffle(_arr3));
console.log('>>>', _arr3.join(''));
console.log('hfarr.shuffle >>> ', hfarr.shuffle(_arr4));
console.log('>>>', _arr4.join(''));
console.log('');


const _arr5 = Array.from('Windows10');
const _arr6 = hfarr.copy(_arr5);
hfarr.shuffle(_arr6);
console.log('hfarr.copy >>> ', _arr5.join(''));
console.log('hfarr.copy >>> ', _arr6.join(''));
console.log('');





