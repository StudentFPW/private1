// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
// только собственных свойств. Данная функция не должна возвращать значение.

function Original(obj) {
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            console.log(item, obj[item])
        }
    }
}

const city = {
    city: "Riga"
}

const objTest = Object.create(city);

objTest.name = "Egor"
objTest.address = "New York"

Original(objTest)