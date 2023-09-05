var findUserInDB = (id) => {
    const users = [{id: 1, name: 'Dimych', friend: 4}, {id: 2, name: 'Vasya', friend: 3}, {
        id: 3,
        name: 'Leonid',
        friend: 1
    }]

    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users.find(u => u.id == id)
            if (user == null) {
                rej('user not found')
            } else {
                res(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// findUserInDB(1)
//     .then(user=>{
//         console.log(user.name)
//         return user.friend
//     })
//     .then(friendId=>findUserInDB(friendId))
//     .catch(error=> {
//         console.log('error')
//         return {name: 'Friend bot', friend: 3}
//     })
//     .then(friend1 => {
//         console.log(friend1.name)
//         return friend1.friend
//     })
//     .then(friendId => findUserInDB(friendId))
//     .then(friend2 => console.log(friend2.name))

async function run(){
    try {
        let user = await findUserInDB(1)
        console.log(user)
        let friend1
        try {
            friend1 = await findUserInDB(user.friend)
        } catch (error) {
            friend1 = {name: 'Friend bot', friend: 3}
        }

        console.log(friend1)
        let friend2 = await findUserInDB(friend1.friend)
        console.log(friend2)
    } catch (error) {
        console.log(error)
    }
}

run()