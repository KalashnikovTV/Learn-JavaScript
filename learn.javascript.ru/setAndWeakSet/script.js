let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);



let set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
console.log(set2.size);



let set3 = new Set();
set3.add(1);
set3.add(2);
set3.add(3);
console.log(set3.has(3));
console.log(set3.has(4));



let set4 = new Set();
set4.add(1);
set4.add(2);
set4.add(3);
console.log(set4);
set4.add(2);
console.log(set4);



let arr5 = [1, 2, 3, 4, 5];
let set5 = new Set();
for (let elem of arr5) {
    set5.add(elem);
}
console.log(set5);



let arr6 = [1, 2, 3, 4, 5];
let set6 = new Set();
for (let elem of arr6) {
    if (elem % 2 == 0) {
        set6.add(elem);
    }
}
console.log(set6);



let set7 = new Set();
set7.add(1);
set7.add(2);
set7.add(3);
for (let elem of set7) {
    console.log(elem);
}



let set8 = new Set();
let sum = 0;
set8.add(1);
set8.add(2);
set8.add(3);
for (let elem of set8) {
    sum += elem;
}
console.log(sum);



let inputTask9 = document.querySelector('.task9');
let resultTask9 = document.querySelector('.result-task9');
let buttonTask9 = resultTask9.nextElementSibling;
let set9 = new Set();

buttonTask9.addEventListener('click', () => {
    set9.add(inputTask9.value);
    let str = '';
    for (let elem of set9) {
        str += elem + ', ';
    }
    resultTask9.innerHTML = str;
    inputTask9.value = '';
});



function uniq(arr10) {
    return [...new Set(arr10)];
    /* return Array.from(new Set(arr10)); */
}
console.log(uniq([1, 2, 2, 3, 4, 5, 3, 2, 5, 7, 6]));



let set11 = new Set();
let buttonTask11 = document.querySelector('.btn-task11');
let paragTask11 = document.querySelectorAll('.parag-task11');

for (let elem of paragTask11) {
    elem.addEventListener('click', function () {
        set11.add(this);
    });
}

buttonTask11.addEventListener('click', function () {
    for (let elem of set11) {
        elem.innerHTML += '!';
    }
    set11.clear();
});

