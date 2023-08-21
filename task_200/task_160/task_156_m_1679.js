// Вам дан целочисленный массив nums и целое число k.
// За одну операцию вы можете выбрать из массива два числа, сумма которых равна k, и удалить их из массива.
// Возвращает максимальное количество операций, которые вы можете выполнить над массивом.
// 1679

nums = [3, 1, 3, 4, 2, 3], k = 6

var maxOperations = function (nums, k) {

    const hashTable = new Map();
    let left = 0;
    let count = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     if (hashTable.has(nums[i])) {
    //         hashTable.set(nums[i], hashTable.get(nums[i]) + 1)
    //     } else {
    //         hashTable.set(nums[i], 1)
    //     }
    // }

    console.log(hashTable)
    while (left < nums.length) {
        console.log(' +++++++++ ')
        console.log(left + ' - left')

        if (hashTable.has(k - nums[left])) {
            console.log(' ----------- ')
            console.log(nums[left] + ' - nums[left]- ' + (nums[k - left]) + ' - nums[k - left] - 1 -')
            const value = hashTable.get(nums[left]);
            if (value != 0) {
                hashTable.set(nums[left], hashTable.get(nums[left]) - 1)
                console.log(hashTable)
                // hashTable.set(nums[k - left], hashTable.get(nums[k - left]) - 1)

            } else {
                hashTable.set(nums[left], hashTable.get(nums[left]) + 1)
            }
            count++;
            console.log(count + ' - count - ')
        } else {
            console.log(' ????????? ')
            console.log(nums[left] + ' - nums[left]- ')
            if (!hashTable.has(nums[left])) {
                console.log('!!!!!!!!!!!!')
                hashTable.set(nums[left], 0);
            }
            hashTable.set(nums[left], hashTable.get(nums[left]) + 1);
        }
        console.log(hashTable)
        left++;
    }
    return count;


};


console.log(maxOperations(nums, k)) 