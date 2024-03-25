class User {
    #name = ''
    constructor(name, site, job) {
        this.#name = name
        this.site = site
        this.job = job
    }
    hello() {
        console.log(`I am ${this.name} from ${this.site}`)
    }
    getName() {
        return this.#name
    }
    get name() {
        return this.#name
    }
    setName(value) {
        if (value === '123') throw new Error('suck')
        this.#name = value
    }
    set name(value) {
        if (value === '123') throw new Error('suck')
        this.#name = value
    }
}

const u1 = new User('Dimych', 'it-incubator', new Date(1988,1,2))
const u2 = new User('Artem', 'it-incubator', new Date(1989,10,12))

u1.hello()
u2.hello()

console.log(u1.hello === u2.hello)
console.log(u1.hello === User.prototype.hello)
console.log(u1.getName())
u1.setName('Igor')
console.log(u1.getName())
u1.name = 'Kolya'
console.log('u1.name->',u1.name)

class Coder extends User {
    constructor(name,site,job,tech){
        super(name,site,job)
        this.tech = tech
    }
    code() {
        console.log(`I am ${this.name}, here is my ${this.tech} code ()=>{}`)
    }

    hello() {
        super.hello()
        console.log('go away')
    }
}

const coder1 = new Coder('Dimych coder', 'it-incubator', new Date(1988,1,2),'c#')
coder1.code()
coder1.hello()

let users = [u1,u2,coder1]
console.log('====')
users.forEach(u=>u.hello())