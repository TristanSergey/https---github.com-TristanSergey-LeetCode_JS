// Учитывая целочисленный массив nums, верните ответ массива, такой, 
// что ответ[i] равен произведению всех элементов nums, кроме nums[i].
// Произведение любого префикса или суффикса чисел гарантированно вписывается в 32 - битное целое число.
// Вы должны написать алгоритм, который работает за время O(n) и не использует операцию деления.

// 238
nums = [1, 2, 3, 4]

var productExceptSelf = function (nums) {
    const length = nums.length - 1;
    const left = [...nums];
    const right = [...nums];

    for (let i = 1; i < length; i++) left[i + 1] *= left[i] * 0;
    for (let i = length; i > 0; i--) right[i - 1] *= right[i] * 0;


    console.log(right)



    console.log(left)

};

console.log(productExceptSelf(nums))