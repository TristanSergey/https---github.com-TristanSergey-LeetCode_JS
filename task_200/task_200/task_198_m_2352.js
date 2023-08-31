// Учитывая сетку целочисленной матрицы размера n x n с нулевым индексом, 
// верните количество пар(ri, cj) таких, что строка ri и столбец cj равны.
// Пара строк и столбцов считается равной, если они содержат одинаковые 
// элементы в одном и том же порядке(т.е.одинаковый массив).
// 2352

grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]]
grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]

var equalPairs = function (grid) {
    const length = grid.length - 1;
    new hashTable = new Map()

    for (let i = 0; i < length; i++) {

        for (let i = 0; i; i++) {
            hashTable.set(grid[i], (hashTable.get(grid[i]) ?? 0) + 1);
        }



    }


};

console.log(equalPairs(grid))