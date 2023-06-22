type UserType = {
    name: string
    age: number
}

function increaseAge(u: UserType) {
    u.age++
}

test('reference type test', ()=>{
    var user = {
        name: "Dimych",
        age: 32
    }
    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array test', ()=> {

    var users = [
        {
            name: 'Vasya',
            age: 33
        },
        {
            name: 'Dimych',
            age:33
        }
    ]

    var admins = users
    admins.push({name: 'bandit', age: 10})
    expect(users[2]).toEqual({name: 'bandit', age: 10})
})

test('value type test', ()=>{
    let usersCount = 100
    let adminsCount = usersCount

    adminsCount = adminsCount+1
    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})

test ('another test', ()=>{
    const address = {
        title: 'Minsk'
    }

    var user1 = {
        name: 'Dimych',
        age: 33,
        address: address
    }

    var user2 = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Kanary'

    expect(user1.address).toBe(user2.address)
    expect(user1.address.title).toBe('Kanary')
})

test('array test', ()=>{
    const address = {
        title: 'Minsk'
    }

    var user1 = {
        name: 'Dimych',
        age: 33,
        address: address
    }

    var user2 = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user1, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user1, user2]
    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user1.name).toBe('Dmitry')
})
