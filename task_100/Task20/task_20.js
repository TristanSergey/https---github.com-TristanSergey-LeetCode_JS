// Вы профессиональный грабитель, планирующий ограбить дома вдоль улицы.
// В каждом доме спрятана определенная сумма денег, единственное ограничение, 
// мешающее вам ограбить каждый из них, заключается в том, что в соседних 
// домах подключены системы безопасности, и она автоматически свяжется с 
// полицией, если два соседних дома будут взломаны в одну и ту же ночь.
// Учитывая целочисленный массив nums, представляющий сумму денег в каждом 
// доме, верните максимальную сумму денег, которую вы можете ограбить сегодня 
// вечером, не предупредив полицию

// 198

//let nums = [1, 2, 3, 1];
//let nums = [2, 7, 9, 3, 1];
//let nums = [1];
//let nums = [2, 1];
let nums = [2, 3, 2];
//let nums = [];
//let nums = [6, 1, 2, 10, 4];
//let nums = [6, 3, 2, 8, 4, 1, 7];



function rob(nums) {

    let sum = [];

    if (nums.length == 0) {
        return -1;
    }
    if (nums.length == 1) {
        return nums[0];
    }
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1]);
    }
    sum[0] = nums[0];
    sum[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        console.log(i + ' -- i');
        sum.push(Math.max(sum[i - 2] + nums[i], sum[i - 1]));
        console.log(sum);
    }

    return sum[sum.length - 1];
};

console.log(rob(nums));



  // let sum = 0;
    // let set = new Set();
    // const sortedArray = [...nums.entries()].sort((a, b) => a[1] - b[1]);
    // let i = sortedArray.length - 1;
    // console.log(i + '-- i');
    // console.log(sortedArray);
    // while (i >= 0) {

    //     if (i == sortedArray.length - 1) {
    //         console.log('i = length - 1');

    //         sum += sortedArray[i][1];
    //         set.add(sortedArray[i][0]);
    //         console.log(sum + ' -- sum');
    //         console.log(set);
    //     } else {
    //         if (i == 0) {
    //             console.log('i = 0');
    //             console.log(sortedArray[i][0] + 1 + ' -- sortedArray[i][0] + 1');
    //             if (!(set.has(sortedArray[i][0] + 1) || (set.has(sortedArray[i][0] - 1)))) {
    //                 sum += sortedArray[i][1];
    //                 set.add(sortedArray[i][0]);
    //                 console.log(sum + ' -- sum');
    //                 console.log(set);
    //             }
    //         }
    //     }
    //     if ((i > 0) && (i < sortedArray.length - 1)) {
    //         if (!(set.has(sortedArray[i][0] + 1) || (set.has(sortedArray[i][0] - 1)))) {
    //             sum += sortedArray[i][1];
    //             set.add(sortedArray[i][0]);
    //         }
    //     }
    //     i--;
    //     console.log(i + '-- i');
    // }
    // return sum;