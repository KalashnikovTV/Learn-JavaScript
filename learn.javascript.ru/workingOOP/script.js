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
        return str.split(' ').map(function(item) {
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
