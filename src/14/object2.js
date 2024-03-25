function hello() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
    const user = {
        name: name,
        site: 'it-kamasutra.by',
        dateOfBirth: new Date(1988, 1, 2),
        hello:hello
    }
    return user
}

const u1 = userFabric('Dymich')
const u2 = userFabric('Artem')

console.log(u1)
console.log(u2)

//hello() вызов с неверным контекстом
u1.hello()