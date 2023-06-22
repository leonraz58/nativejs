var user = {
    name: "Dimych",
    age: 12,
    address: {
        city: {
            title: "Minsk"
        }
    }
}

console.log(user["address"]["city"]["title"]) //Minsk
console.log(user.address.city.title) //Minsk

//задание ключей объекта через строки
var user = {
    "name": "Dimych",
    "age": 12,
    "address": {
        "city": {
            "title": "Minsk"
        }
    }
}

console.log(user["address"]["city"]["title"]) //Minsk
console.log(user.address.city.title) //Minsk

//===

var city = {}
city.title = "Minsk"
console.log(city.title) //Minsk
console.log(city) //{ title: 'Minsk' }
city.citizensNumber=100
console.log(city) //{ title: 'Minsk', citizensNumber: 100 }

//===

var users = ["Dimych", "Natasha", "Valera", "Katya",]
users2 = users["map"]((e)=>e.toUpperCase())
console.log(users2) //[ 'DIMYCH', 'NATASHA', 'VALERA', 'KATYA' ]

//===

var usersObj = {
    "0": "Dimych",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya"
}

//usersObj.0 - так нельзя
console.log(usersObj["0"]) //Dimych
console.log(usersObj[0]) ////Dimych

users["0"]="Super Dymich"
console.log(users) //[ 'Super Dymich', 'Natasha', 'Valera', 'Katya' ]

usersObj["table"]="brown"
console.log(usersObj) //добавит к 4 юзерам table: 'brown' !!!table без кавычек

keys = Object.keys(usersObj)
console.log(keys) // [ '0', '1', '2', '3', 'table' ]
usersObj[null]="wtf"
console.log(usersObj) // добавится null: 'wtf' null - просто строка
usersObj[ {} ]="hello"
console.log(usersObj) // добавили '[object Object]': 'hello'
usersObj[ {name:'dimych', toString(){return 'blabla'}} ] = "value of blabla"
console.log(usersObj) // blabla: 'value of blabla'


