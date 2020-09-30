let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
let [elem1, elem2, elem3, ...arr] = newArr;
console.log(elem1 + '|' + elem2 + '|' + arr);



let newArr2 = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
newArr2.reverse();
let [elem12, elem22] = newArr2;
console.log(elem12 + '|' + elem22);



let newArr3 = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
let [, elem23] = newArr3;
console.log(elem23);



let newArr4 = ['первый', 'второй'];
let [, elem24 = 'bbb', elem34 = 'eee'] = newArr4;
console.log(elem24 + '|' + elem34);



let obj5 = {name5: 'Петр', surname5: 'Петров', age5: '20 лет'};
let {name5, surname5, age5} = obj5;
console.log(name5 + '|' + surname5 + '|' + age5 + '|');



let obj6 = {name6: 'Петр'};
let {name6 = 'Аноном', surname6 = 'Анонимович', age6 = '?лет'} = obj6;
console.log(name6 + '|' + surname6 + '|' + age6);



let arr7 = ['elem1', 'elem2', 'elem3'];
for (let elem of arr7) {
    console.log(elem);
}



let arr8 = ['elem1', 'elem2', 'elem3'];
arr8.reverse();
for (let elem of arr8) {
    console.log(elem);
}



let arr9 = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr9) {
    sum += elem;
}
console.log(sum);



let str = '1o2o3o4o55fgsfvgfo';
let count = 0;
for (let elem of str) {
    if (elem == 'o') {
        count++;
    }
}
console.log(count);



let sayHello = (name = 'Аноним') => {
    alert('Привет, ' + name);
};
sayHello('Максим');



let options = {
	id: 'elem',
	color: 'blue',
	border: '1px solid red',
	font: '15px Arial'
};

function func({id, color = 'blue', border='1px dotted red', font='15px Tahoma'}) {
	let elem = document.querySelector('.test');
	let str = 'color:'+ color + '; border:'+border+'; font:'+font;
	elem.style.cssText = str;
}
func(options);



let parag = document.querySelectorAll('p');
parag.forEach(elem => elem.addEventListener('click',
    () => window.setInterval(
    () => elem.innerHTML=Number(elem.innerHTML) +1, 1000)
));
