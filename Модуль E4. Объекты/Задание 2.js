// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного
// объекта свойство с данным именем. Функция должна возвращать true или false.

function StrObj(str, obj) {
    if (str in obj) {
        console.log(true, str)
    } else {
        console.log(false, str)
    }

    // for (let item in obj) {
    //     if (str === item) {
    //         console.log(true, item)
    //     }
    // }
}

const city = {
    city: "Riga",
    name: "Alex"
}

StrObj("name", city)