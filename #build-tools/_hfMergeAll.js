import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';
import readline from 'node:readline';
const __dirname = path.resolve();



class _hfMergeAll {
    /**
     * 생성자
     * @param {FileReadStream} frs
     * @param {FileWriteStream} fws
     * @param {boolean} bd 다중주석 제거를 무사하는지 여부
     */
    constructor(frs, fws, bd = false) {
        const gd = this.#gd;
        gd.frs = frs;
        gd.fws = fws;
        gd.bd = bd;
    }

    /** 글로벌 데이터 오브젝트 */
    #gd = Object.seal({
        frs: null,  //FileReadStream
        fws: null,  //FileReadStream
        bd: false,  //??
        rl: null,   //Readline
        //~~~
        bcm: false, //??
        bf: true    //??
    });



    // /**
    //  * 처음부터 한줄주석 제거
    //  * @param {string} ls
    //  * @returns string
    //  */
    // #fn_clearCommentsStartWidthsOneLine = (ls) => {
    //     if ((typeof ls !== 'string') || (ls === '')) return '';
    //     const rex = /^[ \t]*\/\/[^\r\n]*$/;
    //     if (rex.test(ls) === true)
    //         return '';
    //     else
    //         return ls;
    // };
    /**
     * 한줄주석 제거
     * @param {string} ls
     * @returns string
     */
    #fn_clearCommentsOneLine = (ls) => {
        if ((typeof ls !== 'string') || (ls === '')) return '';
        const rex = /\/\/[^\r\n]*$/;
        const rv = ls.replace(rex, '').trim();
        return rv;
    };


    /**
     * 'use strict'; 제거
     * @param {string} ls
     * @returns string
     */
    #fn_clearUseStrict = (ls) => {
        if ((typeof ls !== 'string') || (ls === '')) return '';
        const rex = /['"]use strict['"];?/;
        const rv = ls.replace(rex, '').trim();
        return rv;
    };


    /**
     * 다중주석 제거
     * @param {string} ls
     * @returns string
     */
    #fn_clearCommentsMultiLineAll = (ls) => {
        if ((typeof ls !== 'string') || (ls === '')) return '';
        const rex = /\/\*[\S\s]*?\*\//g;
        const rv = ls.replaceAll(rex, '').trim();
        return rv;
    };


    /**
     * 다중주석 시작점 제거
     * @param {string} ls
     * @returns string
     */
    #fn_clearCommentsMultiLineBegin = (ls) => {
        if ((typeof ls !== 'string') || (ls === '')) return '';
        const gd = this.#gd;
        if (gd.bd === true) {
            const rx0 = /^\/*\*\*.*$/;
            if (rx0.test(ls) === true) {
                return ls;
            }
        }
        const rex = /\/\*.*?$/;
        const tm = ls.match(rex);
        if (Array.isArray(tm) && (tm.length > 0)) {
            const rv = ls.replace(tm[0], '').trim();
            gd.bcm = true;
            return rv;
        }
        else
            return ls;
    };


    /**
     * 다중주석 끝점 제거
     * @param {string} ls
     * @returns string
     */
    #fn_clearCommentsMultiLineEnd = (ls) => {
        if ((typeof ls !== 'string') || (ls === '')) return '';
        const gd = this.#gd;
        const rex = /^.*?\*\//;
        const tm = ls.match(rex);
        if (tm !== null) {
            const rv = ls.replace(tm[0], '').trim();
            gd.bcm = false;
            return rv;
        }
        else
            return '';
    };




    /**
     * 작업 시작
     */
    fn_work = async () => {
        const gd = this.#gd;
        try {
            gd.rl = readline.createInterface({
                input: gd.frs,
                crlfDelay: Infinity
            });

            for await (let ls of gd.rl) {
                ls = ls.trim();
                if (ls === '') continue;

                ls = this.#fn_clearCommentsOneLine(ls);
                if (ls === '') continue;

                ls = this.#fn_clearUseStrict(ls);
                if (ls === '') continue;

                ls = this.#fn_clearCommentsMultiLineAll(ls);
                if (ls === '') continue;

                if (gd.bcm === false)
                    ls = this.#fn_clearCommentsMultiLineBegin(ls);
                else
                    ls = this.#fn_clearCommentsMultiLineEnd(ls);
                if (ls === '') continue;

                gd.fws.write(ls + os.EOL);
            }
        }
        catch (e) {
            console.log(`# Error  ${e}`);
        }
        finally {
            try { gd.rl.close(); } catch { }
        }

        return this;
    };


    /**
     * 작업 리셋
     */
    fn_reset = () => {
        const gd = this.#gd;
        try {
            gd.rl.close();
            gd.rl = null;
        } catch { }
    }
}


(async () => {
    const ifpa = [
        '_emt.js',
        'hftween.js',
        'hfarr.js',
        'hfcanvas.js',
        'hfcount.js',
        'hfdate.js',
        'hfdev.js',
        'hfgeom.js',
        'hfnet.js',
        'hfnum.js',
        'hfreg.js',
        'hfsmove.js',
        'hfstr.js',
        'hfsvg.js',
        'hftimer.js',
        ]
        .map((tx) => path.resolve(__dirname, `hjs\\${tx}`));
    const ofp = path.resolve(__dirname, `.\\js\\hfall.js`);
    // console.log(`ifpa: ${ifpa}`);
    // console.log(`ofp: ${ofp}`);

    const fws = fs.createWriteStream(ofp);
    fws.write(`'use strict';${os.EOL}`);
    let pnow = new Date();
    for (const ifp of ifpa) {
        // console.log(ifp);
        try {
            fs.accessSync(ifp);

            const frs = fs.createReadStream(ifp);
            const mga = new _hfMergeAll(frs, fws, false);
            await mga.fn_work();

            try { frs.close(); } catch (e) { throw e; }
            try { mga.fn_reset(); } catch (e) { throw e; }
            // fws.write('\n//>>>>>>>>>>>>>>>>>>>>>>\n//>>>>>>>>>>>>>>>>>>>>>>\n\n' + os.EOL);
            // fws.write(os.EOL);
        }
        catch (e) {
            console.log(`# Error  ${e}`);
        }
    }
    try { fws.close(); } catch (e) { console.log(e); }
    pnow = new Date() - pnow;
    console.log(`# All done. [time: ${pnow}ms]`);
})();
