/* function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        '(?:^|\s)' + name.replace(/([.$?*+\\\/{}|()\[\]^])/g, '\\$1') + '=(.*?)(?:;|$)'
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
document.cookie = 'name=Иван';
alert(getCookie('name')); */



/* function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

document.cookie = 'name=Виталий';
document.cookie = 'age=25';
alert(getCookie('name'));
alert(getCookie('age')); */



function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let input = document.querySelector('input'),
    button = document.querySelector('button');

button.addEventListener('click', function () {
    document.cookie = 'city=' + input.value;
    console.log(document.cookie);
});

let city = getCookie('city');
if (city) {
    alert('Ваш город: ' + city);
}



function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function timer() {
    let input3 = document.querySelector('.input3'),
        arr = input3.value.split('.').map(function (item) {
            return item * 1;
        }),
        div3 = document.querySelector('.div3'),
        date = new Date(),
        bitr = new Date(date.getFullYear(), arr[1] - 1, arr[0], 0, 0, 0);
    if (bitr - date < 0) {
        bitr.setFullYear(date.getFullYear() + 1);
    }
    let diffDay = (bitr - date) / 86400000,
        diffHour = (bitr - date) / 3600000 - Math.floor(diffDay) * 24,
        diffMin = diffHour * 60 - Math.floor(diffHour) * 60,
        diffSec = diffMin * 60 - Math.floor(diffMin) * 60,
        strTime = Math.floor(diffDay) + ' дней ' + Math.floor(diffHour) + ' часов ' + Math.floor(diffMin) + ' минут ' + Math.floor(diffSec) + ' секунд';

    div3.innerHTML = strTime;
}

function start() {
    window.setInterval(timer, 1000);
}

let but3 = document.querySelector('.button3');
but3.addEventListener('click', function () {
    let input3 = document.querySelector('.input3');
    document.cookie = "birthday=" + input3.value;
})

let birthday = getCookie("birthday");
if (birthday) {
    start();
}