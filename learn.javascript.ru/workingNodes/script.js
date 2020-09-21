let elem2 = document.querySelector('.task2');
console.log(elem2.firstChild);


let elem3 = document.querySelector('.task3');
console.log(elem3.firstChild.data = '! ');


let elem4 = document.querySelector('.task4');
console.log(elem4.lastChild.data = ' !');


let elem5 = document.querySelector('.task5');
console.log(elem5.firstChild.data);


let elem6 = document.querySelector('.task6');
console.log(elem6.firstChild.data = '!');


let elem7 = document.querySelector('.task7');
for (let i = 0; i < elem7.childNodes.length; i++) {
    console.log(elem7.childNodes[i]);
}
for (let i = 0; i < elem7.children.length; i++) {
    console.log(elem7.children[i]);
}


let elem8 = document.querySelector('.task8');
console.log(elem8.childNodes[2].textContent);


let elem9 = document.querySelector('.task9');
console.log(elem9.children[1].textContent);


let elem10 = document.querySelector('.task10');
let spanTask10 = elem10.childNodes[2];
console.log(spanTask10.previousSibling.textContent);
console.log(spanTask10.nextSibling.nextSibling.textContent);


let elem11 = document.querySelector('.task11');
let spanTask11 = elem11.children[1];
console.log(spanTask11.previousElementSibling.textContent);
console.log(spanTask11.nextElementSibling.textContent);


let elem12 = document.querySelector('.task12');
let spanTask12 = elem12.childNodes[2];
console.log(spanTask12.nextSibling.textContent);


let elem13 = document.querySelector('.task13');
for (let i = 0; i < elem13.childNodes.length; i++) {
    console.log(elem13.childNodes[i].textContent + ' Тип узла: ' + elem13.childNodes[i].nodeType);
}


let elem14 = document.querySelector('.task14');
console.log(elem14.childNodes);
let arr = Array.from(elem14.childNodes);
console.log(arr);
arr.forEach(item => {
    console.log(item);
});


let elem15 = document.querySelector('.task15');
console.log(elem15.children);
let arr2 = Array.from(elem15.children);
console.log(arr2);
arr2.forEach(item => {
    console.log(item);
});


let elem18 = document.querySelector('.task18');
let node = document.createTextNode('!!!');
elem18.insertBefore(node, elem18.children[0]);


let elem19 = document.querySelector('.task19');
let node2 = document.createTextNode('!!!');
elem19.insertBefore(node2, elem19.childNodes[1]);


let elem20 = document.querySelector('.task20');
elem20.removeChild(elem20.childNodes[0]);


let elem21 = document.querySelector('.task21');
elem21.childNodes.forEach(item => {
    if (item.nodeType == 3 || item.nodeType == 8) {
        console.log(item.textContent);
    }
    if (item.nodeType == 1) {
        console.log(item.innerHTML);
    }
});
