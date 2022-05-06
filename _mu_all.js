'use strict';




const _mu_com = {
    trace: (tv) => {
        console.log('   ', tv);
    }
};
Object.freeze(_mu_com);


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

        const tl = tarr.length
        for (let i = 0; i < tl; i++) {
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

        const tl = tarr.length;
        for (let i = 0; i < tl; i++) {
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
    _mu_com: _mu_com,
    _mu_num: _mu_num,
    _mu_arr: _mu_arr,
};






