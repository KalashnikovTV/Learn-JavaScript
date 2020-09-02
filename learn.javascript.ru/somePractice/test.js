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



let a = 10,
    b = 3;

console.log(a % b);


if (a % b == 0) {
    console.log(`Делится, рез-т деления: ${a / b}`);
} else {
    console.log(`Делится с остатком:: ${a % b}`);
}



let st = Math.pow(2, 10);
console.log(st);

console.log(Math.sqrt(245));



let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}
console.log('Сумма кубов массива: ' + sum + '. Квадратный корень из суммы кубов массива: ' + Math.sqrt(sum));



console.log(Math.sqrt(379));
console.log(Math.round(Math.sqrt(379)));
console.log(Math.sqrt(379).toFixed(1));
console.log(Math.sqrt(379).toFixed(2));



let sqrt = (Math.sqrt(587)),
    ceil = (Math.ceil(Math.sqrt(587))),
    floor = (Math.floor(Math.sqrt(587)));

let obj = {
        'sqrt': sqrt,
        'floor': ceil,
        'ceil': floor
}

console.log(obj);



console.log('Список чисел: 4, -2, 5, 19, -130, 0, 10');
console.log('Максимальное число из списка: ' + Math.max(4, -2, 5, 19, -130, 0, 10));
console.log('Минимальное число из списка: ' + Math.min(4, -2, 5, 19, -130, 0, 10));



function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));



let array = [];
for (i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

console.log(array);



let a = -5,
    b = 10;

console.log(Math.abs(a - b));


let a = 3,
    b = 5,
    c = Math.abs(a - b);

console.log(c);



let arr = [12, 15, 20, 25, 59, 79],
    sumElement = 0;

for (let i = 0; i < arr.length; i++) {
    sumElement += arr[i];
}

console.log('Сумма элементов массива: ' + sumElement);
console.log('Среднее арифметическое его элементов: ' + (sumElement / arr.length));



function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
  
console.log(factorial(4)); // 24


let str = 'js';
console.log(str.toUpperCase());

let str = 'JS';
console.log(str.toLowerCase());


console.log('я учу javascript!'.length);


let a = 'я учу javascript!';
console.log(a.substr(2, 4) + a.substr(6, 10));
console.log(a.substring(2, 16));
console.log(a.slice(2, 16));
console.log(a.indexOf('учу'));


let str = 'text12345',
    n = 5;

if (str.length > n) {
    result = str.slice(0, n + 1) + '...';
} else {
    result = str;
}

console.log(result);


let str = 'Я-учу-javascript!';

console.log(str.replace(/-/g, '!'));  // замена всех дефисов на восклицательный знак


let str = 'я учу javascript!',
    mas = str.split(' '); // слова, разделенные пробелом

console.log(mas);


let str = 'я учу javascript!',
    mas = str.split('');  // каждый символ строки

console.log(mas);


let data = '2025-12-31',
    mas = data.split('-');
    newStr = mas[2] + '.' + mas[1] + '.' + mas[0];
console.log(newStr);


let arr = ['я', 'учу', 'javascript', '!'];

console.log(arr.join('+'));


let text = 'text321';

console.log(text.slice(0, 1).toUpperCase() + text.slice(1));



let text = 'text321 test gtf';

let words = text.split(' ');

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}

console.log(words.join(' '));



let str = 'var_test_text';

let words = str.split('_');

for (let i = 1; i < words.length; i++) {
    words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
}

console.log(words.join(''));



let a = [1, 2, 3],
    b = [4, 5, 6];

console.log(a.concat(b));
console.log(a.reverse());


let a = [1, 2, 3];

a.push(4, 5, 6);
console.log(a);


let b = [1, 2, 3];

b.unshift(4, 5, 6);
console.log(b);



let arr = ['js', 'css', 'jq'],
    firstElem = arr.shift();

console.log(firstElem);


let arr = ['js', 'css', 'jq'],
    firstElem = arr.pop();

console.log(firstElem);



let array = [1, 2, 3, 4, 5],
    newElem = array.slice(0, 3);

console.log(newElem);


let array = [1, 2, 3, 4, 5],
    newElem = array.slice(3);

console.log(newElem);


let array = [1, 2, 3, 4, 5],
newElem = array.splice(1, 2);

console.log(array);


let array = [1, 2, 3, 4, 5],
    newElem = array.splice(1, 3);

console.log(newElem);


let array = [1, 2, 3, 4, 5];
newElem = array.splice(3, 0, 'a', 'b', 'c');

console.log(array);


let array = [1, 2, 3, 4, 5],
newElem = array.splice(1, 0, 'a', 'b');
newElem = array.splice(6, 0, 'c');
newElem = array.splice(8, 0, 'e');

console.log(array);


let arr = [3, 4, 1, 2, 7, -8];

console.log(arr.sort());



let obj = {
    js:'test', 
    jq: 'hello', 
    css: 'world'
};

console.log(Object.keys(obj));



let str = 'deghgxt4433';

console.log(str[0].toUpperCase() + str.slice(1));



let str = '123456';
res = str.split('').reverse().join('');

console.log(res);



let str = 'http://test.com';

if (str.substring(0, 7) == 'http://') {
    console.log('done');
} else {
    console.log('error..');
}


let str = 'http://test.html';

if (str.substring(str.length - 5) == '.html') {
    console.log('done');
} else {
    console.log('error');
}



function square(number) {
    return console.log(Math.pow(number, 2));
}
square(4);


function sum(num1, num2) {
    return console.log(num1 + num2);
}
sum(2, 7);


function task(num1, num2, num3) {
    return console.log((num1 - num2) / num3);
}
task(2, 7, 5);


function week(day) {
    switch(day) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
            break;
    }
}
week(6);



let arr = [1, 2, 3, 5, 7, 8, 5],
    flag = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        flag = true;
        break;
    }
}

if (flag === true) {
    console.log('Да');
} else {
    console.log('Нет');
}



let arr = [1, 2, 3, 6, 6, 8, 6],
    flag = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
        flag = true;
        break;
    }
}

if (flag === true) {
    console.log('Есть два одинаковых числа подряд');
} else {
    console.log('Одинаковых чисел подряд нет');
}



let num = 31,
    flag = false;

for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
        flag = true;
        break;
    }
}

if (flag) {
    console.log('true');
} else {
    console.log('false');
}



function logic(num1, num2) {
    return console.log(num1 === num2);
}
logic(2, 2);



function logicTwo(num1, num2) {
    return console.log(num1 + num2 > 10);
}
logicTwo(2, 9);



function negative(num) {
    return console.log(num < 0);
}
negative(-1)



let str = '';

for (let i = 1; i <= 9; i++) {
    str += i;
}

console.log(str);



let str = '';

for (let i = 9; i > 0; i--) {
    str += i;
}

console.log(str);



let str = '-';

for (let i = 1; i <= 9; i++) {
    str += i + '-';
    
}

console.log(str);


let arr = [],
    end = 0;

while (end < 20) {
    end++;
    arr.push('x');
    console.log(arr.join(''));
}


// пирамида чисел
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= i; j++) {
		document.write(i);
	}
	document.write('<br>');
}



let arr = [],
    end = 0;

while (end < 5) {
    end++;
    arr.push('xx');
    console.log(arr.join(''));
}



let arr = [];

for (let i = 0; i <= 5; i++) {
    arr.push('x');
    for (let j = 1; j <= i; j++) {
        arr[i] += 'x';
    }
}

console.log(arr);



let arr = [];

for (let i = 1; i <= 5; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
        str += String(i);
    }
    arr.push(str);
}

console.log(arr);



function arrayFill(par1, par2) {
    let arr = [];
    for (let i = 0; i < par2; i++) {
        arr[i] = par1;

    }
    console.log(arr);
}
arrayFill('x', 5);



function calc(arr) {
    let elem = 0;
    for (let i = 0; i < arr.length; i++) {
        elem += arr[i];
        if (elem > 10) {
            return i + 1;
        }
    }
}

let arr = [1, 2, 3, 4, 8, 10, 56];
console.log(calc(arr));



function rev(arr) {
    result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(rev(arr));



let arr = [[1, 2, 3], [4, 5], [6]],
    sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum);



let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]],
    sum = 0;

for (let i = 0; i< arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);



function isNumberInRange(num) {
    if (num > 0 && num < 10) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
isNumberInRange(4);


let str = 'var_text_hello';

console.log(str.replace(/_/g, ''));



function getDivisors(num) {
	var result = [];

	for (var i = 1; i <= num; i++) {
		if(num % i == 0) {
			result.push(num);
		}
	}

	return result;
}

alert(getDividers(24));


function isSimple(num) {
	for (var i = 2; i < num; i++) {
		if(num % i == 0) {
			return false;
		}
	}

	return true;
}

alert(isSimple(13));


function rekurs(arr) {
	console.log(arr[0]);
	arr.splice(0, 1);
	if (arr.length > 0) {
		rekurs(arr);
	}
}



function isSumLess(num) {
    var sum = 0;
    var arr = String(num).split('');
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }

    if (sum > 9) {
        return isSumLess(sum);
    } else {
        return sum;
    }
}

var num = 1591;
let final_num = isSumLess(num);
console.log('Конечное число = ' + final_num);


