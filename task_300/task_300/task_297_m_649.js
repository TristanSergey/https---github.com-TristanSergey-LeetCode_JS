﻿// В мире Dota2 есть две стороны: Radiant и Dire.
// Сенат Dota2 состоит из сенаторов от двух партий.
// Теперь Сенат хочет принять решение об изменении игры Dota2.
// Голосование за это изменение является раундовой процедурой.
// В каждом туре каждый сенатор может воспользоваться одним из двух прав:
// Запретить право одного сенатора: 
// Сенатор может лишить другого сенатора всех своих прав в этом и всех последующих раундах.
// Объявите о победе: если этот сенатор обнаружит, что все сенаторы, 
// у которых еще есть право голоса, принадлежат к одной партии, 
// он может объявить о победе и принять решение об изменении игры.
// Дан строковый сенат, представляющий партийную принадлежность каждого сенатора.
// Символы «R» и «D» обозначают партию «Сияние» и партию «Ужас».Тогда, если сенаторов n, 
// размер данной строки будет n.
// Раундовая процедура начинается от первого сенатора до последнего сенатора в заданном порядке.
// Данная процедура продлится до окончания голосования.Все сенаторы, потерявшие свои права, 
// будут пропущены при процедуре.
// Предположим, что каждый сенатор достаточно умен и будет использовать лучшую стратегию для своей партии.
// Предскажите, какая сторона наконец объявит о победе и изменит игру Dota2.
// Результат должен быть «Сияющий» или «Ужасный».
// 649

senate = "RD"
senate = "RDD"

var predictPartyVictory = function (senate) {

};

console.log(predictPartyVictory(senate))