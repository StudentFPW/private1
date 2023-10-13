// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым,
// и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны.

function numChecker(num) {

    let simple_num = 0;

    if (num > 1000) {
        return console.log("Данные неверны");
    } else {

        for (let cnt = 0; cnt <= num; cnt += 1) {
            if (num % cnt === 0) {
                simple_num += 1;
            }
        }

        if (simple_num > 2) {
            console.log(`${num} составное число, делится на ${simple_num} числ* !`);
        } else if (simple_num === 2) {
            console.log(`${num} простое число !`);
        } else {
            console.log(`${num} не является ни простым, ни составным.`);
        }

    }
}

numChecker(3);