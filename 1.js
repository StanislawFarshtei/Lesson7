/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];

const newArray = [
    777,
    true,
    'stas',
    'Oleg',
    {
        name: 'Stas',
        surname: 'Farshtei',
    },
]

const newArr2 = {
    name: 'Johnny',
    age: 32,
}

const inspect = function (arr) {
    if (!Array.isArray(arr)) {
        throw new Error('First parameter has to be an array')
    }
    const filteredArray = arr.filter(function (element) {
        return typeof element === 'string';
    })
    // [] → filteredArray.length → 0 → false → !false → true
    if (!filteredArray.length) {
        return [];
    }

    return filteredArray.map(function (element) {
        return element.length;
    });
}

const result = inspect(newArr2);
console.log(result); // [ 7, 11, 7, 12 ]



