function task1() {
    let elem = document.getElementsByTagName('p');
    elem[0].innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}

function task2() {
    let elem = document.getElementsByClassName('task2');
    elem[0].innerHTML = '<h3><b>Абзац превратился в h3!</b></h3>';
}

function task3() {
    let elem = document.getElementById('task3');
    elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
}

function task4() {
    let input1 = document.getElementById('input1'),
        input2 = document.getElementById('input2'),
        result = document.getElementById('result');
    let sum = (Number(input1.value) + Number(input2.value));
    result.innerHTML = sum;
}

function task5() {
    let elem = document.getElementsByTagName('p');
    for (let i = 0; i < elem.length; i++) {
        elem[i].innerHTML = 'Ку-ку!';
    }
}

function task6() {
    let elem = document.getElementsByClassName('www');
    for (let i = 0; i < elem.length; i++) {
        elem[i].innerHTML = i+1;
    }
}

function task7() {
    let elem = document.querySelectorAll('p.wwww');
    for (let i = 0; i< elem.length; i++) {
        elem[i].innerHTML = i+1;
    }
}

function task8() {
    let elem = document.getElementById('task8'),
        value = elem.getAttribute('class');
    alert(value);
}

function task9Show() {
    let elem = document.getElementById('task9'),
        value = elem.getAttribute('class');
    alert(value);
}

function task9Remove() {
    let elem = document.getElementById('task9'),
        value = elem.removeAttribute('class');
    elem.style.color = 'black';
    alert('Класс удален! Нажмите на первую кнопку чтобы проверить это.');
}

function task10Show() {
    let elem = document.getElementById('task10'),
        value = elem.getAttribute('class');
    alert(value);
}

function task10Remove() {
    let elem = document.getElementById('task10'),
        value = elem.setAttribute('class', 'new-class');
    elem.style.color = 'black';
    alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это.');
}

function task11() {
    let elem = document.getElementsByTagName('a');
    for (let i = 0; i < elem.length; i++) {
        let res = elem[i].getAttribute('href');
        elem[i].innerHTML += '(' + res + ') ';
    }
}

function task12(elem) {
    let p = document.getElementById('task12');
    p.innerHTML = 'Привет, мир!';
    p.style.color = 'red';
    elem.value = 'О, на меня нельзя больше нажать!';
    elem.disabled = true;
}

function task13() {
    let elem = document.querySelectorAll('p.task13');
    for (let i = 0; i < elem.length; i++) {
        elem[i].innerHTML = i;
    }
}

function task14() {
    let elem = document.querySelectorAll('p.task14');
    for (let i = 0; i < elem.length; i++) {
        elem[i].outerHTML = '<p class="task14">' + (i+1) + '. ' + elem[i].innerHTML + '</p>';
    }
}