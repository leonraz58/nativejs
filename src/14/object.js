const deleteUser = (userId) => {
    const action = {
        type: 'DELETE-USER',
        payload: {
            userId: userId
        }
    }
    return action
}

const action1 = deleteUser("123123")
const action2 = deleteUser("444444")

console.log(action1)
console.log(action2)