// Рассмотрим все листья двоичного дерева, слева направо, значения этих листьев образуют 
// последовательность значений листьев.
// Например, в приведенном выше дереве последовательность значений листьев равна(6, 7, 4, 9, 8).
// Два бинарных дерева считаются листоподобными, если их последовательность значений листьев одинакова.
// Возвращает true тогда и только тогда, когда два заданных дерева с головными узлами root1 и root2 
// являются листоподобными.
// 872


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// // Создаем узлы
// const root = new TreeNode(3);
// const node1 = new TreeNode(9);
// const node2 = new TreeNode(20);
// const node3 = new TreeNode(null);
// const node4 = new TreeNode(null);
// const node5 = new TreeNode(15);
// const node6 = new TreeNode(7);
// // Связываем узлы
// root.left = node1;
// root.right = node2;
// node1.left = node3;
// node1.right = node4;
// node2.left = node5;
// node2.right = node6;


// Создаем узлы
const root = new TreeNode(3);
const node1 = new TreeNode(5);
const node2 = new TreeNode(1);
const node3 = new TreeNode(6);
const node4 = new TreeNode(2);
const node5 = new TreeNode(9);
const node6 = new TreeNode(8);
const node7 = new TreeNode(null);
const node8 = new TreeNode(null);
const node9 = new TreeNode(7);
const node10 = new TreeNode(4);

// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;
node3.left = node7;
node3.right = node8;
node4.left = node9;
node4.right = node10;

var leafSimilar = function (root1, root2) {



};


console.log(leafSimilar(root1, root2)) 