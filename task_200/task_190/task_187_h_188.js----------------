// Вам дан целочисленный массив цен, где цены[i] — цена данной акции на i-й день, и целое число k.
// Найдите максимальную прибыль, которую вы можете получить. Вы можете совершить не более k транзакций: 
// т. е. вы можете купить не более k раз и продать не более k раз.
// Примечание. Вы не можете совершать несколько транзакций одновременно (т. е. вы должны продать акции, прежде чем купить их снова).
// 188


k = 2, prices = [3, 2, 6, 5, 0, 3]

//k = 2, prices = [1, 2, 4]

var maxProfit = function (k, prices) {
    let answer = 0;
    if (prices.length === 1) return 0;

    const dp = Array.from({ length: prices.length }).fill(0);
    //const dp = Array.from({ length: prices.length }, () => Array(prices.length).fill(0));
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {

            console.log(prices[i] + ' - prices[i] - ' + prices[j] + ' - prices[j] -')
            dp[i] = prices[j] - prices[i]

            console.log(dp)
        }
    }
    dp.sort((a, b) => b - a)
    for (let i = 0; i < k; i++) {
        answer += dp[i]
    }

    console.log(dp)
    return answer;
};

console.log(maxProfit(k, prices))

































//var maxProfit = function (k, prices) {
//     let answer = 0;
//     if (prices.length === 1) return 0;
//     const dp = Array.from({ length: prices.length }).fill(0);

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {

//             console.log(prices[i] + ' - prices[i] - ' + prices[j] + ' - prices[j] -')
//             dp[i] = Math.max(dp[i], prices[j] - prices[i])

//             console.log(dp)
//         }
//     }
//     dp.sort((a, b) => b - a)
//     for (let i = 0; i < k; i++) {
//         answer += dp[i]
//     }

//     console.log(dp)
//     return answer;
// };
