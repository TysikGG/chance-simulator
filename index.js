const colors = require('colors');
const pause = require('node-pause');
const input = require('readline-sync');
console.log(colors.red('Введите шанс для симуляции (в процентах)'));
pre_chance = input.question('');
if(pre_chance > 50) return pause('Шанс не должен быть выше 50%! Нажмите любую клавишу для выхода. . .');
const chance = 100/pre_chance;
var total_chance = 0;
var total_attemps = 0;
while (true) {
    total_attemps = total_attemps + 1;
    var ch = Math.floor(Math.random() * chance-1)+1;
    if(ch == 1) {total_chance = total_chance + 100};
    console.log(colors.green(`Высчитываем шанс: ${total_chance/total_attemps} %`));
};