// Учитывая числа целочисленного массива, верните true, если какое - либо значение встречается
// в массиве хотя бы дважды, и верните false, если каждый элемент различен.
// 217
// Перенес 08092023 с файла D:\Program\LeetCodeJS\task_100\Task10\task_2_m_347.js. Было две задачи в одном файле.
nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

function containsDuplicate(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
    //         return true;
    //     }
    // }
    // return false;

    for (let i = 0; i < nums.length; i++) {
        //console.log(nums[i] + '-------' + (i+1))
        if (nums.includes(nums[i], i + 1)) {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicate(nums))