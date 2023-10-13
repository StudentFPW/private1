// Вам дана заготовка и результат, который вы должны получить.
// Напишите код, который будет преобразовывать XML в dict и выводить его в консоль.

// XML:
const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>`;

// JS-объект:
//
// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }

// ---------------------------------------------------------------------------------------------------------------------

/* Этап 1. Подготовка данных */
// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
// console.log('xmlString', xmlString);

// ---------------------------------------------------------------------------------------------------------------------

/* Этап 2. Получение данных */
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const mainListNode = xmlDOM.querySelector("list");
const studentNode = mainListNode.querySelectorAll("student");

let list = []

studentNode.forEach(function (item) {
    const nameNode = item.querySelector("name");
    const firstNode = nameNode.querySelector("first");
    const secondNode = nameNode.querySelector("second");

    const ageNode = item.querySelector("age");
    const profNode = item.querySelector("prof");

    // Получение данных из атрибутов
    const langAttr = nameNode.getAttribute('lang');
    // console.log('langAttr', langAttr);

    /* Этап 3. Запись данных в результирующий объект */
    const result = {
        name: firstNode.textContent + " " + secondNode.textContent,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr,
    };

    list.push(result)
});

console.log(list);