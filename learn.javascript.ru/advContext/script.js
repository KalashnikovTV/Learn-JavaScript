let elem1 = document.getElementById('elem1');

function taskFirst() {
	console.log(this.value);
}
taskFirst.call(elem1);



let elem2 = document.getElementById('elem2');

function taskSecond(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}
taskSecond.call(elem2, 'Иванов', 'Иван');



let elem3 = document.getElementById('elem3');

function taskThird(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}
taskThird.apply(elem3, ['Иванов', 'Иван']);



let elem4 = document.getElementById('elem4');

function taskFour(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

var taskFour = taskFour.bind(elem4);

taskFour('Иванов', 'Иван'); 
taskFour('Петров', 'Петр');
