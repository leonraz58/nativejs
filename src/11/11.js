var findUserInDB = (id) => {
    const users = [{id: 1, name: 'Dimych, friend: 3'}, {id: 2, name: 'Vasya, friend: 2'}, {id: 3, name: 'Leodin, friend: 4'}]

    return new Promise((res, rej) => {
        setTimeout(()=> {
            let user = users.find(u=>u.id == id)
            if (user == null) {
                rej('user not found')
            } else {
                res(user)
            }
    }, randomIntFromInterval(500, 1500))
    })
}

var axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(()=>{
                let responseData = {
                    text: `${url} loves you`
                }
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('misrosoft') > 0) {
                    responseData = {
                        vacancies: 21
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1,5)*1000)
        })
    },
    post(url, data) {
        return this._fake(url, data)
    },
    get(url, data) {
        return this._fake(url, data)
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const promise1 = axios.get('https://google.com')
promise1.then((data)=>{
     console.log(data)
    console.log('===')
})

const promise2 = findUserInDB(25)
//console.log(promise2)
promise2
    .then((user)=>{
    console.log(user)
        console.log('===')
})
    // .catch((error)=>{
    //     console.log(promise2)
    // })
    // .finally(()=>{
    //     console.log('finish')
    // })

//объединение промисов через all
const otherPromise = Promise.all([promise1, promise2])
// otherPromise
//     .then((results)=> {
//         const dataFromGoogle=results[0]
//         const userFromDB = results[1]
//         console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name)
// })
//     .catch(()=>{
//         console.log('initialization failed. Try later')
//     })


const otherPromise2 = Promise.allSettled([promise1, promise2])
otherPromise2
    .then((results)=> {
        console.log(results)

        const dataFromGoogle =
            results[0].status === 'fulfilled'
                ? results[0].value
                : {data: {vacancies: null}}

        const userFromDB = results[1].status === 'fulfilled'
            ? results[1].value
            : {name: results[1].reason}

        //console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name)
    })
