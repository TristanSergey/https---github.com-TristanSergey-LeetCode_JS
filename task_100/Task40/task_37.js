﻿// Учитывая массив arr и функцию fn, вернуть отсортированный массив sortedArr.
// Вы можете предположить, что fn возвращает только числа, и эти числа определяют 
// порядок сортировки sortedArr.sortedArray должен быть отсортирован в порядке возрастания по выходу fn.
// Вы можете предположить, что fn никогда не будет дублировать числа для данного массива.

//2695

//let arr = [5, 4, 1, 2, 3];
//let fn = (x) => x;

let arr = [{ "x": 1 }, { "x": 0 }, { "x": -1 }];
let fn = (d) => d.x;

function sortBy(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};


sortBy(arr, fn);