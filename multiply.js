const fs = require('fs');
const colors = require('colors');

let listTable = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`Table of ${base}`.green);
    console.log('================'.green);
    for (let i = 1; base <= limite; i++) {
        console.log(`${base}*${i} = ${base*i} `);
    }

}


let createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`"${base}" is not a number`)
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`tables/table-${base}-to-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${base}-to-${limite}.txt`);
        });

    });

}
module.exports = {
    createFile,
    listTable
}