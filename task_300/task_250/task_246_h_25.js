// Учитывая заголовок связанного списка, поменяйте местами узлы списка k за раз
// и верните измененный список.
// k — целое положительное число, меньшее или равное длине связанного списка.
// Если количество узлов не кратно k, то пропущенные узлы в конечном итоге должны остаться такими,
// какие они есть.
// Вы не можете изменять значения в узлах списка, можно изменять только сами узлы.
// 25


const util = require('util');
util.inspect.defaultOptions.depth = null;


function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, null)))))))));
k = 3;

var reverseKGroup = function (head, k) {

    if (!head || !head.next) return head;
    let previousGroupNode = null;
    let currentNode = head;

    //while (currentNode && currentNode.next) {
    while (currentNode !== null) {
        let count = 1;
        let previousNode = null;
        while (count <= k) {
            //console.log(currentNode.next)
            const temp = currentNode.next;
            //console.log(temp)
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = temp;
            count++
        }
        const tempGroup = previousNode;
        previousGroupNode = previousNode;
        //console.log(previousGroupNode)
    }
    return previousGroupNode;

};

console.log(reverseKGroup(head, k))