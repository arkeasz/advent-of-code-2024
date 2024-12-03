import { open } from 'node:fs/promises'

(async () => {
    const file = await open('./day_three/data');
    let regex = /mul\(\d+,\d+\)/g;
    let m = [];
    let re = 0;
    for await (const line of file.readLines()) {
        for (const match of line.matchAll(regex)) {
            m.push(match[0]);
        }
    }

    for (const item of m)   {
        let i = item.match(/\d+/g)
        re += i[0]*i[1]
    }

    console.log(re)

})();
