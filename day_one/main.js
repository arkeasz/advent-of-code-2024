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
    l1.sort((a,b) => a - b)
    l2.sort((a,b) => a - b)

    let re = 0;
    for (let i = 0; i < l1.length; i++)   {
        re += Math.abs(l2[i] - l1[i])
    }

    console.log(re)
})();
