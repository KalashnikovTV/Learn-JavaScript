let btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', function() {
    let form = document.getElementById('form');
    let elements = form.elements;

    let p = form.nextElementSibling;
    let result = 0;
    for (let i = 0; i < elements.length; i++) {
        result += Number(elements[i].value);
        p.innerHTML = `Сумма чисел: ${result}`;
    }
});



let btn = document.getElementById('btn');
let textResult = btn.previousElementSibling;

btn.addEventListener('click', function() {
    let forms = document.forms;
    let result = 0;

    for (let i = 0; i < forms.length; i++) {
        for (let j = 0; j < forms[i].elements.length; j++) {
            result += Number(forms[i].elements[j].value);
            textResult.innerHTML = 'Сумма чисел из всех форм: ' + result;
        }
    }
});



let firstSelect = document.getElementById('firstSelect');
let inputFirstSelect = firstSelect.nextElementSibling;

firstSelect.addEventListener('click', function() {
    for (let i = 0; i < firstSelect.length; i++) {
        if (firstSelect[i].selected) {
            inputFirstSelect.value = firstSelect[i].innerHTML;
        }
    }
});



let secondSelect = document.getElementById('secondSelect');
let inputSecondSelect = secondSelect.nextElementSibling;
let buttonSecondSelect = inputSecondSelect.nextElementSibling;

buttonSecondSelect.addEventListener('click', function() {
    secondSelect.selectedIndex= inputSecondSelect.value;
});



let countriesSelect = document.querySelector('#countries');
let citiesSelect = document.querySelector('#cities');

let data = {
    ru: ['Москва', 'Питер', 'Воронеж'],
    by: ['Минск', 'Могилев', 'Брест'],
    ua: ['Киев', 'Львов', 'Одесса'],
};

countriesSelect.addEventListener('change', function() {
    let cities = data[this.value];
    citiesSelect.length = 0;

    for (let i = 0; i < cities.length; i++) {
        citiesSelect.add(new Option(cities[i]));
    }
});

