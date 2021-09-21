async function youAreWarrior(callback, errorcallback) {
    let warrior = 'Garen'

    return new Promise((resolve, reject) => {
        if (warrior != 'Garen') {
            reject({
                name: warrior,
                message: 'você não é um guerreiro'
            })
        } else {
            resolve({
                name: warrior,
                message: 'voce é um guerreiro'
            })
        }
    })
}

youAreWarrior()
.then((result) => {
        console.log(result.name +' '+ result.message)
    }).catch((error) => {
        console.log(error.name +' '+ error.message)
    })