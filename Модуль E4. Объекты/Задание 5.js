// Переписать консольное приложение из предыдущего юнита на классы. +

// План:
//     Определить родительскую функцию с методами, которые включают/выключают прибор из розетки. +
//     Создать делегирующую связь [[Prototype]] для двух конкретных приборов. +
//     У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов. +
//     Создать экземпляры каждого прибора. +
//     Вывести в консоль и посмотреть результаты работы, гордиться собой. :) +

// Общие требования:
//      Имена классов, свойств и методов должны быть информативными; +
//      Соблюдать best practices; +
//      Использовать синтаксис ES6. +

class OpenClose {
    constructor(socketCondition) {
        this.socketCondition = socketCondition
    }

    socketOn() {
        return this.socketCondition = true
    }

    socketOff() {
        return this.socketCondition = false
    }
}

class Technology extends OpenClose {
    constructor(name, serialNr, compute, socketCondition) {
        super(socketCondition);
        this.name = name;
        this.serialNr = serialNr;
        this.compute = compute;
    }

    calculation() {
        if (this.socketCondition) {
            return this.compute * (12 * 2) / 1000
        } else {
            return "Not plugged in!"
        }
    }
}


const computer = new Technology("SAMSUNG", "O28347T", 100)
computer.socketOff()
console.log(computer.name, computer.serialNr, computer.calculation())

const TV = new Technology("APPLE", "I8W34765TB", 4)
TV.socketOn()
console.log(TV.name, TV.serialNr, TV.calculation())