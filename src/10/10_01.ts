export type UserType = {
    name: string
    hair: number
    address:{city:string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = { id: number, title: string }

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function hairdresser(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    // copy.address = {
    //     ...copy.address,
    //     city: city
    // }
    return copy
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    const copy = {
        ...u,
        laptop: {
            ...u.laptop,
            title: 'Macbook'
        }
    }
    // copy.address = {
    //     ...copy.address,
    //     city: city
    // }
    return copy
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
    return copy
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks:Array<string>) {
    const copy = {
        ...u,
        books: [
            ...u.books, ...newBooks
        ]
    }
    return copy
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook:string, newBook:string) {
    const copy = {
        ...u,
        // books: u.books.map(b => {
        //     if (b === oldBook) {
        //         return newBook
        //     } else {
        //         return b
        //     }
        // })
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
    return copy
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookToDelete:string) {
    const copy = {
        ...u,
        books: u.books.filter(b => b !== bookToDelete)
    }
    return copy
}

//плюшка в типизации
export function updateCompanyTitle(u: WithCompaniesType, companyId:number, newTitle: string) {
    const copy = {
        ...u,
        companies: u.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c )
    }
    return copy
}

export const updateCompanyTitle2 = (companies: { [key: string]: Array<CompanyType>},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c=>c.id === companyId ?
        {...c, title: newTitle} : c)
    return companyCopy
}