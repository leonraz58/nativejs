function User(name, site, job) {
    this.name = name
    this.site = site
    this.dateOfBirth = job
}

User.prototype.hello = function() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User('Dimych', 'it-incubator', new Date(1988,1,2))
const u2 = new User('Artem', 'it-incubator', new Date(1989,10,12))

u1.hello()
u2.hello()

