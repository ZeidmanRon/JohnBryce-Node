let counter = 0
// unrealistic server func
const howManyCandlesCallback = (dayNumber, callback) => {
    if (dayNumber < 1) {
        callback('day must be bigger then 0')
    }
    else if (dayNumber > 8) {
        callback('day must be smaller then 9')
    }
    else {
        return callback(null, dayNumber + 1);
    }
}

const hanucaCallback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    else {
        return result
    }
}

for (let i = 1; i < 9; i++) {
    counter = counter + howManyCandlesCallback(i, hanucaCallback)
}
console.log(counter)

