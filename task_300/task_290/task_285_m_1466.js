﻿// Существует n городов с номерами от 0 до n - 1 и n - 1 дорог, 
// так что между двумя разными городами можно путешествовать 
// только одним способом(эта сеть образует дерево).
// В прошлом году Минтранс принял решение сориентировать дороги 
// в одном направлении, поскольку они слишком узкие.
// Дороги представлены соединениями, где соединения[i] = [ai, bi] 
// представляют собой дорогу из города ai в город bi.
// В этом году в столице(город 0) состоится большое мероприятие, 
// и многие люди хотят поехать в этот город.
// Ваша задача состоит в том, чтобы переориентировать некоторые дороги так, 
// чтобы каждый город мог посетить город 0. Вернуть минимальное количество измененных ребер.
// Гарантируется, что каждый город может достичь города 0 после переупорядочения.
// 1466


n = 6, connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]

var minReorder = function (n, connections) {





    answer = 0;


    function dfs(node, parent, graph) {
        for (const [child, sign] of graph[node]) {
            if (child !== parent) {
                answer += sign;
                dfs(child, node, graph);
            }
        }
    };


    const graph = new Array(n).fill().map(() => []);
    console.log(graph)
    for (const item of connections) {
        console.log(item)
        const [a, b] = item;
        graph[a].push([b, 1]);
        graph[b].push([a, 0]);
        //console.log(graph)
    }


    dfs(0, -1, graph);
    return answer;




};


console.log(minReorder(n, connections))