import {ManType} from "./Destructuring";

let props: ManType;
beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})

test("", () => {
    let props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
//const age=props.age;
//const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street


    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
    expect(title).toBe('Nezavisimosti street')
})
test('', ()=>{
    const {age, lessons} = props;
    const {title} = props.address.street


    expect(age).toBe(32);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Nezavisimosti street')
})
test('', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    expect((l1.title)).toBe('1')
    expect((l2.title)).toBe('2')

    const [,,ls3] = props.lessons;

    //expect((ls1.title)).toBe('1')
    expect((ls3.title)).toBe('3')

    const [ls1,, ...restLessons] = props.lessons;

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')

    expect(restLessons[0]).toStrictEqual({title:'3'})
})