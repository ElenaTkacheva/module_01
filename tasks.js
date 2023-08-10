const rain = Math.round(Math.random());

if (rain === 1) {
    console.log("Пошёл дождь. Возьмите зонт!");
} else {
    console.log("Дождя нет!");
}


const examRes1 = +(prompt('Введите кол-во баллов по математике:'));
const examRes2 = +prompt("Введите кол-во баллов по русскому языку:");
const examRes3 = +prompt("Введите кол-во баллов по информатике:");

if ((examRes1 + examRes2 + examRes3) >= 265) {
    console.log("Поздравляю, вы поступили на бюджет!");
} else {
    console.log('Сорри, вы не набрали достаточно баллов для поступления в институт')
}


const money = +(prompt('Сколько денег вы хотите снять с вашего счета?'));

if ((money % 100) === 0) {
    console.log('Ваша банковская операция завершена. Заберите ваши деньги');
} else {
    console.log('Извините, но мы не можем вам выдать купюры меньше 100р');
}
