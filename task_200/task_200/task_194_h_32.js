// Учитывая строку, содержащую только символы '(' и ')', 
// верните длину самых длинных допустимых(правильно сформированных) круглых скобок.
// 32

s = ")()())";
s = ')(()((())())()))()'
// s = ')(()())))((())())()()()'
//s = ')())()())))()()()'
//s = "(()"
s = "()(()"
var longestValidParentheses = function (s) {

    const stack = [];
    let answer = 0;
    let currentCount = 0;

    for (let i = 0; i < s.length; i++) {
        console.log(' --------  ')
        if (s[i] === '(') {
            stack.push(1);
            currentCount++;
        }

        if (s[i] === ')') {
            if (stack.length === 0) {
                currentCount = 0;
            } else {
                stack.pop(0);
                currentCount++;
            }
        }
        answer = Math.max(answer, currentCount);
        // if (s[i] === ')') {
        //     stack.pop(1);
        //     currentCount++;
        // }

        console.log(stack)
        console.log(currentCount + ' - currentCount- ' + answer + ' - answer - ' + stack.length + ' - stack.length - ')
    }

    return answer - stack.length;
};

console.log(longestValidParentheses(s))