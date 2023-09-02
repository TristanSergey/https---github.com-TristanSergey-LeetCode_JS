// Учитывая целочисленный массив arr и целочисленную разницу, вернуть длину самой длинной подпоследовательности в arr, 
// которая является арифметической последовательностью, такой что разница между соседними элементами в подпоследовательности равна разнице.
// Подпоследовательность — это последовательность, которая может быть получена из arr 
// путем удаления некоторых элементов или их отсутствия без изменения порядка оставшихся элементов.
// 1218

arr = [1, 5, 7, 8, 5, 3, 4, 2, 1];
difference = -2;

function longestSubsequence(arr, difference) {
    const hashTable = new Map();
    let maxCount = 1;
    for (const num of arr) {
        if (hashTable.has(num - difference)) {
            hashTable.set(num, hashTable.get((num - difference)) + 1)
            if (hashTable.get(num) > maxCount) maxCount = hashTable.get(num);
        } else {
            hashTable.set(num, 1);
        }
    }
    return maxCount;
};

console.log(longestSubsequence(arr, difference))