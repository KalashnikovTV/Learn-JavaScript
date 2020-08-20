const userName = prompt('Ваше имя?');
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


// вывод чётных чисел
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


let browser = 'Firefox';

if (browser == 'Edge') {
    alert('You\'ve got the Edge!');
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert( 'We hope that this page looks ok!' );
}


// Переписанный код на switch
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
min(2, 5);
min(1, 1);



let a = 17,
    b = 10;

let c = a - b,
    d = 7;

let result = c + d;
console.log(result);



let name = 'Максим';
console.log(`Привет, ${name}`);

let name = prompt('Введите ваше имя: ');

alert(`Ваше имя: ${name}`);


let str = 'abcde';

console.log(str[0], str[2], str[4]);



let arr = [2, 5, 3, 9];

console.log((arr[0] * arr[1]) + (arr[2] * arr[3]));



let daysWeek = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};

console.log(daysWeek[5]);

let day = 3;

console.log(daysWeek[day]);


let array = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

console.log(array[1][0]);



let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};

console.log(obj.js[0]);



let arrDays = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

console.log(`По русски(Monday) - ${arrDays.ru[0]}, а по английски(Среда) - ${arrDays.en[2]}`);

let lang = 'en',
    day = 3;

console.log(`День недели: ${arrDays[lang][day-1]}`);


