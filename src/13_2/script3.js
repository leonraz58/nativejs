
const doAfter = () =>{
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            const randValue = Math.random()
            alert(randValue)

        }, 3000)
    })
    return myPromise
}