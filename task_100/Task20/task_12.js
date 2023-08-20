// Дан массив целых чисел nums, содержащий n + 1 целых чисел,
// где каждое целое число находится в диапазоне[1, n] включительно.
// В nums есть только одно повторяющееся число, верните
// это повторяющееся число.
// Вы должны решить проблему, не изменяя массив nums и
// используя только постоянное дополнительное пространство.

//let nums = [3, 1, 3, 4, 2];
//let nums = [1, 3, 4, 2, 2];
//let nums = [1, 3, 4, 2, 5, 6, 2];

let nums = [1, 3, 4, 1, 7, 6, 2, 5];

function findDuplicate(nums) {
    // if (nums.length < 2) {
    //     return false;
    // }
    // let set = new Set();
    // //map.set = nums;
    // for (let i = 0; i < nums.length; i++) {
    //     if (set.has(nums[i])) {
    //         return nums[i]
    //     } else {
    //         set.add(nums[i]);
    //     }
    // }

    // let slow = 0, fast = 0;
    // while (true) {
    //     slow = nums[slow]
    //     console.log(slow + ' -slow- ' + nums[slow] + ' -nums[slow]- ');
    //     fast = nums[nums[fast]]
    //     console.log(fast + ' -fast- ' + nums[fast] + ' -nums[fast]- ');
    //     if (slow === fast) break;
    // }

    // console.log(fast + ' -fast- ' + slow + ' -slow- ');
    // fast = 0;
    // while (true) {
    //     slow = nums[slow]
    //     fast = nums[fast]
    //     if (slow === fast) return slow
    // }

    // if (slow === fast) {
    //     return slow;
    // } else {
    //     return null; // или return -1; или другое подходящее значение
    // }

    //console.log(map);
    // let right = nums.length - 1;

    // for (let left = 0; left < nums.length; left++) {
    //     while (right > left) {
    //         if (nums[left] != nums[right]) {
    //             right--;
    //         } else {
    //             return nums[left]
    //         }

    //     }
    //     right = nums.length - 1;
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = nums.length; j > i; j--) {
    //         if (nums[i] == nums[j]) {
    //             return nums[i];
    //         }
    //     }
    // }

    let slow = 0;
    let fast = 0;

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) {
            break;
        }
    }
    fast = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[fast];
        if (slow === fast) {
            return slow;
        }
    }
}

console.log(findDuplicate(nums));
