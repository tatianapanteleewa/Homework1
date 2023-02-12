function season() {

    let month = Number(prompt('Введите номер месяца'));
    if (month === 1 || month === 2 || month === 12) {
        alert('Время года - Зима');
    } else if (month === 3 || month === 4 || month === 5) {
        alert('Время года - Весна');
    } else if (month === 6 || month === 7 || month === 8) {
        alert('Время года - Лето');
    } else if (month === 9 || month === 10 || month === 11) {
        alert('Время года - Осень');
    } else {
        alert('Введено некорректное значение')
    }
}

function askUser() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(list);
    let userAnswer1 = prompt('Чему равнялся первый элемент массива?');
    let userAnswer2 = prompt('Чему равнялся последний элемент массива?');
    if (userAnswer1.toLowerCase() === list[0].toLowerCase() && userAnswer2.toLowerCase() === list[6].toLowerCase()) {
        alert('Поздравляем с победой!');
    } else if (userAnswer1.toLowerCase() === list[0].toLowerCase() || userAnswer2.toLowerCase() === list[6].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно');
    }
}

