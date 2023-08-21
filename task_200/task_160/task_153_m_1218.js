// Учитывая целочисленный массив arr и целочисленную разницу, вернуть длину самой длинной подпоследовательности в arr, 
// которая является арифметической последовательностью, такой что разница между соседними элементами в подпоследовательности равна разнице.
// Подпоследовательность — это последовательность, которая может быть получена из arr путем удаления некоторых элементов
//  или их отсутствия без изменения порядка оставшихся элементов.
//  1218

arr = [1, 5, 7, 8, 5, 3, 4, 2, 1], difference = -2

var longestSubsequence = function (arr, difference) {

    //let hash = new Map();
    const hashTable = {};

    for (let i = 0; i < arr.length; i++) {
        hashTable[i] = arr[i]
    }
    console.log(hashTable)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] - arr[i] === difference) {
                let key;
                if (key in hashTable) {
                    const retrievedValue = hashTable[key];
                    hashTable[key] = retrievedValue + 1;
                } else {
                    hashTable[key] = 1;
                }


                // if (hash.has(arr[j])) {
                //     hash.set(arr[j], hash.get(arr[j]) + 1)
                // } else {
                //     hash.set(arr[j], 1)
                // }
            }

        }
    }

    console.log(hashTable)


};


console.log(longestSubsequence(arr, difference))