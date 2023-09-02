// Учитывая закодированную строку, верните ее декодированную строку.
// Правило кодирования: k[encoded_string], где закодированная_строка внутри квадратных скобок повторяется ровно k раз.
// Обратите внимание, что k гарантированно будет положительным целым числом.
// Вы можете предположить, что входная строка всегда действительна; нет лишних пробелов, квадратные скобки имеют правильную форму и т.д.
// Кроме того, вы можете предположить, что исходные данные не содержат никаких цифр и 
// что цифры предназначены только для повторяющихся чисел k.Например, не будет ввода типа 3a или 2[4].
// Тестовые примеры генерируются таким образом, что длина вывода никогда не превышает 105.
// 394

s = "3[a]2[bc]" //"aaabcbc"
s = "11[a2[cd]]"  //"accaccacc"
s = "2[abc]3[cd]ef" //"abcabccdcdcdef"
s = '3';

var decodeString = function (s) {
    let answer = '';
    const queueNumber = [];
    const queueChar = [];
    let pointer = 0;

    while (pointer < s.length) {
        let letters = '';
        while (s[pointer] >= 'a' && s[pointer] <= 'z') {
            letters += s[pointer];
            pointer++
        }
        if (letters.length > 0) queueChar.push(letters)
        letters = '';
        while (s[pointer] >= '0' && s[pointer] <= '9') {
            letters += s[pointer];

            pointer++
        }
        if (letters.length > 0) queueNumber.push(letters)
        pointer++;
    }

    while (queueChar.length > 0 && queueNumber.length > 0) {
        const num = queueNumber.pop();
        const char = queueChar.pop()
        console.log(num + ' - num - ' + char + ' - char - ')
        let quantity = 1;
        while (quantity <= num) {
            answer = char + answer;
            quantity++;
        }
        console.log(queueChar)
        console.log(queueNumber)
        console.log(answer)
    }
    return answer;

};

console.log(decodeString(s))