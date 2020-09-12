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
        elem[i].innerHTML = i + 1;
    }
}

function task7() {
    let elem = document.querySelectorAll('p.wwww');
    for (let i = 0; i < elem.length; i++) {
        elem[i].innerHTML = i + 1;
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
        elem[i].outerHTML = '<p class="task14">' + (i + 1) + '. ' + elem[i].innerHTML + '</p>';
    }
}


function getDateBirth() {
    let inputTime = document.querySelector('#inputtime'),
        timeBirth = document.querySelector('#timebirth');

    let inputRes = new Date(inputTime.value),
        today = new Date(),
        dayNow = new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());

    let result = Math.floor((inputRes.getTime() - dayNow.getTime()) / (1000 * 60 * 60 * 24));

    timeBirth.innerHTML = 'До вашего Дня Рождения осталось: ' + result + ' дней';
}

getDateBirth();
setInterval(getDateBirth, 1000);



let task15Elem = document.querySelector('.task15');
let input15Start = document.querySelector('.input15Start');


input15Start.addEventListener('click', task15Start);

function task15Start() {
    window.setInterval(function () {
        task15Elem.innerHTML = +task15Elem.innerHTML + 1;
    }, 1000);
}



let task16Elem = document.querySelector('.task16');
let input16Start = document.querySelector('.input16Start');
let input16Stop = document.querySelector('.input16Stop');

input16Start.addEventListener('click', task16Start);
input16Stop.addEventListener('click', task16Stop);

function task16Start() {
    window.timerId = window.setInterval(function () {
        task16Elem.innerHTML = +task16Elem.innerHTML + 1;
    }, 1000);

    this.disabled = true;
    input16Stop.disabled = false;

}

function task16Stop() {
    window.clearInterval(window.timerId);

    this.disabled = true;
    input16Start.disabled = false;
}



let task17Elem = document.querySelector('.task17');
let input17Start = document.querySelector('.input17Start');
let task17End = document.querySelector('.task17End');
let id;

input17Start.addEventListener('click', task17Start);

function task17Start() {
    id = window.setInterval(function () {
        task17Elem.innerHTML = +task17Elem.innerHTML - 1;
        if (task17Elem.innerHTML == 0) {
            window.clearInterval(id);

            task17End.innerHTML = 'Обратный отсчет завершен.';
        }
    }, 1000);

    input17Start.disabled = true;
}



function counterTime() {
    let elem = document.querySelector('.task18');
    let getTime = new Date();
    let currentTime = addZero(getTime.getHours()) + ':' + addZero(getTime.getMinutes()) + ':' + addZero(getTime.getSeconds());

    elem.innerHTML = 'Время на данный момент: ' + currentTime;

    function addZero(getTime) {
        if (getTime <= 9) {
            getTime = '0' + getTime;
        }
        return getTime;
    }
}
counterTime();
window.setInterval(counterTime, 1000);



let task19Slider = document.querySelector('.task19Slider');
let img = task19Slider.querySelector('img');
let images = ['1.png', '2.png', '3.png'];
let i = 1;

img.src = 'images/' + images[0];

window.setInterval(function () {
    img.src = 'images/' + images[i];

    i++;

    if (i == images.length) {
        i = 0;
    }
}, 1000);



function countdownTime() {
    let hoursRes = document.querySelector('#hours');
    let minutesRes = document.querySelector('#minutes');
    let secondsRes = document.querySelector('#seconds');

    let getTime = new Date();
    let midnightTime = new Date(getTime.getFullYear(), getTime.getMonth(), getTime.getDate() + 1, 0, 0, 0);

    let diff = Math.ceil((midnightTime - getTime) / 1000);

    let hours = Math.floor(diff / (60 * 60));
    diff = diff % (60 * 60);

    let minutes = Math.floor(diff / 60);
    diff = diff % 60;

    let seconds = diff;

    hoursRes.innerHTML = hours;
    minutesRes.innerHTML = addZero(minutes);
    secondsRes.innerHTML = addZero(seconds);

    function addZero(getTime) {
        if (getTime <= 9) {
            getTime = '0' + getTime;
        }
        return getTime;
    }
}
countdownTime();
window.setInterval(countdownTime, 1000);




let task20Slider = document.querySelector('.task20Slider');
let img1 = task20Slider.querySelector('.img1');
let img2 = task20Slider.querySelector('.img2');
let img3 = task20Slider.querySelector('.img3');
let input20Start = document.querySelector('.input20Start');

input20Start.addEventListener('click', carusel20);

img1.src = 'images/' + images[0];
img2.src = 'images/' + images[1];
img3.src = 'images/' + images[2];

function carusel20() {
    input20Start.disabled = true;

    let images = ['1.png', '2.png', '3.png'];

    function image1() {
        let i = 1;

        window.setInterval(function () {
            img1.src = 'images/' + images[i];

            i++;

            if (i == images.length) {
                i = 0;
            }
        }, 1000);
    }
    image1();

    function image2() {
        let i = 2;

        window.setInterval(function () {
            img2.src = 'images/' + images[i];

            i++;

            if (i == images.length) {
                i = 0;
            }
        }, 1000);
    }
    image2();

    function image3() {
        let i = 0;

        window.setInterval(function () {
            img3.src = 'images/' + images[i];

            i++;

            if (i == images.length) {
                i = 0;
            }
        }, 1000);
    }
    image3();
}
