import { open } from 'node:fs/promises'

(async () => {
    const file = await open('./day_one/data');
    let l1 = [];
    let l2 = [];

    for await (const line of file.readLines()) {
        let l = line.split(" ").filter((s) => {return s !== ''});
        l1.push(parseInt(l[0], 10))
        l2.push(parseInt(l[1], 10))
    }

    let re = 0;
    let count = 0;
    for (let i = 0; i < l1.length; i++)   {
        if (l2.includes(l1[i]))   {
            for (let j = 0; j < l2.length; j++) {
                if (l2[j] == l1[i]) {
                    count += 1
                }
            }

        }
        re += Math.abs(l1[i]*count)
        count = 0
    }

    console.log(re)
})();
