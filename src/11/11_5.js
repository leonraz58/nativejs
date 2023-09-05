var findUserInDB = (id) => {
    const users = [{id: 1, name: 'Dimych', friend: 2}, {id: 2, name: 'Vasya', friend: 3}, {id: 3, name: 'Leonid', friend: 1}]

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
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// const lastPromise2 = findUserInDB(1)
//     .then(user=>{
//         console.log(user)
//         return user
//     })
//     .then(user=>findUserInDB(user.friend))
//     .then(friend1 => {
//         console.log(friend1)
//         return friend1
//     })
//     .then(friend1 => findUserInDB(friend1.friend))
//     .then(friend2 => console.log(friend2))

async function run(){
    let user = await findUserInDB(1)
    console.log(user)
    let friend1 = await findUserInDB(user.friend)
    console.log(friend1)
    let friend2 = await findUserInDB(friend1.friend)
    console.log(friend2)
}

run()
