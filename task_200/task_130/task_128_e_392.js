// Имея две строки s и t, вернуть true, если s является подпоследовательностью t, или false в противном случае.
// Подпоследовательность строки — это новая строка, 
// образованная из исходной строки путем удаления некоторых(может быть ни одного) символов без нарушения взаимного 
// расположения оставшихся символов. (т.е. «туз» является подпоследовательностью «abcde», а «aec» — нет).
// 392


s = "abcz";
t = "ahbgdc";

text1 = "abcde";
text2 = "ace";
s = "";
t = ""
//s = "axc";
s = "abc";
//t = "ahbgdc"

function isSubsequence(s, t) {
    const tLength = t.length;
    const sLength = s.length;
    if (sLength === 0) return true;
    let sPoint = 0;
    //const dp = Array.from({ length: sLength }).fill(false);
    //console.log(dp)
    for (let i = 0; i < tLength; i++) {
        if (sPoint < sLength && t[i] === s[sPoint]) {
            sPoint++;
        }
        if (sPoint === sLength) return true;
    }

    //console.log(dp)
    return false;
};


console.log(isSubsequence(s, t))
























// function isSubsequence(s, t) {
//     const m = t.length;
//     const n = s.length;
//     const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
//     console.log(dp)
//     for (let i = 1; i <= t.length; i++) {
//         console.log(' --------- ')
//         for (let j = 1; j <= s.length; j++) {
//             console.log(t[i - 1] + ' - text1[i - 1]- ' + s[j - 1] + ' - text2[j - 1] - ')
//             if (t[i - 1] === s[j - 1]) {
//                 console.log(' +++++++++ ')
//                 dp[i][j] = dp[i - 1][j - 1] + 1;
//             } else {
//                 console.log(' ============ ')
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
//             }
//             console.log(dp)
//         }
//     }

//     console.log(dp)
//     return dp[m][n]
// };