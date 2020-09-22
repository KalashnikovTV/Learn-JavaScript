let inputsTask1 = document.querySelectorAll('.task1');
let resultTask1 = document.querySelector('.result-task1');
let buttonTask1 = document.querySelector('#button-task1');

buttonTask1.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < inputsTask1.length; i++) {
        sum += Number(inputsTask1[i].value);
    }
    console.log(sum);
    resultTask1.value = sum;
});



let inputsTask2 = document.querySelectorAll('.num');
let resultTask2 = document.querySelector('#result');
let buttonTask2 = document.querySelector('#button-task2');

buttonTask2.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < inputsTask2.length; i++) {
        sum += Number(inputsTask2[i].value);
    }
    console.log(sum);
    resultTask2.innerHTML += sum;
});



let inputTask3 = document.querySelector('.task3');
let resultTask3 = document.querySelector('.result-task3');

inputTask3.addEventListener('blur', function () {
    let sum = 0;
    let str = inputTask3.value;
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    resultTask3.innerHTML = 'Сумма введенных чисел: ';
    resultTask3.innerHTML += sum;
    inputTask3.value = '';
});



let inputTask4 = document.querySelector('.task4');
let resultTask4 = document.querySelector('.result-task4');

inputTask4.addEventListener('blur', function () {
    let sum = 0;
    let str = inputTask4.value;
    let arr = str.split(',');
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i] / arr.length);
    }
    resultTask4.innerHTML = 'Среднее арифм. введенных чисел: ';
    resultTask4.innerHTML += sum;
    inputTask4.value = '';
});



let inputTask5 = document.querySelector('.task5');
let resultsTask5 = document.querySelectorAll('.results-task5');

inputTask5.addEventListener('blur', function () {
    if (inputTask5.value !== 0) {
        let str = inputTask5.value;
        let arr = str.split(' ');
        for (let i = 0; i < arr.length; i++) {
            resultsTask5[i].value = arr[i];
        }
    }
    if (inputTask5.value == 0) {
        for (let i = 0; i < resultsTask5.length; i++) {
            resultsTask5[i].value = '';
        }
    }
});



let inputTask6 = document.querySelector('.task6');

inputTask6.addEventListener('blur', function () {
    let str = inputTask6.value;
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('');
        console.log(arr[i]);
        arr[i][0] = arr[i][0].toUpperCase();
        arr[i] = arr[i].join('');
    }
    str = arr.join(' ');
    inputTask6.value = str;
});



let inputTask7 = document.querySelector('.task7');
let resultTask7 = document.querySelector('.result-task7');

inputTask7.addEventListener('blur', function () {
    let str = inputTask7.value;
    let arr = str.split(' ');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += 1;
    }
    resultTask7.innerHTML = 'Количество слов: ';
    resultTask7.innerHTML += sum;
});



let inputTask8 = document.querySelector('.task8');
let resultTask8 = document.querySelector('.result-task8');

inputTask8.addEventListener('blur', function () {
    let str = inputTask8.value;
    let arr = str.split(' ');
    let arr2 = [];
    let max = 0;
    for (var i = 0; i < arr.length; i++) {
        var num = 0;
        arr2 = arr[i].split('');
        for (var j = 0; j < arr2.length; j++) {
            num += 1;
        }
        if (num > max) {
            max = num;
        }
    }
    resultTask8.innerHTML = 'Kоличество символов в самом длинном слове: ';
    resultTask8.innerHTML += max;
});



let inputTask9 = document.querySelector('.task9');

inputTask9.addEventListener('blur', function () {
    let str = inputTask9.value;
    let arr = str.split('.');
    arr = arr.reverse().join('-');
    inputTask9.value = arr;
});



let inputTask10 = document.querySelector('.task10');
let resultTask10 = document.querySelector('.result-task10');

inputTask10.addEventListener('blur', function () {
    let date = new Date();
    let userYear = inputTask10.value;
    let nowYear = date.getFullYear();
    resultTask10.innerHTML = 'Вам лет(год): ';
    resultTask10.innerHTML += (nowYear - userYear);
});



let inputTask11 = document.querySelector('.task11');
let resultTask11 = document.querySelector('.result-task11');

inputTask11.addEventListener('blur', function () {
    let dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let str = inputTask11.value;
    let arr = str.split('.');
    let arr2 = arr.reverse();
    let str1 = arr2.join(',');
    let date = new Date(str1);
    let day = date.getDay();
    resultTask11.innerHTML = 'День недели: ';
    resultTask11.innerHTML += dayWeak[day];
});



let inputTask12 = document.querySelector('.task12');
let resultTask12 = document.querySelector('.result-task12');

resultTask12.addEventListener('click', function () {
    let str = inputTask12.value;
    let arr = str.split('');
    let arr2 = str.split('').reverse();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            alert('Это слово не палиндром');
            break;
        } else {
            alert('Это слово палиндром');
            break;
        }
    }
});
