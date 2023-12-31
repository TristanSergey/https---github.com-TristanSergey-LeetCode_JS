﻿// Вам дан целочисленный массив costs с нулевым индексом, где costs[i] — это стоимость найма i - го работника.
// Вам также даны два целых числа k и кандидаты. Мы хотим нанять ровно k работников по следующим правилам:
// Вы проведете k сеансов и наймете ровно одного работника в каждом сеансе.
// В каждом сеансе найма выбирайте работника с наименьшими затратами либо из первых кандидатов, 
// либо из последних кандидатов.Разорвите ничью по наименьшему индексу.
// Например, если затраты = [3, 2, 7, 7, 1, 2] и кандидаты = 2, 
// то в первом сеансе найма мы выберем 4 - го работника, 
// потому что у него самая низкая стоимость[3, 2, 7, 7, 1, 2].
// Во втором сеансе найма мы выберем 1 - го работника, потому что у него такая же самая низкая стоимость, как и у 4 - го работника, 
// но у него наименьший индекс[3, 2, 7, 7, 2].Обратите внимание, что индексация может быть изменена в процессе.
// Если рабочих - кандидатов осталось меньше, выберите среди них работника с наименьшей стоимостью.
// Разорвите ничью по наименьшему индексу. Работника можно выбрать только один раз.
// Найдите общую стоимость найма ровно k работников.
// Поддерживайте две миникучи: одну для левой и одну для правой стороны.
// Сравните верхний элемент из двух куч и удалите соответствующий.
// Добавьте в кучу новый элемент и сохраните его размер как k.
// 2462
//const PriorityQueue = require('js-priority-queue');
costs = [17, 12, 10, 2, 7, 2, 11, 20, 8], k = 3, candidates = 4
costs = [31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58], k = 11, candidates = 2
costs = [17, 12, 10, 2, 7, 2, 11, 20, 8], k = 3, candidates = 4
var totalCost = function (costs, k, candidates) {


    let answer = 0;
    let leftPoint = 0;
    let rightPoint = costs.length - 1;
    let max = 1e5 + 1;
    let queue1 = new MinPriorityQueue();
    let queue2 = new MinPriorityQueue();
    queue1.enqueue(max);
    queue2.enqueue(max);

    for (let i = 0; i < k; i++) {
        while (queue1.size() <= candidates && leftPoint <= rightPoint) {
            queue1.enqueue(costs[leftPoint]);
            leftPoint++;
        }
        while (queue2.size() <= candidates && leftPoint <= rightPoint) {
            queue2.enqueue(costs[rightPoint]);
            rightPoint--;
        }
        let queue = queue1.front().element <= queue2.front().element ? queue1 : queue2
        answer += queue.dequeue().element;
    }
    return answer;


};
console.log(totalCost(costs, k, candidates))
