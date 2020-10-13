// Цикл for-of и введение в понятие итератора
let arr1 = [1, 2, 3, 4];

for (let key of arr1) {
    console.log(key);
}



let paragTask2 = document.querySelectorAll('.task2');

for (let elem of paragTask2) {
    elem.innerHTML += '!';
}



let arr3 = [1, 2, 3, 4];

for (let key of arr3) {
    console.log(key);
}
console.log(arr3[Symbol.iterator]);


// Введение в функции-генераторы ES6
let iterator4 = createIterator4();
console.log(iterator4.next().value);
console.log(iterator4.next().value);
console.log(iterator4.next().value);

function* createIterator4() {
    yield 1;
    yield 2;
    yield 3;
}



let iterator5 = createIterator5();

function* createIterator5() {
    yield 1;
    yield 2;
    yield 3;
}

for (let key of iterator5) {
    console.log(key);
}



let iterator6 = createIterator6([1, 2, 3]);
console.log(iterator6.next());
console.log(iterator6.next());
console.log(iterator6.next());
console.log(iterator6.next());

function* createIterator6(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}



let arr7 = [1, 2, 3];
arr7.reverse();

let iterator7 = createIterator7(arr7);

console.log(iterator7.next());
console.log(iterator7.next());
console.log(iterator7.next());
console.log(iterator7.next());

function* createIterator7(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}



let arr8 = [1, 2, 3, 4];
let iterator8 = createIterator(arr8);

function* createIterator(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        let buffArr = [];
        for (let j = i; j < i + 2; j++) {
            buffArr.push(arr[j]);
        }
        newArr.push(buffArr);
    }

    for (let value of newArr) {
        yield value;
    }
}

for (let value of iterator8) {
    console.log(value);
}



let arr9 = [1, 2, 3, 4, 6];
let iterator9 = createIterator(arr9);

function* createIterator(arr) {
    for (let value of arr) {
        if (value % 2 == 0) {
            yield value;
        }
    }
}

for (let value of iterator9) {
    console.log(value);

}



let iterator10 = createIterator10([1, 4, 7, 11, 18]);

console.log(iterator10.next());
console.log(iterator10.next());
console.log(iterator10.next());
console.log(iterator10.next());
console.log(iterator10.next());

function* createIterator10(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i - 1]) {
            yield(arr[i] + arr[i - 1]);
        }
    }
}


// Создаем итератор объекта с помощью генератора ES6
let obj11 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

let iterator11 = createIterator11(obj11);

function* createIterator11(obj) {
    for (let value in obj) {
        yield obj[value];
    }
}

for (let value of iterator11) {
    console.log(value);
}


// Создание итерируемых объектов на ES6
let obj12 = {
    1: "one",
    2: "two",
    3: "three"
};

function* createIterator(obj) {
    for (let key in obj) {
        yield obj[key];
    }
}
let iterator12 = createIterator(obj12);
for (let elem of iterator12) {
    console.log(elem);
}


// Встроенные итераторы коллекций values, keys и entries
let arr13 = [1, 2, 3, 4];
let iterator13 = arr13.entries();

for (let [key, value] of iterator13) {
    console.log(key, value);
}



let arr14 = [1, 2, 3, 4, 5];
let iterator14 = arr14.keys();
let sum = 0;

for (let key of iterator14) {
    sum += key;
}
console.log(sum);



let map15 = new Map();
map15.set('a', 1);
map15.set('b', 2);

let iterator15 = map15.keys();

for (let key of iterator15) {
    console.log(key);
}



let map16 = new Map();
map16.set('a', 1);
map16.set('b', 2);

let iterator16 = map16.values();

for (let value of iterator16) {
    console.log(value);
}


// Встроенные итераторы строк
let str17 = 'abcde';
let ul17 = document.querySelector('.task17');

for (let elem of str17) {
    let li = document.createElement('li');
    li.innerHTML = elem;
    ul17.appendChild(li);
}



let num18 = 123456;
let summ = 0;

for (let value of String(num18)) {
    summ += +value;
}
console.log(summ);


// Оператор spread и итераторы
console.log([...document.querySelectorAll('.task19')]);



let obj20 = {
    1: "a",
    2: "b",
    3: "c",
    [Symbol.iterator]: function* () {
        for (let key in this) {
            yield this[key];
        }
    }
};
console.log(...obj20);



let obj21 = {
    1: "a",
    2: "b",
    3: "c",
    [Symbol.iterator]: function* () {
        for (let key in this) {
            yield key;
        }
    }
};
console.log(...obj21);


// Оператор spread и строки
function arrSymb(str) {
    return console.log([...str]);
}
arrSymb('abcde');



function arrSymbRev(str) {
    return console.log([...str].reverse());
}
arrSymbRev('abcde');



let num24 = 123456;
let sum24 = 0;

for (let value of String(num24)) {
    sum24 += +value;
}
console.log(sum24);


// Применение
let parags = document.querySelectorAll('.task25');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    let iterator = parags.entries();
    for (let [num, elem] of iterator) {
        console.log(num, elem);
        elem.innerHTML += num;
    }
});