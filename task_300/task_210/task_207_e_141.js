﻿// Учитывая заголовок, заголовок связанного списка, определите, есть ли в связанном списке цикл.
// В связанном списке существует цикл, если в списке есть некоторый узел, к которому можно снова добраться, 
// непрерывно следуя по следующему указателю.Внутри pos используется для обозначения индекса узла, 
// к которому подключен следующий указатель хвоста.Обратите внимание, что pos не передается в качестве параметра.
// Возвращайте true, если в связанном списке есть цикл.В противном случае верните false.
// 141


function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */

let head = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(4, new ListNode(2)))));
var hasCycle = function (head) {

    if (!head || !head.next) {
        return false; // Если список пуст или содержит только один элемент, то нет цикла
    }

    let slow = head; // Указатель, двигающийся с постоянной скоростью
    let fast = head; // Указатель, двигающийся с удвоенной скоростью

    while (fast && fast.next) {
        slow = slow.next; // Перемещаем медленный указатель на одну позицию
        fast = fast.next.next; // Перемещаем быстрый указатель на две позиции

        if (slow === fast) {
            return true; // Указатели встретились, значит, есть цикл
        }
    }

    return false;
};


console.log(hasCycle(head))