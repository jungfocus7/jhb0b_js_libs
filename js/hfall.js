'use strict';
export const hfEaseBack = Object.seal({
easeIn: (t, b, c, d, s = 1.70158) => {
return c * (t /= d) * t * ((s + 1) * t - s) + b;
},
easeOut: (t, b, c, d, s = 1.70158) => {
return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
},
easeInOut: (t, b, c, d, s = 1.70158) => {
if ((t /= d / 2) < 1)
return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
}
});
export const hfEaseBounce = Object.seal({
easeIn: (t, b, c, d) => {
return c - this.easeOut(d - t, 0, c, d) + b;
},
easeOut: (t, b, c, d) => {
if ((t /= d) < (1 / 2.75))
return c * (7.5625 * t * t) + b;
else if (t < (2 / 2.75))
return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
else if (t < (2.5 / 2.75))
return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
else
return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
},
easeInOut: (t, b, c, d) => {
if (t < d / 2)
return this.easeIn(t * 2, 0, c, d) * 0.5 + b;
else
return this.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}
});
export const hfEaseCircular = Object.seal({
easeIn: (t, b, c, d) => {
return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
},
easeOut: (t, b, c, d) => {
return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
},
easeInOut: (t, b, c, d) => {
if ((t /= d / 2) < 1)
return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}
});
export const hfEaseElastic = Object.seal({
easeIn: (t, b, c, d, a = 0, p = 0) => {
if (t == 0) return b;
if ((t /= d) == 1) return b + c;
if (!p) p = d * 0.3;
let s;
if (!a || a < Math.abs(c)) {
a = c;
s = p / 4;
}
else {
s = p / (2 * Math.PI) * Math.asin(c / a);
}
return -(a * Math.pow(2, 10 * (t -= 1)) *
Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
},
easeOut: (t, b, c, d, a = 0, p = 0) => {
if (t == 0) return b;
if ((t /= d) == 1) return b + c;
if (!p) p = d * 0.3;
let s;
if (!a || a < Math.abs(c)) {
a = c;
s = p / 4;
}
else {
s = p / (2 * Math.PI) * Math.asin(c / a);
}
return a * Math.pow(2, -10 * t) *
Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
},
easeInOut: (t, b, c, d, a = 0, p = 0) => {
if (t == 0) return b;
if ((t /= d / 2) == 2) return b + c;
if (!p) p = d * (0.3 * 1.5);
let s;
if (!a || a < Math.abs(c)) {
a = c;
s = p / 4;
}
else {
s = p / (2 * Math.PI) * Math.asin(c / a);
}
if (t < 1) {
return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
}
return a * Math.pow(2, -10 * (t -= 1)) *
Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
}
});
export const hfEaseExponential = Object.seal({
easeIn: (t, b, c, d) => {
return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
},
easeOut: (t, b, c, d) => {
return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
},
easeInOut: (t, b, c, d) => {
if (t == 0) return b;
if (t == d) return b + c;
if ((t /= d / 2) < 1)
return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
});
class hfTween extends EventTarget {
static ET_UPDATE = 'update';
static ET_END = 'end';
constructor(current = 0, duration = 36, ease = null) {
super();
this.#running = false;
this.#begin = current;
this.#end = current;
this.#current = current;
this.#time = 0;
this.#duration = duration;
const fx = ease ?? hfEaseBack.easeInOut;
this.#ease = fx.bind(hfEaseBack);
Object.seal(this);
}
#running = false;
get Running() {
return this.#running;
}
#begin = 0.0;
get Begin() {
return this.#begin;
}
#end = 0.0;
get End() {
return this.#end;
}
#current = 0.0;
get Current() {
return this.#current;
}
#time = 0;
get Time() {
return this.#time;
}
#duration = 0;
get Duration() {
return this.#duration;
}
#ease = 0;
get Ease() {
return this.#ease;
}
#fid = -1;
#ClearFrame = () => {
if (this.#fid === -1) return;
cancelAnimationFrame(this.#fid);
this.#fid = -1;
};
#LoopFrame = (t) => {
if (this.#running === false) return;
if (this.#time < this.#duration) {
++this.#time;
this.#current = this.#ease(this.#time, this.#begin, this.#end, this.#duration);
this.dispatchEvent(new Event(hfTween.ET_UPDATE));
if (this.#time >= this.#duration) {
this.dispatchEvent(new Event(hfTween.ET_END));
this.Stop();
}
}
this.#fid = requestAnimationFrame(this.#LoopFrame);
};
Stop() {
if (this.#running === true) {
this.#ClearFrame();
this.#running = false;
}
}
FromTo(begin, change) {
if (this.#running === true)
this.Stop();
this.#time = 0;
this.#begin = begin;
this.#end = change - begin;
this.#current = begin;
this.#running = true;
this.#fid = requestAnimationFrame(this.#LoopFrame);
}
To(change) {
this.FromTo(this.#current, change);
}
}
export default Object.seal({
hfEaseBack,
hfEaseBounce,
hfEaseCircular,
hfEaseElastic,
hfEaseExponential,
hfTween
});
import hfnum from './hfnum.js';
const is_arr = (arr) => {
return Array.isArray(arr) && (arr.length > 0);
};
const is_empty = (arr) => {
if (Array.isArray(arr) && (arr.length > 0))
return false;
else
return true;
};
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
class hfCountTask {
constructor(countStart = 1, countEnd = 10, plusValue = 1) {
this.#countStart = countStart;
this.#countEnd = countEnd;
this.#plusValue = plusValue;
this.#count = countStart;
}
#countStart = 0;
get CountStart() {
return this.#countStart;
}
#countEnd = 0;
get CountEnd() {
return this.#countEnd;
}
#plusValue = 0;
get PlusValue() {
return this.#plusValue;
}
#count = 0;
get Count() {
return this.#count;
}
Prev() {
const tc = this.#count - this.#plusValue;
if (tc < this.#countStart)
return false;
else {
this.#count = tc;
return true;
}
}
Next() {
const tc = this.#count + this.#plusValue;
if (tc > this.#countEnd)
return false;
else {
this.#count = tc;
return true;
}
}
Reset() {
this.#count = this.#countStart;
}
ResetEnd() {
this.#count = this.#countEnd;
}
}
export default Object.seal({
hfCountTask
});
const _lgp = '[#hf]';
const log = (msg) => {
if (typeof msg === 'string')
console.log(_lgp, msg);
};
export default Object.seal({
log
});
const is_float = (v) => {
return (v % 1) !== 0;
};
const is_minus = (v) => {
return v < 0;
};
const random = (v) => {
return Math.round(Math.random() * (v - 1));
};
const randRange = (min, max) => {
let tv = Math.round(Math.random() * (max - min));
return min + tv;
};
const is_odd = (tv) => {
return (tv % 2) > 0;
};
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
class hfWeich extends EventTarget {
static ET_UPDATE = 'update';
static ET_END = 'end';
constructor(now, speed = 0.3) {
super();
this.#running = false;
this.#end = now;
this.#now = now;
this.#speed = speed;
Object.seal(this);
}
#running = false;
get Running() {
return this.#running;
}
#end = 0.0;
get End() {
return this.#end;
}
#now = 0.0;
get Now() {
return this.#now;
}
#speed = 0.0;
get Speed() {
return this.#speed;
}
#fid = -1;
#ClearFrame = () => {
if (this.#fid === -1) return;
cancelAnimationFrame(this.#fid);
this.#fid = -1;
};
#LoopFrame = (t) => {
if (this.#running === false) return;
const dst = this.#end - this.#now;
if (Math.abs(dst) < 1) {
this.#now = this.#end;
this.dispatchEvent(new Event(hfWeich.ET_END));
this.Stop();
}
else {
this.#now = this.#now + (dst * this.#speed);
this.dispatchEvent(new Event(hfWeich.ET_UPDATE));
}
this.#fid = requestAnimationFrame(this.#LoopFrame);
};
Stop() {
if (this.#running === true) {
this.#ClearFrame();
this.#running = false;
}
}
FromTo(end, now, speed = NaN) {
if (this.#running === true)
this.Stop();
this.#end = end;
this.#now = now;
if (isNaN(speed) === false)
this.#speed = speed;
this.#running = true;
this.#fid = requestAnimationFrame(this.#LoopFrame);
}
To(end, speed = NaN) {
this.FromTo(end, this.#now, speed);
}
}
export default Object.seal({
hfWeich
});
const is_str = (str) => {
if (typeof str === 'string')
return str.trim() !== '';
else
return false;
};
const get_lastNum = (str, token = '_') => {
const ti = str.lastIndexOf(token) + 1;
return +str.substr(ti);
};
const str2ab = (str) => {
const l = str.length;
let ab = new Uint16Array(new ArrayBuffer(l * 2));
for (let i = 0; i < l; i++) {
ab[i] = str.charCodeAt(i);
}
return ab;
};
const ab2str = (ab) => {
return String.fromCharCode.apply(null, ab);
};
export default Object.seal({
is_str,
get_lastNum,
str2ab,
ab2str
});
