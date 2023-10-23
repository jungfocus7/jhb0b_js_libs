import hfnum from './hjs/hfnum.js';
/*
is_float,
is_minus,
random,
randRange,
is_odd,
is_even
*/


console.log('실수인가? 0.37 >>> ', hfnum.is_float(0.37));
console.log('실수인가? 177 >>> ', hfnum.is_float(177));
console.log('');

console.log('음수인가? -13 >>> ', hfnum.is_minus(-13));
console.log('음수인가? 971 >>> ', hfnum.is_minus(971));
console.log('');

console.log('랜덤 0,13 >>> ', hfnum.random(13));
console.log('랜덤 0,971 >>> ', hfnum.random(971));
console.log('랜덤 0,46 >>> ', hfnum.random(46));
console.log('');

console.log('랜덤 10,30 >>> ', hfnum.randRange(10, 30));
console.log('랜덤 79,136 >>> ', hfnum.randRange(79, 136));
console.log('랜덤 162,365 >>> ', hfnum.randRange(162, 365));
console.log('');

console.log('홀수인가? 1093 >>> ', hfnum.is_odd(1093));
console.log('홀수인가? 386 >>> ', hfnum.is_odd(386));
console.log('');

console.log('짝수인가? 876 >>> ', hfnum.is_even(876));
console.log('짝수인가? 1873 >>> ', hfnum.is_even(1873));
console.log('');






