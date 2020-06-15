/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

const createArray = function (value, numOfElementsInArray) {
    if (!Array.isArray(value) && typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'object') {
        throw new Error('The first argument of the function should be a string, a number, an object or an array.');
    }
    if (typeof numOfElementsInArray !== 'number') {
        throw new Error('Second function argument should be a number');
    }

    const arrayValue = new Array(numOfElementsInArray);
    return arrayValue.fill(value);

}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;