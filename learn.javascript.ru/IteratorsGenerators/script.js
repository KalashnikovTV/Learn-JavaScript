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
