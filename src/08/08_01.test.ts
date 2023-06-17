type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}
beforeEach(() => {
        const users = {
            '101': {id: 101, name: 'Dimych'},
            '3232312': {id: 3232312, name: 'Natasha'},
            '1212': {id: 1212, name: 'Valera'},
            '1': {id: 1, name: 'Katya'}
        }
    }
)

test('should delete corresponding user', () => {

        delete users['1']

        expect(users['1']).toBeUndefined()
    }
)