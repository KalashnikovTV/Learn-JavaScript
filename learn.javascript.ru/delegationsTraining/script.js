let liTask1 = document.querySelectorAll('.task1 li');

for (let i = 0; i < liTask1.length; i++) {
    liTask1[i].addEventListener('click', function() {
        alert(liTask1[i].innerHTML);
    });
}



let ulTask2 = document.querySelector('.task2');
let btn = ulTask2.nextElementSibling;

btn.addEventListener('click', addText);

function addText() {
    let liTask2 = document.createElement('li');
    liTask2.innerHTML = 'пункт';
    ulTask2.appendChild(liTask2);
}



let divTask3 = document.querySelector('.task3');

divTask3.addEventListener('click', function (event) {
    divTask3.innerHTML = 'X: ' + event.clientX + ' Y: ' + event.clientY;
});



let ulTask4 = document.querySelector('.task4');
let btnTask4 = ulTask4.nextElementSibling;

ulTask4.addEventListener('click', function (event) {
    let li = event.target.closest('li');
    if (li) {
        li.innerHTML = li.innerHTML + '!';

    }
});

btnTask4.addEventListener('click', function () {
    let liTask4 = document.createElement('li');
    liTask4.innerHTML = 'пункт';
    ulTask4.appendChild(liTask4);
});



var firstname = document.getElementById('name');
var surname = document.getElementById('surname');
var submit = document.getElementById('submit');
var table = document.getElementById('table');
submit.addEventListener('click', addTr);

//добавляем строки и ячейки с инпута в таблицу
function addTr() {
    var tr = document.createElement('tr');
    var firstname1 = document.createElement('td');
    var surname1 = document.createElement('td');
    var delet = document.createElement('button');
    delet.innerHTML = 'delete';
    firstname1.innerHTML = window.firstname.value; //переносим значения с первого инпута в ячейку
    surname1.innerHTML = window.surname.value; //переносим значения со второго инпута в ячейку
    window.table.appendChild(tr);
    tr.appendChild(firstname1);
    tr.appendChild(surname1);
    tr.appendChild(delet);
    firstname.value = ''; //очистить первый инпут
    surname.value = ''; //очистить второй инпут
    delet.addEventListener('click', removeElem);
}

//с помощью кнопки "удалить" удаляем строку с таблицы
function removeElem(event) {
    var tm = event.target;
    tm.parentNode.parentNode.removeChild(tm.parentNode);
}

//функция для корректирования ячеек с помощью инпута
table.addEventListener('click', correct);

function correct(event) {
    if (!(event.target.tagName == 'TH' || event.target.tagName == 'TABLE' || event.target.matches('table tr input') == true)) //второе условие для того, что бы не создавать по клику инпут в инпуте
    {
        var input = document.createElement('input');
        input.value = event.target.innerHTML;
        event.target.innerHTML = '';
        event.target.appendChild(input);
        input.addEventListener('keypress', keyEnter);
        input.addEventListener('blur', func4);
    }
}

//по нажатию на энтер переносим значения с инпута в ячейку
function keyEnter(event) {
    var val = event.target;
    if (event.keyCode == 13) {
        val.removeEventListener('blur', func4); //если нажали энтер функция с фокусом удаляется
        val.parentNode.innerHTML = val.value;
    }
}

//когда теряем фокус переносим значения с инпута в ячейку
function func4(event) {
    if (event.type == 'blur') {
        var val = event.target;
        val.parentNode.innerHTML = val.value;
    }
}
