let elemTask1 = document.querySelector('#task1');
elemTask1.classList.add('www');



let elemTask2 = document.querySelector('#task2');
elemTask2.classList.remove('www');



let elemTask3 = document.querySelector('#task3');
console.log(elemTask2.classList.contains('www'));



let elemTask4 = document.querySelector('#task4');

if (elemTask4.classList.contains('www')) {
    elemTask4.classList.remove('www');
} else {
    elemTask4.classList.add('www');
}



let elemTask5 = document.querySelector('#task5');
console.log(elemTask5.classList.length);



let elemTask6 = document.querySelector('#task6');
let classNamesTask6 = elemTask6.classList;

elemTask6.addEventListener('click', function () {
    for (className of classNamesTask6) {
        alert(className);
    }
});



let elemTask7 = document.querySelector('#task7');

elemTask7.style.cssText = 'color: red; font-size: 30px; width: 100px;';



let elemTask8 = document.querySelector('#task8');

elemTask8.addEventListener('click', function () {
    alert('Название тега: ' + elemTask8.tagName);
});



let elemTask9 = document.querySelector('#task9');

elemTask9.addEventListener('click', function () {
    alert('Название тега в нижнем регистре: ' + elemTask8.tagName.toLowerCase());
});


let elemTask10 = document.getElementsByClassName('task10');

for (let i = 0; i < elemTask10.length; i++) {
    elemTask10[i].addEventListener('click', task10);
}

function task10() {
    this.innerHTML += this.tagName.toLowerCase();
}



let elemTask11 = document.querySelector('#task11');
let li = document.createElement('li');

li.innerHTML = 'пункт';

elemTask11.appendChild(li);



let elemTask12 = document.querySelector('#task12');
let arrTask12 = ['Тест4', 'Тест5', 'Тест6'];

elemTask12.addEventListener('click', funcTask12);

function funcTask12() {
    for (let i = 0; i < arrTask12.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = arrTask12[i];
        elemTask12.appendChild(li);
    }
    this.removeEventListener('click', funcTask12);
}



let elemTask13 = document.querySelector('#task13');
let arrTask13 = ['Оп4', 'Оп5', 'Оп6'];

elemTask13.addEventListener('click', funcTask13);

function funcTask13() {
    for (let i = 0; i < arrTask13.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = arrTask13[i];
        elemTask13.appendChild(li);
        li.addEventListener('click', function() {
            alert(li.innerHTML);
        });
    }
    this.removeEventListener('click', funcTask13);
}



let elemTask14 = document.querySelector('#task14');
let liTask14 = document.createElement('li');

liTask14.innerHTML = '!!!';

elemTask14.insertBefore(liTask14, elemTask14.firstElementChild);



