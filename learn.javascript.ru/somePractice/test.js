const userName = prompt('Ваше имя?')
const questionUser = confirm(`Хотите стать специалистом JavaScript, ${userName}? Нажмите ок, если да или отмена, если не хотите`);

if (questionUser == true) {
alert(`Ты обязательно им станешь, ${userName}, если приложишь максимум усилий и будешь много практиковаться!`);
}
if (questionUser == false) {
alert(`Ну, ${userName}, тогда вали работать грузчиком в "Пятерочку", хуле ты тут забыл?`);
}


var login = prompt('Ваш логин: ');

if (login == 'Админ') {
    let password = prompt('Введите пароль: ');
    if (password == 'Я главный') {
        alert('Здравствуйте!');
    } else if (password == null || password == ''){
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login == null || login == '') {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}


for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


let arr = [1, 2, 3, 4, 5];

arr.pop();
console.log(arr);