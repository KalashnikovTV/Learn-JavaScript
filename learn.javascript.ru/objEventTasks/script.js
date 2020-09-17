let elemTask1 = document.querySelector('.task1');

elemTask1.addEventListener('mousemove', function (event) {
    elemTask1.innerHTML = 'X:' + event.clientX + ' Y:' + event.clientY;
});



let elemTask2 = document.querySelector('.task2');
let squareTask2 = elemTask2.firstElementChild;

elemTask2.addEventListener('click', function (event) {
    squareTask2.style.left = event.clientX + 'px';
    squareTask2.style.top = event.clientY + 'px';
});



document.documentElement.addEventListener('click', function (event) {
    let elem = document.getElementById('elem');
    elem.style.position = 'absolute';
    elem.style.top = (event.clientY - parseInt(getComputedStyle(elem).height) / 2) + 'px';
    elem.style.left = (event.clientX - parseInt(getComputedStyle(elem).width) / 2) + 'px';
});



let elemTask3 = document.querySelector('.task3');
let spanShow = document.querySelector('.show-code');
let spanKey = document.querySelector('.show-key');

elemTask3.addEventListener('keypress', function(event) {
    let code = event.keyCode;
    let key = String.fromCharCode(code);
    spanShow.innerHTML = code;
    spanKey.innerHTML = key;
});



let elemTask6 = document.querySelector('.task6');

elemTask6.addEventListener('click', function(event) {
    if (event.ctrlKey) {
        elemTask6.style.backgroundColor = 'blue';
    }
});



let elemTask7 = document.querySelector('.task7');
let textSpan = document.querySelector('.text-span');

elemTask7.addEventListener('click', function(event) {
    if (event.ctrlKey) {
        textSpan.innerHTML = '1';
    }
    if (event.altKey) {
        textSpan.innerHTML = '2';
    }
    if (event.shiftKey) {
        textSpan.innerHTML = '3';
    }
});



let elemTask8 = document.querySelector('.task8');
let p = elemTask8.nextElementSibling;

elemTask8.addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        p.innerHTML = this.value;
        this.value = '';
    }
});
