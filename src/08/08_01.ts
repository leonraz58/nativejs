type UsersType = {
    [key: string]: {id: number, name: string}
}

const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}
//users[1] найти элт с id === 1
var user = {id: 100500, name: 'Igor'}
users[user.id] = user //добавить юзера
delete users[user.id] //удаляем
users[user.id].name = 'Vitya' //update

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]
usersArray.find(u=>u.id===1)
//var usersCopy = [...usersArray.filter(...),user] //для добавления придется проверять на копии
//var usersArray = usersArray.filter(u=>u.id!==user.id) //юзаем фильтр для удаления
//для апдейта тоже гемор

