test("should take old mane older then 90",() =>{
    const ages = [10,20,22,1,100,90,14];

    const oldages = ages.filter(age => age>90);

    expect(oldages.length).toBe(1)
    expect(oldages[0]).toBe((100))
})

test("should take cources cheaper 160",() =>{
    const courses = [
        {title:"CSS", price: 100},
        {title:"JS", price: 200},
        {title:"REACT", price: 150}
    ]

    const cheapCourses = courses.filter(course => course.price < 160);


    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("CSS");
    expect(cheapCourses[1].title).toBe("REACT");
})

test("get only completed tasks", () => {
    const tasks = [
        {id:1, title: 'Bread', isDone:false},
        {id:2, title: 'Milk', isDone:true},
        {id:3, title: 'Salt', isDone:false},
        {id:4, title: 'Sugar', isDone:true}
    ]

const completedTasks = tasks.filter(task => task.isDone)

expect(completedTasks.length).toBe(2)
expect(completedTasks[0].id).toBe(2)
expect(completedTasks[1].id).toBe(4)

})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id:1, title: 'Bread', isDone:false},
        {id:2, title: 'Milk', isDone:true},
        {id:3, title: 'Salt', isDone:false},
        {id:4, title: 'Sugar', isDone:true}
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)

})