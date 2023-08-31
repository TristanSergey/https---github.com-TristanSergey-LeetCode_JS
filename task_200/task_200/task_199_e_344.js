// Напишите функцию, которая переворачивает строку.Входная строка задается как массив символов s.
// Вы должны сделать это, изменив входной массив на месте с дополнительной памятью O(1).
// 344

s = ["h", "e", "l", "l", "o"]

var reverseString = function (s) {
    const length = s.length - 1;
    for (let i = 0; i <= length; i++) {

        const char = s.shift();
        s.push(char);
        console.log(char)
        console.log(s)
    }


};

console.log(reverseString(s))
