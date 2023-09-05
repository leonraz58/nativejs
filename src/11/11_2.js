// const resolvedPromise = Promise.resolve(1)
// resolvedPromise
//     .then(data=> console.log(data))
//     .catch(error => console.log(error))
//
// const rejectedPromise = Promise.reject({message: 'some error'})
//
// rejectedPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'D'}, {name: 'N'}])
    },
    login(login, password) {
        if (login !== '123' && password !== '123'){
            return Promise.reject({message: 'Incorrect Login and Password'})
        } else {
            return Promise.resolve({name: 'Dima', id: 12, avatarUr: '111'})
        }
    }
}

const pr = usersAPI.getAllUsers()
pr.then(users => console.log(users))

usersAPI.login('123', '444')
    .then((data)=> {
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })