
const doAfter = (sec) =>{
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {

            const randValue = Math.random()
            resolve(randValue)

        }, 1000*sec)
    })
    return myPromise
}