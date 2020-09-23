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



let inputTask13 = document.querySelector('.task13');

inputTask13.addEventListener('blur', checkNum);

function checkNum() {
    let str = inputTask13.value;
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 3) {
            alert('Содержит число 3');
            return;
        }
    }
    alert('Не содержит число 3');
    return;
}



let paragraphTask14 = document.querySelectorAll('.task14');
let resultTask14 = document.querySelector('.result-task14');

resultTask14.addEventListener('click', function () {
    for (let i = 0; i < paragraphTask14.length; i++) {
        paragraphTask14[i].innerHTML += (i + 1);
    }
});




let paragraphTask15 = document.querySelectorAll('.task15');
let buttonTask15 = document.querySelector('.button-task15');
let resultTask15 = document.querySelector('.result-task15');

buttonTask15.addEventListener('click', function () {
    let arr = [];
    for (let i = 0; i < paragraphTask15.length; i++) {
        arr[i] = +paragraphTask15[i].innerHTML;
        console.log(arr);
    }
    resultTask15.value = arr.sort(sortNum);
});

function sortNum(a, b) {
    return (a - b);
};



let linkTask16 = document.querySelectorAll('.task16');

function linkAddHref() {
    for (let i = 0; i < linkTask16.length; i++) {
        linkTask16[i].innerHTML += `(${linkTask16[i].href})`;
    }
}
linkAddHref();



let linkTask17 = document.querySelectorAll('.task17');

function linkAddArrow() {
    for (var i = 0; i < linkTask17.length; i++) {
        if (linkTask17[i].href.indexOf('http://') == 0) {
            linkTask17[i].innerHTML += ' стрелка';
        }
    }
}
linkAddArrow();



let paragraphTask18 = document.querySelectorAll('.task18');

for (let i = 0; i < paragraphTask18.length; i++) {
    paragraphTask18[i].addEventListener('click', function () {
        this.innerHTML = this.innerHTML * this.innerHTML;
    });
}



let imagesTask19 = document.querySelectorAll('.task19');

for (let i = 0; i < imagesTask19.length; i++) {
    imagesTask19[i].addEventListener('click', function () {
        this.height = this.height * 2;
    });
}



let imagesTask20 = document.querySelectorAll('.task20');

for (let i = 0; i < imagesTask20.length; i++) {
    imagesTask20[i].addEventListener('click', increaseImg);
}

function increaseImg() {
    this.height = this.height * 2;
    this.removeEventListener('click', increaseImg);
    this.addEventListener('click', reduceImg);
}

function reduceImg() {
    this.height = this.height / 2;
    this.removeEventListener('click', reduceImg);
    this.addEventListener('click', increaseImg);
}



let imagesTask21 = document.querySelectorAll('.task21');
let resultTask21 = document.querySelector('.result-task21');

for (let i = 0; i < imagesTask21.length; i++) {
    imagesTask21[i].addEventListener('click', function () {
        resultTask21.src = this.src;
    });
}



let inputTask22 = document.querySelector('.task22');
let btnsTask22 = document.querySelectorAll('.btnsTask22');

for (let i = 0; i < btnsTask22.length; i++) {
    btnsTask22[i].addEventListener('click', function () {
        let num = +inputTask22.value + +this.value;
        if (num >= 0) {
            inputTask22.value = num;
        } else {
            inputTask22.value = 0;
        }
    });
}



let inputTask23 = document.querySelector('.task23');

inputTask23.addEventListener('blur', function () {
    if (inputTask23.value >= 1 && inputTask23.value <= 100) {
        inputTask23.style.background = 'green';
    } else {
        inputTask23.style.background = 'red';
    }
});



let inputTask24 = document.querySelector('.task24');
let resultTask24 = document.querySelector('.result-task24');

document.documentElement.addEventListener('mouseup', function () {
    let content = window.getSelection().toString();
    inputTask24.value = content;
});



let paragraphTask25 = document.querySelectorAll('.task25');
let btnTask25 = document.querySelector('.btnTask25');

btnTask25.addEventListener('click', function () {
    for (let i = 0; i < paragraphTask25.length; i++) {
        let str = paragraphTask25[i].innerHTML;
        let arr = +str.split(' ');
        let arr2 = [];
        arr2.push(arr);
        if (max.arr2 == arr2[i]) {
            paragraphTask25[i].style.background = 'red';
        }
    }
    function max(arr2) {
        return arr2.reduce((a, b) => a > b ? a : b);
    }
});



let paragraphTask26 = document.querySelectorAll('.task26');
let inputTask26 = document.querySelector('.inptTask26');

for (let i = 0; i < paragraphTask26.length; i++) {
    let count = 0;
    paragraphTask26[i].addEventListener('click', function() {
        count++;
        inputTask26.value = count;
    });
}