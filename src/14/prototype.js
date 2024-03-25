function DeleteUserAction(userId) {
    // this = {}
    this.type = 'DELETE-USER'
    this.payload = {
        userId: userId
    }
    //return this
}

const action1 = new DeleteUserAction(123123)
const action2 = new DeleteUserAction(444444)

console.log(action1)
console.log(action2)