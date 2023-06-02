import {createGreetingMassage, ManType} from "./05.01";

let people: Array<ManType>=[]


beforeEach(()=>{
    people = [
        {name:"Andrew Ivanov", age:33},
        {name:"Alexander Petrov", age:24},
        {name:"Dmitry Sidorov", age:18},
    ]
})

test("should get array of greeting", ()=>{
    const massages = createGreetingMassage(people)

    expect(massages.length).toBe(3)
    expect(massages[0]).toBe('hello Andrew, Welcome to IT-Incubator')
    expect(massages[1]).toBe('hello Alexander, Welcome to IT-Incubator')
    expect(massages[2]).toBe('hello Dmitry, Welcome to IT-Incubator')
})