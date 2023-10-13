// Вам дана заготовка и результат, который вы должны получить.
// Напишите код, который будет преобразовывать JSON в dict и выводить его в консоль.

//  JSON:
const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

// Результат:
//
// {
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic'},
//     { name: 'Vova', age: 60, prof: 'pilot'},
//   ]
// }

const data = JSON.parse(jsonString)

console.log(data)