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



let test = false;

if (test == true) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


let test = true;
test == true ? console.log('Верно') : console.log('Неверно');



let string = 'abcde';

if (string[0] === 'a') {
    console.log('Да');
} else {
    console.log('Нет');
}



let stringNumbers = '12345';

if (stringNumbers[0] == 1 || stringNumbers[0] == 2 || stringNumbers[0] == 3) {
    console.log('Да');
} else {
    console.log('Нет');
}



let numbersString = '123';

console.log((+numbersString[0]) + (+numbersString[1]) + (+numbersString[2]));



let sumSix = '123123';

if ((+sumSix[0]) + (+sumSix[1]) + (+sumSix[2]) == (+sumSix[3]) + (+sumSix[4]) + (+sumSix[5])) {
    console.log('Yes');
} else {
    console.log('No');
}



let i = 0;

while (i < 100) {
    i++;
    console.log(i);
}


for (let i = 1 ; i <= 100; i++) {
    console.log(i);
}


let b = 10;

while (b < 33) {
    b++;
    console.log(b);
}


for (let b = 11; b <= 33; b++ ) {
    console.log(b);
}


let b = 0;

while (b < 100) {
    b += 2;
    console.log(b);
}


for (let i = 1; i <= 100; i++) {
    i += 1;
    console.log(i);
}



let a = 1,
    sum = 0;

while(a <= 100) {
    sum += a;
    a++;
    console.log(sum);
}


for (let i = 1, sum = 0; i <= 100; i++) {
    sum += i;
    console.log(sum);
}



let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



let arrTwo = [1, 2, 3, 4, 5],
    result = 0;

for (let i = 0; i < arrTwo.length; i++) {
    result += arrTwo[i];
    console.log(result);
}



let obj = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'
}

for (key in obj) {
    console.log(`Ключи объекта: ${key} отсюда свойства -> ${obj[key]}`);
}



let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}

for (key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`);
}



let array = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < array.length; i++) {
    if (array[i] > 3 && array[i] < 10) {
        console.log(array[i]);
    }
}


let array = [1, 3, 6, -2, -9, 4],
    sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum += array[i];
        console.log(sum);
    }
}



let array = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < array.length; i++) {
    if (array[i] == 4) {
        console.log('Есть!');
        break;
    }
}



let chrs = ['1', '2', '5'],
    result = [10, 20, 30, 50, 235, 3000].filter(e => chrs.includes(e.toString()[0]));

console.log(result);



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array.length; i++) {
    document.write('-' + array[i]);
}
