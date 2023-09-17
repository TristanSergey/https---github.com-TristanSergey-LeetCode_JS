// Дерево(произносится как «попробуй») или префиксное дерево — это древовидная структура данных, 
// используемая для эффективного хранения и извлечения ключей в наборе строк.
// Существуют различные приложения этой структуры данных, такие как автозаполнение и проверка орфографии.
// Реализуйте класс Trie:
// Trie() Инициализирует объект дерева.
// void Insert(String word) Вставляет строковое слово в дерево.
// boolean search(String word) Возвращает true, если строковое слово находится в дереве(т.е.было вставлено ранее), 
// и false в противном случае.
// логическое значение startWith(String prefix) Возвращает true, если ранее было вставлено строковое слово с 
// префиксом - префиксом, и false в противном случае.
// 208



var Trie = function () {
    this.hash = new Set();
};

Trie.prototype.insert = function (word) {
    this.hash.add(word);
};

Trie.prototype.search = function (word) {
    if (this.hash.has(word)) {
        return true;
    } else {
        return false;
    }
};

Trie.prototype.startsWith = function (prefix) {

    const arr = prefix.join('');

    for (let i = 0; i < prefix.length; i++) {



    }
}


};

var obj = new Trie()
obj.insert(word)
var param_2 = obj.search(word)
var param_3 = obj.startsWith(prefix)
