// Нужно вывести в консоль количество чётных и нечётных элементов в массиве.

// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

// При выполнении задания необходимо учесть, что массив может содержать
// не только числа, но и, например, знаки, null и так далее.

// Оформите решение в виде функции, постарайтесь дать этой функции корректное название,
// вызовите функцию.

// const object = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // array to check
const object = [1, 2, 3, 4, null, 6, 7, "8", 9, 0]; // array to check

function checkElement() {
    let even = 0;
    let odd = 0;
    let zero = 0;
    let different = 0;
    let counter = 0;


    while (counter < object.length) {
        if (typeof object[counter] !== "number") {
            different += 1;
            counter += 1;
        } else if (object[counter] === 0) {
            zero += 1;
            counter += 1;
        } else if (object[counter] % 2 !== 0) {
            odd += 1;
            counter += 1;
        } else if (object[counter] % 2 === 0) {
            even += 1;
            counter += 1;
        }
    }

    console.log(even + " even");
    console.log(odd + " odd");
    console.log(zero + " zero");
    console.log(different + " different");
    console.log(counter + " counter");
}

checkElement();