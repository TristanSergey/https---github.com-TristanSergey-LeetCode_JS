// Вам дан двумерный массив целых чисел конвертов, где конверты[i] = [wi, hi] представляют ширину и высоту конверта.
// Один конверт может поместиться в другой тогда и только тогда, когда ширина и высота одного конверта больше ширины и высоты другого конверта.
// Вернуть максимально возможное количество конвертов русской кукле(т.е.вложить один в другой).
// Примечание.Конверт нельзя повернуть.
// 374

let envelopes = [[5, 4], [6, 4], [8, 7], [2, 3], [6, 5]];
//envelopes = [[1, 1], [1, 1], [1, 1]];

var maxEnvelopes = function (envelopes) {
    function biSearch(arr, target) {
        console.log(target + ' - target')
        let left = 0;
        let right = envelopes.length - 1;
        while (left <= right) {
            let middle = (left + right) >> 1;
            if (middle == target) {
                return middle;
            } else if (arr[middle] > target) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }
        console.log('   ---   ')
    }
    envelopes.sort((a, b) => a[1] - b[1])
    console.log(envelopes)
    const dp = Array.from({ length: envelopes.length }).fill(1);

    for (let i = 0; i < envelopes.length; i++) {

        //biSearch(envelopes,i);
        //console.log(envelopes[i][0])
        console.log(biSearch(envelopes, envelopes[i][0]))
        // for (let j = 0; j < i; j++) {
        //     if ((envelopes[j][0] < envelopes[i][0]) && (envelopes[j][1] < envelopes[i][1])) dp[i] = Math.max(dp[i], dp[j] + 1)
        //     //       console.log(dp)
        // }
    }

    return Math.max(...dp)

};

console.log(maxEnvelopes(envelopes));