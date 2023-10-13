// Написать функцию, которая создает пустой объект, но без прототипа.

function NoProto() {
    const empty = Object.create(null);
    console.log(empty.constructor);
    console.log(empty.getPrototypeOf);
    console.log(empty.__proto__) // ТОЛЬКО ДЛЯ ТЕСТА Я ЗНАЮ, НЕ РЕКОМЕНДУЕТСЯ
}

NoProto()