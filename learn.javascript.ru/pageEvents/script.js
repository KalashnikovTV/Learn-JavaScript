let elems = document.getElementsByTagName('img');

for (let i = 0; i < elems.length; i++) {
    elems[i].onclick = task1;
}

function task1() {
    alert(this.getAttribute('src'));
}



let elemsA = document.getElementsByTagName('a');

for (let i = 0; i < elemsA.length; i++) {
    elemsA[i].addEventListener('mouseover', task2);
}

function task2() {
    this.setAttribute('title', this.innerHTML);
    // task 3
    let valueAttr = this.getAttribute('href');
    this.innerHTML = this.innerHTML + `(${valueAttr})`;
    // task 4
    this.removeEventListener('mouseover', task2);
}



let elemsInput = document.getElementsByTagName('input');
let elemP = document.querySelector('#test');

for (let i = 0; i < elemsInput.length; i++) {
    elemsInput[i].addEventListener('blur', task5);

    // task6 для работы - это раскоментить, а предыдущее событие закоментить
    /* elemsInput[i].addEventListener('click', task6); */
}

function task5() {
    elemP.innerHTML = this.value;
}

function task6() {
    alert(this.value);
    this.removeEventListener('click', task6);
}



let paragNumbers = document.getElementsByTagName('p');

for (let i = 0; i < paragNumbers.length; i++) {
    paragNumbers[i].addEventListener('click', task7);
}

function task7() {
    this.innerHTML = this.innerHTML * this.innerHTML;
}



let inputTests = document.getElementsByTagName('input');

for (let i = 0; i < inputTests.length; i++) {
    inputTests[i].addEventListener('blur', task8);
}

function task8() {
    let correctLenght = this.getAttribute('data-lenght');
    let inputLenght = this.value.length;
    if (correctLenght == inputLenght) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
}



let divColor = document.getElementsByClassName('task9');

for (let i = 0; i < divColor.length; i++) {
    divColor[i].addEventListener('click', divColorRed);
}

function divColorRed() {
    this.style.background = 'red';
    this.removeEventListener('click', divColorRed);
    this.addEventListener('click', divColorGreen);
}

function divColorGreen() {
    this.style.background = 'green';
    this.removeEventListener('click', divColorGreen);
    this.addEventListener('click', divColorRed);
}
