﻿// Учитывая целые числа ноль, единица, нижнее и высокое, мы можем построить строку, начав с пустой строки, 
// а затем на каждом шаге выполняя одно из следующих действий:
// Добавьте символ «0» ноль раз.
// Добавьте символ «1» один раз.
// Это можно выполнять любое количество раз.
// Хорошая строка — это строка, созданная с помощью описанного выше процесса, 
// имеющая длину от младшей до высокой(включительно).
// Возвращает количество различных хороших строк, которые можно построить, удовлетворяя этим свойствам.
// Поскольку ответ может быть большим, верните его по модулю 109 + 7.
// 2466

low = 2, high = 3, zero = 1, one = 2

low = 3, high = 3, zero = 1, one = 1


var countGoodStrings = function (low, high, zero, one) {

};

console.log(countGoodStrings(low, high, zero, one))