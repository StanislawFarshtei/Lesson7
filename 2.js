/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */


const collect = function (arr) {
    if(!Array.isArray(arr)) {
        throw new Error('The function argument should be an array');
    }

    const flattenedArray = arr.flat(Infinity); // Deep array flat;
    if(!Array.isArray(flattenedArray)) {
        throw new Error('The function argument should be an array');
    }

    if (flattenedArray.length){
        return flattenedArray.reduce(function (sum, element) {
            if (typeof element !== 'number') {
                throw new Error('Function argument has to be an empty array or an array with number type values');
            }

            return sum + element;

        }, 0);
    } else {
        return 0;
    }

}

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array0 = [];
console.log(collect(array0)); // 0

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3
//
const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3




