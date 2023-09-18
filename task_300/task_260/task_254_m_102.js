﻿// Учитывая корень двоичного дерева, верните порядок прохождения уровней значений его узлов. 
// (т.е.слева направо, уровень за уровнем).
// 102


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(5);
const node1 = new TreeNode(3);
const node2 = new TreeNode(6);
const node3 = new TreeNode(2);
const node4 = new TreeNode(4);
const node5 = new TreeNode(7);
const node6 = new TreeNode(null);
const node7 = new TreeNode(null);
const node8 = new TreeNode(1);


// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node6;
node2.right = node5;
node3.left = node8;
node3.right = node7;

var levelOrder = function (root) {

    if (!root) return [];

    const result = [];

    const queue = [root];
    while (queue.length) {
        const levelSize = queue.length;
        const levelNodes = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            levelNodes.push(node.val);


            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }


        result.push(levelNodes);
    }

    return result;
};

console.log(levelOrder(root))