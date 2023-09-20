// Вам дан массив из k списков связанных списков,
// каждый связанный список отсортирован в порядке возрастания.
// Объедините все связанные списки в один отсортированный
// связанный список и верните его.
// 23


const util = require('util');
util.inspect.defaultOptions.depth = null;
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let list1 = new ListNode(1, new ListNode(4, new ListNode(5, null)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

var mergeKLists = function (lists) {

    let answer = null;

    function mergedLists(list1, list2) {

        if (!list1) return list2;
        if (!list2) return list1;

        if (list1.val < list2.val) {
            list1.next = mergedLists(list1.next, list2);
            return list1;
        } else {
            list2.next = mergedLists(list1, list2.next);
            return list2;
        }

    }

    for (let i = 0; i < lists.length; i++) answer = mergedLists(answer, lists[i])
    return answer;

};

console.log(mergeKLists(list1, list2))