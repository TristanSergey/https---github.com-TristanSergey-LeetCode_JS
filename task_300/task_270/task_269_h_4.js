// Учитывая два отсортированных массива nums1 и nums2 размера m и n соответственно, 
// верните медиану двух отсортированных массивов.
// Общая сложность времени выполнения должна составлять O(log(m + n)).
// 4

nums1 = [1, 3], nums2 = [2]
nums1 = [1, 2], nums2 = [3, 4]
nums1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
nums1 = [1, 4, 8, 9, 12, 15, 16];
nums2 = [2, 3, 5, 6, 7, 11, 14, 18, 21, 25];



var findMedianSortedArrays = function (nums1, nums2) {
    const combined = [];


    let i = 0;
    let j = 0;



    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            combined.push(nums1[i]);
            i++;
        } else {
            combined.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        combined.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        combined.push(nums2[j]);
        j++;
    }

    console.log(i + ' - i')
    console.log(j + ' - j')
    console.log(combined)


    var length = combined.length;
    // Если массив имеет четное количество элементов, найдем среднее арифметическое двух центральных элементов
    if (length % 2 === 0) {
        var mid1 = combined[length / 2 - 1];
        var mid2 = combined[length / 2];
        return (mid1 + mid2) / 2;
    } else {
        // Если массив имеет нечетное количество элементов, медианой будет центральный элемент
        return combined[Math.floor(length / 2)];
    }
};

console.log(findMedianSortedArrays(nums1, nums2))


// The naive solution doesn't look so bad either.
//     `Beats 41.02%of users with JavaScript`