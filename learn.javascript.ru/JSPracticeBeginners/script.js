let inputsTask1 = document.querySelectorAll('.task1');
let resultTask1 = document.querySelector('.result-task1');
let buttonTask1 = document.querySelector('#button-task1');

buttonTask1.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < inputsTask1.length; i++) {
        sum += Number(inputsTask1[i].value);
    }
    console.log(sum);
    resultTask1.value = sum;
});



let inputsTask2 = document.querySelectorAll('.num');
let resultTask2 = document.querySelector('#result');
let buttonTask2 = document.querySelector('#button-task2');

buttonTask2.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < inputsTask2.length; i++) {
        sum += Number(inputsTask2[i].value);
    }
    console.log(sum);
    resultTask2.innerHTML += sum;
});



let inputTask3 = document.querySelector('.task3');
let resultTask3 = document.querySelector('.result-task3');

inputTask3.addEventListener('blur', function () {
    let sum = 0;
    let str = inputTask3.value;
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    resultTask3.innerHTML = 'Сумма введенных чисел: ';
    resultTask3.innerHTML += sum;
    inputTask3.value = '';
});



let inputTask4 = document.querySelector('.task4');
let resultTask4 = document.querySelector('.result-task4');

inputTask4.addEventListener('blur', function () {
    let sum = 0;
    let str = inputTask4.value;
    let arr = str.split(',');
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i] / arr.length);
    }
    resultTask4.innerHTML = 'Среднее арифм. введенных чисел: ';
    resultTask4.innerHTML += sum;
    inputTask4.value = '';
});



let inputTask5 = document.querySelector('.task5');
let resultsTask5 = document.querySelectorAll('.results-task5');

inputTask5.addEventListener('blur', function () {
    if (inputTask5.value !== 0) {
        let str = inputTask5.value;
        let arr = str.split(' ');
        for (let i = 0; i < arr.length; i++) {
            resultsTask5[i].value = arr[i];
        }
    }
    if (inputTask5.value == 0) {
        for (let i = 0; i < resultsTask5.length; i++) {
            resultsTask5[i].value = '';
        }
    }
});



let inputTask6 = document.querySelector('.task6');

inputTask6.addEventListener('blur', function () {
    let str = inputTask6.value;
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('');
        console.log(arr[i]);
        arr[i][0] = arr[i][0].toUpperCase();
        arr[i] = arr[i].join('');
    }
    str = arr.join(' ');
    inputTask6.value = str;
});



let inputTask7 = document.querySelector('.task7');
let resultTask7 = document.querySelector('.result-task7');

inputTask7.addEventListener('blur', function () {
    let str = inputTask7.value;
    let arr = str.split(' ');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += 1;
    }
    resultTask7.innerHTML = 'Количество слов: ';
    resultTask7.innerHTML += sum;
});



let inputTask8 = document.querySelector('.task8');
let resultTask8 = document.querySelector('.result-task8');

inputTask8.addEventListener('blur', function () {
    let str = inputTask8.value;
    let arr = str.split(' ');
    let arr2 = [];
    let max = 0;
    for (var i = 0; i < arr.length; i++) {
        var num = 0;
        arr2 = arr[i].split('');
        for (var j = 0; j < arr2.length; j++) {
            num += 1;
        }
        if (num > max) {
            max = num;
        }
    }
    resultTask8.innerHTML = 'Kоличество символов в самом длинном слове: ';
    resultTask8.innerHTML += max;
});



let inputTask9 = document.querySelector('.task9');

inputTask9.addEventListener('blur', function () {
    let str = inputTask9.value;
    let arr = str.split('.');
    arr = arr.reverse().join('-');
    inputTask9.value = arr;
});



let inputTask10 = document.querySelector('.task10');
let resultTask10 = document.querySelector('.result-task10');

inputTask10.addEventListener('blur', function () {
    let date = new Date();
    let userYear = inputTask10.value;
    let nowYear = date.getFullYear();
    resultTask10.innerHTML = 'Вам лет(год): ';
    resultTask10.innerHTML += (nowYear - userYear);
});



let inputTask11 = document.querySelector('.task11');
let resultTask11 = document.querySelector('.result-task11');

inputTask11.addEventListener('blur', function () {
    let dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let str = inputTask11.value;
    let arr = str.split('.');
    let arr2 = arr.reverse();
    let str1 = arr2.join(',');
    let date = new Date(str1);
    let day = date.getDay();
    resultTask11.innerHTML = 'День недели: ';
    resultTask11.innerHTML += dayWeak[day];
});



let inputTask12 = document.querySelector('.task12');
let resultTask12 = document.querySelector('.result-task12');

resultTask12.addEventListener('click', function () {
    let str = inputTask12.value;
    let arr = str.split('');
    let arr2 = str.split('').reverse();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            alert('Это слово не палиндром');
            break;
        } else {
            alert('Это слово палиндром');
            break;
        }
    }
});



let inputTask13 = document.querySelector('.task13');

inputTask13.addEventListener('blur', checkNum);

function checkNum() {
    let str = inputTask13.value;
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 3) {
            alert('Содержит число 3');
            return;
        }
    }
    alert('Не содержит число 3');
    return;
}



let paragraphTask14 = document.querySelectorAll('.task14');
let resultTask14 = document.querySelector('.result-task14');

resultTask14.addEventListener('click', function () {
    for (let i = 0; i < paragraphTask14.length; i++) {
        paragraphTask14[i].innerHTML += (i + 1);
    }
});




let paragraphTask15 = document.querySelectorAll('.task15');
let buttonTask15 = document.querySelector('.button-task15');
let resultTask15 = document.querySelector('.result-task15');

buttonTask15.addEventListener('click', function () {
    let arr = [];
    for (let i = 0; i < paragraphTask15.length; i++) {
        arr[i] = +paragraphTask15[i].innerHTML;
        console.log(arr);
    }
    resultTask15.value = arr.sort(sortNum);
});

function sortNum(a, b) {
    return (a - b);
};



let linkTask16 = document.querySelectorAll('.task16');

function linkAddHref() {
    for (let i = 0; i < linkTask16.length; i++) {
        linkTask16[i].innerHTML += `(${linkTask16[i].href})`;
    }
}
linkAddHref();



let linkTask17 = document.querySelectorAll('.task17');

function linkAddArrow() {
    for (var i = 0; i < linkTask17.length; i++) {
        if (linkTask17[i].href.indexOf('http://') == 0) {
            linkTask17[i].innerHTML += ' стрелка';
        }
    }
}
linkAddArrow();



let paragraphTask18 = document.querySelectorAll('.task18');

for (let i = 0; i < paragraphTask18.length; i++) {
    paragraphTask18[i].addEventListener('click', function () {
        this.innerHTML = this.innerHTML * this.innerHTML;
    });
}



let imagesTask19 = document.querySelectorAll('.task19');

for (let i = 0; i < imagesTask19.length; i++) {
    imagesTask19[i].addEventListener('click', function () {
        this.height = this.height * 2;
    });
}



let imagesTask20 = document.querySelectorAll('.task20');

for (let i = 0; i < imagesTask20.length; i++) {
    imagesTask20[i].addEventListener('click', increaseImg);
}

function increaseImg() {
    this.height = this.height * 2;
    this.removeEventListener('click', increaseImg);
    this.addEventListener('click', reduceImg);
}

function reduceImg() {
    this.height = this.height / 2;
    this.removeEventListener('click', reduceImg);
    this.addEventListener('click', increaseImg);
}



let imagesTask21 = document.querySelectorAll('.task21');
let resultTask21 = document.querySelector('.result-task21');

for (let i = 0; i < imagesTask21.length; i++) {
    imagesTask21[i].addEventListener('click', function () {
        resultTask21.src = this.src;
    });
}



let inputTask22 = document.querySelector('.task22');
let btnsTask22 = document.querySelectorAll('.btnsTask22');

for (let i = 0; i < btnsTask22.length; i++) {
    btnsTask22[i].addEventListener('click', function () {
        let num = +inputTask22.value + +this.value;
        if (num >= 0) {
            inputTask22.value = num;
        } else {
            inputTask22.value = 0;
        }
    });
}



let inputTask23 = document.querySelector('.task23');

inputTask23.addEventListener('blur', function () {
    if (inputTask23.value >= 1 && inputTask23.value <= 100) {
        inputTask23.style.background = 'green';
    } else {
        inputTask23.style.background = 'red';
    }
});



let inputTask24 = document.querySelector('.task24');
let resultTask24 = document.querySelector('.result-task24');

document.documentElement.addEventListener('mouseup', function () {
    let content = window.getSelection().toString();
    inputTask24.value = content;
});



let paragraphTask25 = document.querySelectorAll('.task25');
let btnTask25 = document.querySelector('.btnTask25');

btnTask25.addEventListener('click', function () {
    for (let i = 0; i < paragraphTask25.length; i++) {
        let str = paragraphTask25[i].innerHTML;
        let arr = +str.split(' ');
        let arr2 = [];
        arr2.push(arr);
        if (max.arr2 == arr2[i]) {
            paragraphTask25[i].style.background = 'red';
        }
    }

    function max(arr2) {
        return arr2.reduce((a, b) => a > b ? a : b);
    }
});



let paragraphTask26 = document.querySelectorAll('.task26');
let inputTask26 = document.querySelector('.inptTask26');

for (let i = 0; i < paragraphTask26.length; i++) {
    let count = 0;
    paragraphTask26[i].addEventListener('click', function () {
        count++;
        inputTask26.value = count;
    });
}



let inputTask27 = document.querySelector('.task27');

setInterval(function () {
    inputTask27.value = inputTask27.value * inputTask27.value;
}, 1000);



let inputTask28 = document.querySelector('.task28');
let strLenghtTask28 = inputTask28.previousElementSibling;
let symbolsTask28 = strLenghtTask28.previousElementSibling;
let buttonTask28 = document.querySelector('.button-task28');

buttonTask28.addEventListener('click', makeRandom);

//task 28, 29, 30 in this function
function makeRandom() {
    let result = '';
    /* let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; */
    let characters = symbolsTask28.value;
    let charactersLength = characters.length;
    for (let i = 0; i < strLenghtTask28.value; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    inputTask28.value = result;
}



let inputTask31 = document.querySelector('.task31');
let paragraphTask31 = inputTask31.nextElementSibling;

inputTask31.addEventListener('blur', redNum);

function redNum() {
    let num = parseInt(inputTask31.value);
    if (num > 0) {
        inputTask31.value = inputTask31.value - 1;
        paragraphTask31.innerHTML = inputTask31.value;
    }
    if (num == 0) {
        clearInterval(idIntervalTask31);
    }
}
let idIntervalTask31 = window.setInterval(redNum, 1000);



let paragraphTask32 = document.querySelector('.task32');

window.setInterval(paragColor, 1000);

function paragColor() {
    if (paragraphTask32.style.color == 'red') {
        paragraphTask32.style.color = 'green';
    } else {
        paragraphTask32.style.color = 'red';
    }
}



let paragraphTask33 = document.querySelector('.task33');
let i = 0;

window.setInterval(function () {
    let arr = ['red', 'green', 'blue', 'yellow', 'pink'];
    paragraphTask33.style.color = arr[i];
    i++;
    if (i >= arr.length) {
        i = 0;
    }
}, 1000);



let paragraphTask34 = document.querySelector('.task34');
let linkTask34 = paragraphTask34.nextElementSibling;

let arrStr = ['один', 'два', 'три', 'четыре'];
paragraphTask34.innerHTML = arrStr[0];
let j = 1;

linkTask34.addEventListener('click', function () {
    paragraphTask34.innerHTML = arrStr[j];
    j++;
    if (j >= arrStr.length) {
        j = 0;
    }
});



let inputsTask35 = document.querySelectorAll('.task35');
let numTask35 = 1;
let b = 0;
window.setInterval(inpValue, 1000);

function inpValue() {
    inputsTask35[b].value = numTask35;
    b++;
    numTask35++;
    if (b >= inputsTask35.length) {
        b = 0;
    }
}



let paragraphTask44 = document.querySelector('.task44');
let btnTask44 = document.querySelectorAll('.btn-task44');

for (let i = 0; i < btnTask44.length; i++) {
    btnTask44[i].addEventListener('click', removeBlock);
}

function removeBlock() {
    this.parentNode.style.display = 'none';
}



let inputsTask42 = document.querySelector('.task42');
let liTask42 = document.querySelectorAll('.ol-task42 li');

let n = 0;
inputsTask42.addEventListener('change', function () {
    n = +inputsTask42.value;
    liTask42[n - 1].style.color = 'red';
});



let inputTask45 = document.querySelector('.task45');
let btnTask45 = document.querySelector('.btn-task45');
let ulTask45 = document.querySelector('.ul-task45');

btnTask45.addEventListener('click', function () {
    let str = inputTask45.value;
    let arr = str.split(',');
    ulTask45.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = arr[i];
        ulTask45.appendChild(li);
    }
});



let inputTask46 = document.querySelector('.task46');
let paragraphTask46 = inputTask46.nextElementSibling;

inputTask46.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        paragraphTask46.innerHTML += inputTask46.value + ', ';
        inputTask46.value = '';
    }
});



let divTask47 = document.querySelectorAll('.task47');
let btnTask47 = document.querySelector('.btn-task47');

btnTask47.addEventListener('click', function () {
    let result = '';
    for (let i = 0; i < divTask47.length; i++) {
        result = divTask47[i].innerHTML.slice(0, 10) + '...';
        divTask47[i].innerHTML = result;
    }
});



let checkboxTask36 = document.querySelector('.task36');
let linkTask36 = document.querySelector('.link-task36');

linkTask36.addEventListener('click', function () {
    if (checkboxTask36.checked) {
        checkboxTask36.checked = false;
    } else {
        checkboxTask36.checked = true;
    }
});



let checkboxsTask37 = document.querySelectorAll('.task37');
let btnTask37 = document.querySelector('.btn-task37');

btnTask37.addEventListener('click', function () {
    for (let i = 0; i < checkboxsTask37.length; i++) {
        if (checkboxsTask37[i].checked) {
            checkboxsTask37[i].checked = false;
        } else {
            checkboxsTask37[i].checked = true;
        }
    }
});



let radiosTask38 = document.querySelectorAll('.task38');
let resultTask38 = document.querySelector('.result-task38');

for (let i = 0; i < radiosTask38.length; i++) {
    radiosTask38[i].addEventListener('change', resTask38);
}

function resTask38() {
    if (this.checked) {
        resultTask38.innerHTML = this.value;
    }
}



let checkboxsTask39 = document.querySelectorAll('.task39');
let resultTask39 = document.querySelector('.result-task39');

for (let i = 0; i < checkboxsTask39.length; i++) {
    checkboxsTask39[i].addEventListener('change', resTask39);
}

function resTask39() {
    if (this.checked) {
        resultTask39.innerHTML = resultTask39.innerHTML + this.value + ', ';
    }
}



let checkboxTask40 = document.querySelector('.task40');
let resultTask40 = document.querySelector('.result-task40');

checkboxTask40.addEventListener('change', function () {
    if (this.checked) {
        resultTask40.style.display = 'inline-block';
    } else {
        resultTask40.style.display = 'none';
    }
});



let checkboxsTask41 = document.querySelectorAll('.task41');
let resultsTask41 = document.querySelectorAll('.result-task41');

for (let i = 0; i < checkboxsTask41.length; i++) {
    checkboxsTask41[i].addEventListener('change', function () {
        if (this.checked) {
            resultsTask41[i].style.display = 'inline-block';
        } else {
            resultsTask41[i].style.display = 'none';
        }
    });
}



let checkboxsTask43 = document.querySelectorAll('.task43');
let resultsTask43 = document.querySelector('.result-task43');

for (let i = 0; i < checkboxsTask43.length; i++) {
    checkboxsTask43[i].addEventListener('change', function () {
        if (this.checked) {
            resultsTask43.style.cssText = this.value;
        } else {
            resultsTask43.style.cssText = '';
        }
    });
}



let tdsTask48 = document.querySelectorAll('.task48');
let btnTask48 = document.querySelector('.btn-task48');
let max = '';
let num = 0;

btnTask48.addEventListener('click', function () {
    for (let i = 0; i < tdsTask48.length; i++) {
        if (+tdsTask48[i].innerHTML > max) {
            max = +tdsTask48[i].innerHTML;
            num = i;
        }
    }
    tdsTask48[num].style.background = 'red';
});



let tdsTask49 = document.querySelectorAll('.task49');
let inputTask49 = document.querySelector('.result-task49');
let btnTask49 = document.querySelector('.btn-task49');

btnTask49.addEventListener('click', function () {
    let arr = [];
    for (let i = 0; i < tdsTask49.length; i++) {
        arr.push(tdsTask49[i].innerHTML);

    }
    arr.sort(sortFunction);
    let str = arr.join(', ');
    inputTask49.value = str;
});

function sortFunction(a, b) {
    return (a - b);
}



window.onload = function () {
    let tdsTask51 = document.querySelectorAll('.task51');
    let resultTask51 = document.querySelector('.result-task51');
    let clear = document.querySelector('#clear');
    let go = document.querySelector('#go');

    for (let i = 0; i < tdsTask51.length; i++) {
        tdsTask51[i].addEventListener('click', function () {
            this.classList.add('active');
        });
    }

    go.addEventListener('click', function () {
        let tdsTask51 = document.querySelectorAll('.active');
        let sum = 0;
        for (let i = 0; i < tdsTask51.length; i++) {
            sum += Number(tdsTask51[i].innerHTML);
        }
        resultTask51.innerHTML = 'Сумма активных ячеек: ' + sum;
    });

    clear.addEventListener('click', function () {
        let tdsTask51 = document.querySelectorAll('.task51');
        for (let i = 0; i < tdsTask51.length; i++) {
            tdsTask51[i].classList.remove('active');
        }
        resultTask51.innerHTML = 'Сумма активных ячеек: ' + 0;
    });
};



window.onload = function () {
    let tdsTask52 = document.querySelectorAll('.task52');
    for (let i = 0; i < tdsTask52.length; i++) {
        tdsTask52[i].addEventListener('click', function () {
            let val = this.innerHTML;
            this.style.display = "none";
            let inp = document.createElement('input');
            inp.value = val;
            inp.addEventListener('change', function () {
                this.previousElementSibling.innerHTML = this.value;
                this.previousElementSibling.style.display = "";
                this.parentNode.removeChild(this);
            });
            this.parentNode.insertBefore(inp, this.nextSibling);
        });
    }
};




let firstCurr = document.getElementById('first_curr');
let secondCurr = document.getElementById('second_curr');
let numb = document.getElementById('numb');
let result = document.getElementById('result-b');
let rates = {
    'rur': 1.00,
    'usd': 58.50,
    'eur': 62.15
};
let answer = 0;

firstCurr.addEventListener('change', convert);
secondCurr.addEventListener('change', convert);
numb.addEventListener('change', convert);

function convert() {
    if (firstCurr.value != secondCurr.value) {
        result.innerHTML = '';
        let answer = rates[firstCurr.value] / rates[secondCurr.value] * numb.value;
        result.innerHTML = answer;
    } else {
        alert('Выберите другую валюту!');
    }
}



let liTask58 = document.querySelectorAll('.task58');
let btnTask58 = document.querySelector('.btn-task58');

btnTask58.addEventListener('click', function() {
    let liArr = [];
    for (let i = 0; i < liTask58.length; i++) {
        liArr[i] = liTask58[i].innerHTML;
    }
    /* console.log(liArr); */
    liArr.sort(function(a, b) {return a - b});
    /* console.log(liArr); */
    for (let i = 0; i < liTask58.length; i++) {
        liTask58[i].innerHTML = liArr[i];
    }
});



let parag = document.querySelector('.result-task59');
let links = document.querySelectorAll('.task59');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        for (let j = 0; j < links.length; j++) {
            links[j].style.background = '';
        }
        this.style.background = 'red';
        parag.innerHTML = this.innerHTML;
    });
}
