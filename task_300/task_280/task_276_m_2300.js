﻿// Вам даны два массива заклинаний и зелий положительных целых чисел длиной n и m соответственно, 
// где Spells[i] представляет силу i - го заклинания, а potions[j] представляет силу j - го зелья.
// Вам также дается целочисленный успех.Пара заклинаний и зелий считается успешной, 
// если произведение их сильных сторон равно успеху.
// Возвращает целочисленный массив пары длины n, где пары[i] — это количество зелий, 
// которые образуют успешную пару с i - м заклинанием.
// 2300


spells = [5, 1, 3], potions = [1, 2, 3, 4, 5], success = 7



var successfulPairs = function (spells, potions, success) {

    potions.sort((a, b) => a - b)




};


console.log(successfulPairs(spells, potions, success))