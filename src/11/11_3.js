function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
var findUserInDB = (id) => {
    const users = [{id: 1, name: 'Dimych', friend: 3}, {id: 2, name: 'Vasya', friend: 2}, {id: 3, name: 'Leonid', friend: 4}]

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

// const promise2 = findUserInDB(1)
// const promise2_2 = promise2.then((user)=>{return user.name})
// console.log(promise2_2)
// promise2_2.then(name=>console.log(name))

// findUserInDB(1)
//     .then(user=>user.name)
//     .then(name=>console.log(name))

axios.get('https://google.com')
    .then(res => res.data)
    .then(data => console.log(data))

const makeGoogleRequest = () => {
    // const pr = axios.get('https://google.com')
    // const pr2 = pr.then(res => res.data)
    // return pr
    return axios.get('https://google.com')
        .then(res => res.data)
        .then(data => data.vacancies)
}

makeGoogleRequest().then(vacancies=>console.log(vacancies)) //12

