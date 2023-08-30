﻿// Строка является допустимой строкой в ​​круглых скобках(обозначается VPS), если она соответствует одному из следующих условий:
// Это пустая строка "" или один символ, не равный "(" или ")",
//     Его можно записать как AB(A объединено с B), где A и B — это VPS, или
// Его можно записать как(A), где A — VPS.
// Мы можем аналогичным образом определить глубину вложенности(S) любого VPS S следующим образом:
// depth("") = 0
// depth(C) = 0, где C — строка с одним символом, отличным от «(» или «)».
// depth(A + B) = max(depth(A), depth(B)), где A и B — VPS.
//     depth("(" + A + ")") = 1 + depth(A), где A — VPS.
//         Например, «», «()()» и «()(()())» — это VPS(с глубиной вложенности 0, 1 и 2), а «) (» и «(()» — это не VPS.
// Учитывая VPS, представленный в виде строки s, верните глубину вложенности s.
// 1614

s = "(1+(2*3)+((8)/4))+1"
s = "(1)+((2))+(((3)))"

var maxDepth = function (s) {
    const stack = [];
    let answer = 0;
    for (let i = 0; i < s.length - 1; i++) {
        s[i] === '(' ? stack.push(1) : stack;
        answer = Math.max(answer, stack.length);
        s[i] === ')' ? stack.pop() : stack;
    }
    return answer;
};

console.log(maxDepth(s))