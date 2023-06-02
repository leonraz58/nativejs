export type ManType = {
    name:string
    age: number
}

const people:Array<ManType> = [
    {name:"Andrew Ivanov", age:33},
    {name:"Alexander Petrov", age:24},
    {name:"Dmitry Sidorov", age:18},
]

const devs = [
    {
        stack:["css, html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack:["css, html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack:["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    },
]

const devs4 = people.map(man => ({
    stack:["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
}))

const massages = people.map(man => `hello ${man.name.split(" ")[0]}, Welcome to IT-Incubator`)

export const createGreetingMassage = (people:Array<ManType>) => {
    return people.map(man => `hello ${man.name.split(" ")[0]}, Welcome to IT-Incubator`)
}