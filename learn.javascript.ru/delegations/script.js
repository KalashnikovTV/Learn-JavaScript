let ul = document.getElementById('deleg');

ul.addEventListener('click', addText);

function addText(event) {
    event.target.innerHTML = event.target.innerHTML + '!';
}

let btn = document.getElementById('button');
btn.addEventListener('click', addLi);

function addLi() {
    let li = document.createElement('li');
    li.innerHTML = 'пункт';
    ul.appendChild(li);
}



let table = document.querySelector('.table');
let btnSend = document.querySelector('.button-send');
let form = document.querySelector('.form');
let surname = form.firstElementChild;
let name = surname.nextElementSibling;

btnSend.addEventListener('click', function () {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    if (surname.value != '' && name.value != '') {
        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        td1.innerHTML = surname.value;
        td2.innerHTML = name.value;
    } else {
        alert('Добавьте все данные!');
    }
});

table.addEventListener('click', function (event) {
    event.target.innerHTML = prompt('Введите новое значение');
});