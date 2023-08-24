// Учитывая целочисленный массив arr и целочисленную разницу, 
// верните длину самой длинной подпоследовательности в arr, 
// которая представляет собой арифметическую последовательность, 
// такую, что разница между соседними элементами в подпоследовательности равна разнице.
// Подпоследовательность — это последовательность, которую можно получить из arr путем 
// удаления некоторых элементов или их отсутствия без изменения порядка остальных элементов.
// 1218

arr = [1, 5, 7, 8, 5, 3, 4, 2, 1], difference = -2
arr = [1, 2, 4, 3, 5, 8, 7, 5, 1], difference = 2
//arr = [1, 2, 3, 4], difference = 1
//arr = [1, 3, 5, 7], difference = 1
var longestSubsequence = function (arr, difference) {

    const hashTable = new Map();
    let maxCount = 1;

    for (const num of arr) {
        console.log('-------------')
        console.log(num - difference)
        if (hashTable.has(num - difference)) {
            console.log(' ==== ')
            hashTable.set(num, hashTable.get((num - difference)) + 1)
            if (hashTable.get(num) > maxCount) maxCount = hashTable.get(num);

        } else {
            hashTable.set(num, 1);
        }

        console.log(hashTable)

    }

    hashTable.sort((a, b) => a - b)

    console.log(hashTable)

    return maxCount;
};

console.log(longestSubsequence(arr, difference))