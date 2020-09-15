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

elemTask6.addEventListener('click', function() {
    for (let className of classNamesTask6) {
        alert(className);
    }
});



let elemTask7 = document.querySelector('#task7');

elemTask7.style.cssText = 'color: red; font-size: 30px; width: 100px;';



let elemTask8 = document.querySelector('#task8');

elemTask8.addEventListener('click', function() {
    alert('Название тега: ' + elemTask8.tagName);
});



let elemTask9 = document.querySelector('#task9');

elemTask9.addEventListener('click', function() {
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



let elemTask15 = document.querySelector('#task15');
elemTask15.insertAdjacentHTML('beforebegin', '<span>!!!</span>');



let elemTask16 = document.querySelector('#task16');
elemTask16.insertAdjacentHTML('afterend', '<span>!!!</span>');



let elemTask17 = document.querySelector('.task17');
elemTask17.insertAdjacentHTML('afterbegin', '<span>!!!</span>');



let elemTask18 = document.querySelector('.task18');
elemTask18.insertAdjacentHTML('beforeend', '<span>!!!</span>');



let elemTask19 = document.querySelector('.task19');
let firstChildTask19 = elemTask19.firstElementChild;

firstChildTask19.style.color = 'red';



let elemTask20 = document.querySelector('.task20');
let firstChildTask20 = elemTask20.lastElementChild;

firstChildTask20.style.color = 'red';



let elemTask21 = document.querySelector('.task21');
let firstChildTask21 = elemTask21.children;

for (let elem of firstChildTask21) {
    elem.innerHTML += '!';
}



let elemTask22 = document.querySelector('.task22');
let neighbourTask22 = elemTask22.previousElementSibling;

neighbourTask22.innerHTML += '!';



let elemTask23 = document.querySelector('.task23');
let neighbourTask23 = elemTask23.nextElementSibling;

neighbourTask23.innerHTML += '!';



let elemTask24 = document.querySelector('.task24');
let neighbourTask24 = elemTask24.nextElementSibling.nextElementSibling;

neighbourTask24.innerHTML += '!';



let elemTask25 = document.querySelector('.task25');
let elemParentTask25 = elemTask25.parentElement;

elemParentTask25.style.backgroundColor = 'red';



let elemTask26 = document.querySelector('.task26');
let elemParentTask26 = elemTask26.parentNode.parentNode;

elemParentTask26.style.backgroundColor = 'red';



let elemTask27 = document.querySelector('.task27');
let elemParentTask27 = elemTask27.parentElement;
let elemInputTask27 = elemParentTask27.lastElementChild;

elemInputTask27.addEventListener('click', function() {
    elemParentTask27.removeChild(elemTask27);
});



let elemTask28 = document.querySelector('.task28');
let elemInputTask28 = elemTask28.nextElementSibling;

elemInputTask28.addEventListener('click', function() {
    let elemLastChild28 = elemTask28.lastElementChild;
    elemTask28.removeChild(elemLastChild28);
});



let elemTask29 = document.querySelector('.task29');

elemTask29.addEventListener('click', () => {
    elemTask29.remove();
});



let elemTask30 = document.querySelector('.task30');
let elemListTask30 = elemTask30.children;

for (let i = 0; i < elemListTask30.length; i++) {
    elemListTask30[i].addEventListener('click', function() {
        this.parentElement.removeChild(this);
    });
}



let elemTask31 = document.querySelector('.task31');
let elemInputTask31 = elemTask31.previousElementSibling;

elemTask31.addEventListener('click', function() {
    let cloneTask31 = elemInputTask31.cloneNode(true);
    elemTask31.insertAdjacentElement('beforebegin', cloneTask31);
});



let arrTask32 = [1, 'dva', 3, 'four', 5];

let ulForTask32 = document.createElement('ul');

for (let i = 0; i < arrTask32.length; i++) {
    let liForTask32 = document.createElement('li');
    liForTask32.innerHTML = arrTask32[i];
    ulForTask32.appendChild(liForTask32);
}
console.log(ulForTask32);
document.body.appendChild(ulForTask32);



let elemTask33 = document.querySelector('.task33');
let elemSubmitTask33 = elemTask33.nextElementSibling;
let parentElemTask33 = elemTask33.parentElement;

elemSubmitTask33.addEventListener('click', function() {
    let cloneSubmit33 = elemTask33.cloneNode(false);
    parentElemTask33.appendChild(cloneSubmit33);
});



let elemTask34 = document.querySelector('.task34');
/* let submit = document.querySelector('input'); */
elemTask34.addEventListener('blur', function() {
    for (let i = 0; i < elemTask34.value.length; i++) {
        let clone = elemTask34.cloneNode(true);
        clone.value = elemTask34.value[i];
        elemTask34.parentElement.appendChild(clone);
    }
});



let elemTask35 = document.querySelector('.task35');
let parentElemTask35 = elemTask35.parentElement;

elemTask35.addEventListener('click', function() {
    parentElemTask35.style.cssText = 'display: none';
});
