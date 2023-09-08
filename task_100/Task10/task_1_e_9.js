// Учитывая целое число x, верните true, если x является
// палиндром и false в противном случае.
// 9

// function findPalindromes(arr) {
//     let palindromArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isCurrent = arr[i];
//         let isEquality = true;
//         for (let j = 0; j < isCurrent.length / 2; j++) {
//             if (!(isCurrent[j] === isCurrent[isCurrent.length - j - 1])) {
//                 isEquality = false;
//                 break;
//             }
//         }
//         if (isEquality) {
//             palindromArray.push(isCurrent);
//         }
//     }
//     return palindromArray;
// }

function findPalindromes(head) {
    return head.filter((item) => {
        for (let i = 0; i < head.length; i++) {
            if (item[i] !== item[item.length - i - 1]) {
                return false;
            }
        }
        return true;
    });
}

console.log(findPalindromes(words));
