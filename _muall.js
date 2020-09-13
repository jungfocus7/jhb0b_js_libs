'use strict';


const _mu_num = {
    is_float: (tv) => {
        return ((tv % 1) !== 0);
    }
    ,

    is_minus: (tv) => {
        return (tv < 0);
    }
    ,

    random: (tv) => {
        return Math.round(Math.random() * (tv - 1));
    }
    ,

    randRange: (min, max) => {
        return min + Math.round(Math.random() * (max - min));
    }
    ,

    is_odd: (tv) => {
        return ((tv % 2) > 0);
    }
    ,

    is_even: (tv) => {
        return ((tv % 2) === 0);
    }
};
Object.freeze(_mu_num);



const _mu_arr = {
    is_arr: (tarr) => {
        return Array.isArray(tarr) && (tarr.length > 0);
        // if (!Array.isArray(tarr)) return false;
        // return (tarr !== null) && (tarr.length > 0);
    }
    ,

    is_contains: (tarr, te) => {
        if (!_mu_arr.is_arr(tarr)) return false;

        let tb = false;
        for (let tl = tarr.length, i = 0; i < tl; i++) {
            if (tarr[i] === te) {
                tb = true;
                break;
            }
        }
        return tb;
    }
    ,

    shuffle: (tarr) => {
        if (!_mu_arr.is_arr(tarr)) return;

        for (let tl = tarr.length, i = 0; i < tl; i++) {
            let te = tarr[i];
            let ti = _mu_num.randRange(0, tl - 1);
            tarr[i] = tarr[ti];
            tarr[ti] = te;
        }
    }
    ,

    copy: (tarr) => {
        if (!_mu_arr.is_arr(tarr)) return null;

        return tarr.slice();
    }
    ,

    get_at: (tarr, ti) => {
        if (!_mu_arr.is_arr(tarr)) return null;

        let tl = tarr.length;
        if (ti < 0)
            ti = tl + ti;

        if ((ti >= 0) && (ti < tl))
            return tarr[ti];
        else
            return null;
    }
};
Object.freeze(_mu_num);



module.exports = {
    _mu_num: _mu_num,
    _mu_arr: _mu_arr,
};









// module.exports = {
//     _mu_num: (() => {

//         const is_float = (tv) => {
//             return ((tv % 1) !== 0);
//         };

//         const is_minus = (tv) => {
//             return (tv < 0);
//         };

//         const random = (tv) => {
//             return Math.round(Math.random() * (tv - 1));
//         };

//         const randRange = (min, max) => {
//             return min + Math.round(Math.random() * (max - min));
//         };

//         const is_odd = (min, max) => {
//             return ((v % 2) > 0);
//         };

//         const is_even = (min, max) => {
//             return ((v % 2) == 0);
//         };


//         return {
//             is_float: is_float,
//             is_minus: is_minus,
//             random: random,
//             randRange: randRange,
//             is_odd: is_odd,
//             is_even: is_even
//         };

//     })()
//     ,

//     _mu_arr: (() => {

//         const is_arr = (tarr) => {
//             if (!Array.isArray(tarr)) return false;
//             return (tarr !== null) && (tarr.length > 0);
//         };

//         const is_contains = (tarr, te) => {
//             if (!is_arr(tarr)) return false;

//             let tb = false;
//             for (let tl = tarr.length, i = 0; i < tl; i++) {
//                 if (tarr[i] === te) {
//                     tb = true;
//                     break;
//                 }
//             }
//             return tb;
//         };

//         const shuffle = (tarr) => {
//             if (!is_arr(tarr)) return false;

//             for (let tl = tarr.length, i = 0; i < tl; i++) {
//                 let te = tarr[i];
//                 let ti = _mu_num.randRange(0, tl - 1);
//                 tarr[i] = tarr[ti];
//                 tarr[ti] = te;
//             }
//         };

//         const copy = (tarr) => {
//             if (!is_arr(tarr)) return false;

//             return tarr.slice();
//         };


//         return {
//             is_arr: is_arr,
//             is_contains: is_contains,
//             shuffle: shuffle
//         };

//     })()
// };





// const _mu_num = (() => {

//     const is_float = (tv) => {
//         return ((tv % 1) !== 0);
//     };

//     const is_minus = (tv) => {
//         return (tv < 0);
//     };

//     const random = (tv) => {
//         return Math.round(Math.random() * (tv - 1));
//     };

//     const randRange = (min, max) => {
//         return min + Math.round(Math.random() * (max - min));
//     };

//     const is_odd = (min, max) => {
//         return ((v % 2) > 0);
//     };

//     const is_even = (min, max) => {
//         return ((v % 2) == 0);
//     };


//     return {
//         is_float: is_float,
//         is_minus: is_minus,
//         random: random,
//         randRange: randRange,
//         is_odd: is_odd,
//         is_even: is_even
//     };

// })();



// const _mu_arr = (() => {

//     const is_arr = (tarr) => {
//         if (!Array.isArray(tarr)) return false;
//         return (tarr !== null) && (tarr.length > 0);
//     };

//     const is_contains = (tarr, te) => {
//         if (!is_arr(tarr)) return false;

//         let tb = false;
//         for (let tl = tarr.length, i = 0; i < tl; i++) {
//             if (tarr[i] === te) {
//                 tb = true;
//                 break;
//             }
//         }
//         return tb;
//     };

//     const shuffle = (tarr) => {
//         if (!is_arr(tarr)) return false;

//         for (let tl = tarr.length, i = 0; i < tl; i++) {
//             let te = tarr[i];
//             let ti = _mu_num.randRange(0, tl - 1);
//             tarr[i] = tarr[ti];
//             tarr[ti] = te;
//         }
//     };

//     const copy = (tarr) => {
//         if (!is_arr(tarr)) return false;

//         return tarr.slice();
//     };


//     return {
//         is_arr: is_arr,
//         is_contains: is_contains,
//         shuffle: shuffle
//     };

// })();



// const _arr = [0, 1, 2, 3];

// console.log('_mu_arr.is_arr: ' + _mu_arr.is_arr(_arr));
// console.log('_mu_arr.is_contains: ' + _mu_arr.is_contains(_arr, 3));


// _mu_arr.shuffle(_arr);
// console.log('_mu_arr.shuffle: ' + _arr);









//console.log('>>> ' + _mu_arr.is_arr(_arr));
//console.log('>>> ' + _mu_arr.is_contains(_arr, null));



















// //function muarr_is_arr()


// (() => {})();


// const _mu_arr = {
//     is_arr: (tarr) => {
//         if (!Array.isArray(tarr)) return false;
//         return (tarr !== null) && (tarr.length > 0);
//     },
//     /*,

//     is_contains: (tarr, te) => {
//         if (is_arr())


//         let tb = false;

//         for (let tl = tarr.length)

//         return tb;
//     }*/

//     is_xxx: () => {
//         console.log(is_arr);
//     }
// };



// let _arr = [0, 1, 2, 3];
// //console.log('     >>> ' + _mu_arr.is_arr(_arr));
// _mu_arr.is_xxx();