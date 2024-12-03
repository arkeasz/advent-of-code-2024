import { open } from 'node:fs/promises'
import fs from 'node:fs/promises'

(async () => {
    const file = await open('./day_three/data');
    let regex = /do\(\)|don't\(\)|mul\(\d+,\d+\)/g;
    let m = [];
    let re = 0;
    for await (const line of file.readLines()) {
        for (const match of line.matchAll(regex)) {
            m.push(match[0]);
        }
    }

    let enabled = true;
    for (let i in m)   {
        console.log(m[i])
        if (m[i] == "don't()")  {
            enabled = false
        } else if (m[i] == "do()")  {
            enabled = true
        } else if (enabled)   {
            let w = m[i].match(/\d+/g)
            if (w != null)  {
                re += w[0]*w[1]
            }
        }
    }

    console.log(re)

})();
