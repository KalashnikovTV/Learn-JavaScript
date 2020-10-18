// Простые задачи
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);
let workerSec = new Worker('Петя', 'Петров', 7, 28);


console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
console.log(workerSec.getSalary() + worker.getSalary()); //сумма зарплат рабочих


// Геттеры и сеттеры
class Worker2 {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    getRate() {
        return this._rate;
    }

    getDays() {
        return this._days;
    }

    getSalary() {
        return this._rate * this._days;
    }
}

let worker2 = new Worker2('Иван', 'Иванов', 10, 31);

console.log(worker2.getName()); //выведет 'Иван'
console.log(worker2.getSurname()); //выведет 'Иванов'
console.log(worker2.getRate()); //выведет 10
console.log(worker2.getDays()); //выведет 31
console.log(worker2.getSalary()); //выведет 310 - то есть 10*31



class Worker3 {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    setRate(rate) {
        this._rate = rate;
    }

    setDays(days) {
        this._days = days;
    }

    getRate() {
        return this._rate;
    }

    getDays() {
        return this._days;
    }

    getSalary() {
        return this._rate * this._days;
    }
}

let worker3 = new Worker3('Иван', 'Иванов', 10, 31);

console.log(worker3.getRate()); //выведет 10
console.log(worker3.getDays()); //выведет 31
console.log(worker3.getSalary()); //выведет 310 - то есть 10*31

worker3.setRate(20); //увеличим ставку
worker3.setDays(10); //уменьшим дни
console.log(worker3.getSalary()); //выведет 200 - то есть 20*10


// Практика
class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        return str[0].toUpperCase() + str.substring(1, str.lenght);
    }

    ucWords(str) {
        return str.split(' ').map(function (item) {
            return item[0].toUpperCase() + item.substring(1, item.lenght);
        }).join(' ');
    }
}

let str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'



class Validator {
    isEmail(str) {
        return /^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(str);
    }

    isDomain(str) {
        return /^(http[s]?\:\/\/)?((\w+)\.)?(([\w-]+)?)(\.[\w-]+){1,2}$/.test(str);
    }

    isDate(str) {
        return /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/.test(str);
    }

    isPhone(str) {
        return /^\+375(\s+)?\(?(17|29|33|44)\)?(\s+)?[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(str);
    }
}

let validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны


// Наследование классов
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        let currentYear = new Date();
        return currentYear.getFullYear() - this.year;
    }
}

let student = new Student('Иван', 'Иванов', 2017);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2017
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2020


// Работа с элементами
class Elem {
    constructor(selector) {
        this.elem = document.querySelector(selector);
    }

    html(text) {
        this.elem.innerHTML = text;
        return this;
    }

    attr(name, value) {
        this.elem.setAttribute(name, value);
        return this;
    }

    append(text) {
        this.elem.append(text);
        return this;
    }

    prepend(text) {
        this.elem.prepend(text);
        return this;
    }
}

let elem = new Elem('#element');

elem.html('!'); //запишет в текст элемента '!'
elem.append('!'); //запишет в начало элемента '!'
elem.prepend('!'); //запишет в конец элемента '!'
elem.attr('class', 'www'); //запишет в атрибут class значение www

//Должны работать цепочки методов:
elem.html('hello').append('!').prepend('!');
elem.attr('class', 'www').attr('title', 'hello');



class Elem2 {
    constructor(selector) {
        this.elem = document.querySelectorAll(selector);
    }

    html(str) {
        this.each(function(item) {
            if (str) {
                item.innerHTML = str;
            }
        });
        return this;
    }

    append(str) {
        this.each(function(item) {
            item.innerHTML += str;
        });
        return this;
    }

    prepend(str) {
        this.each(function(item) {
            item.innerHTML = str + item.innerHTML;
        });
        return this;
    }

    attr(str1, str2) {
        this.each(function(item) {
            item.setAttribute(str1, str2);
        });
        return this;
    }

    each(func) {
        Array.from(this.elem).forEach(func);
        return this;
    }
}

let elem2 = new Elem2('div#text');

elem2.html('text1').append('text2').prepend('text3').attr('class', 'www').each(function(item) {
    console.log(item);
});


// Практика
class Rectangle {
    constructor(width, height) {
        this.elem = document.createElement('div');

        this.setWidth(width);
        this.setHeight(height);
        this.elem.style.border = '2px solid green';

        document.body.appendChild(this.elem);
    }

    setWidth(width) {
        this.elem.style.width = width + 'px';
    }

    getWidth() {
        return parseInt(this.elem.style.width);
    }

    setHeight(height) {
        this.elem.style.height = height + 'px';
    }

    getHeight() {
        return parseInt(this.elem.style.height);
    }

    setBorder(border) {
        this.elem.style.border = border;
    }
}

let rect1 = new Rectangle(150, 150);
rect1.setWidth(250);
rect1.setHeight(270);
rect1.setBorder('2px solid red');

console.log('Ширина квадрата rect1: ' + rect1.getWidth());
console.log('Высота квадрата rect1: ' + rect1.getHeight());

let rect2 = new Rectangle(100, 100);
rect2.setWidth(180);
rect2.setHeight(150);

console.log('Ширина квадрата rect2: ' + rect2.getWidth());
console.log('Высота квадрата rect2: ' + rect2.getHeight());
