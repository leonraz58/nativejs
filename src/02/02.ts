type LocalCityType = {
    title: string;
    countryTitle: string;    
}

type adressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id:number
    title: string
}

export type StudentType = {
    name: string;
    age: number;
    isActive: boolean;
    adress: adressType;
    technologies: Array<TechType>
}

export const student: StudentType = {
    name: "Leonid",
    age: 33,
    isActive: true,
    adress: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student["name"])
console.log(student.adress.city.title)
console.log(student.technologies[2].title)