// Given an integer array nums, a reducer function fn, 
// and an initial value init, return a reduced array.
// A reduced array is created by applying the 
// following operation: val = fn(init, nums[0]), 
// val = fn(val, nums[1]), val = fn(val, nums[2]), 
// ... until every element in the array has been processed.The final value of val is returned.
// If the length of the array is 0, it should return init.
// Please solve it without using the built -in Array.reduce method.

//2626

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) { return accum + curr; }
//let fn = function sum(accum, curr) { return accum + curr * curr; }
let init = 100;
val = fn(init, nums[0])


function reduce(nums, fn, init) {
    //let acc = init;
    nums.forEach(item => init = + fn(init, item))
    return init;
};

console.log(reduce(nums, fn, init));