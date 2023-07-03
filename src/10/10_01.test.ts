import {
    addNewBooksToUser,
    hairdresser,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";
import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;


test('reference type test', () => {
    let user: UserType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = hairdresser(user, 2)
    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)

})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('update laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'Kiev')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Zenbook')
})

test('update laptop to macbook2', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[3]).toBe('ts')
    expect(userCopy.books[4]).toBe('rest api')
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('ts')
})

test('update js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('html')
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies:[
            {id: 1, title:'Epam'},
            {id: 2, title:'IT-INCUBATOR'},
        ]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM')

    expect(user).not.toBe(userCopy)
    //expect(user.address).toBe(userCopy.address) гонит на типизацию
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company title', () => {


    let companiess = {
        'Dymich': [{id: 1, title:'Ep1am'},{id: 2, title:'IT-INCUBATOR'}],
        'Artem': [
            {id: 2, title:'IT-INCUBATOR'}
        ]
    }

    const copy = updateCompanyTitle2(companiess, 'Dymich',1,'EPAM')

    expect(copy['Dimych']).not.toBe(companiess['Dymich'])
    expect(copy['Artem']).toBe(companiess['Artem'])
    expect(copy['Dymich'][0].title).toBe('EPAM')
})
