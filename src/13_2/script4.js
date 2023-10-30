
const doAfter = () =>{
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {

            const randValue = Math.random()
            resolve(randValue)

        }, 3000)
    })
    return myPromise
}