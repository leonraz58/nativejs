var findUserInDB = (id) => {
    const users = [{id: 1, name: 'Dimych', friend: 2}, {id: 2, name: 'Vasya', friend: 3}, {
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


function getNumber() {
    //const promise = Promise.resolve(Math.random())
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(Math.random())
        }, 2000)
    })
    return promise
}

const n1 = getNumber()
const n2 = getNumber()
//getNumber().then(n => console.log(n))

const repo = {
    save(data) {

        try {
            localStorage.setItem("some-key", JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((res, rej) => {
            try {
                res(localStorage.setItem("some-key", JSON.stringify(data)))
            } catch (error) {
                rej(error)
            }

        })
        return promise
    },
    read(){
        const data = localStorage.getItem('some key')
        if (!data) {
            return null
        } else {
            return JSON.parse(data)
        }
    },
    readAsync() {
        return new Promise((res, rej) => {
            const data = localStorage.getItem('some-key')
            if (!data) {
                res(null)
            } else {
                res(JSON.parse(data))
            }
        })
    }
}

const result = repo.save({name: 'some name'})
if (result) {
    console.log('SAVED')
} else {
    console.warn('ERROR')
}
const data = repo.read()
console.log(data)

// repo.saveAsync({name: 'some name'})
//     .then(() => console.log('SAVED'))
//     .catch(error => console.warn('NOT SAVED'))

const run = async () => {
    await repo.saveAsync({name: 'some name'})
    console.log('SAVED')

    const data = await repo.readAsync()
    console.log(data)
}
run()