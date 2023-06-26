const { readFile, readFileSync } = require('fs')
const fs_promise = require('fs/promises')
const fs = require('fs');

global_path = 'lesson 3 - file system\\text.txt'
//1 simple callback
readFile(global_path, (err, result) => {
    if (err) {
        return console.log(err)
    }
    else {
        return console.log(`1. ${result}`)
    }
})

//2 outsource package
console.log(`2. ${readFileSync(global_path, 'utf8')}`)

//3 async/await
let iReadFile = async (path) => {
    const data = await fs_promise.readFile(path, 'utf8')
    console.log(`3. ${data}`);
}
iReadFile(path = global_path);

//4 promise
let readFilePromise = async (path) => {
    return new Promise((resolve, reject) => {
        readFileCallback(path, (err, result) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    });
}

let readFileCallback = (path, callback) => {
    if (!path ) {
        return callback ('path cannot be null');
    }
    else{
        readFile(path, 'utf8', (err, result) => {
            if (err) {
                return console.log(err)
            }
            else {
                console.log(`4. ${result}`)
            }
        })        
    }
}
readFilePromise(path = global_path)