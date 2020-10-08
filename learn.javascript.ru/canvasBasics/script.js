// На линии
let canvasTask1 = document.getElementById('canvas-task1');
let ctxTask1 = canvasTask1.getContext('2d');

ctxTask1.beginPath();
ctxTask1.moveTo(50, 50);
ctxTask1.lineTo(100, 50);
ctxTask1.stroke();



let canvasTask2 = document.getElementById('canvas-task2');
let ctxTask2 = canvasTask2.getContext('2d');

ctxTask2.beginPath();
ctxTask2.moveTo(50, 50);
ctxTask2.lineTo(50, 100);
ctxTask2.stroke();



let canvasTask3 = document.getElementById('canvas-task3');
let ctxTask3 = canvasTask3.getContext('2d');

ctxTask3.beginPath();
ctxTask3.moveTo(50, 50);
ctxTask3.lineTo(100, 100);
ctxTask3.moveTo(100, 50);
ctxTask3.lineTo(50, 100);
ctxTask3.stroke();



let canvasTask4 = document.getElementById('canvas-task4');
let ctxTask4 = canvasTask4.getContext('2d');

ctxTask4.beginPath();
ctxTask4.moveTo(50, 50);
ctxTask4.lineTo(50, 100);
ctxTask4.lineTo(100, 100);
ctxTask4.lineTo(100, 50);
ctxTask4.lineTo(50, 50);
ctxTask4.stroke();



let canvasTask5 = document.getElementById('canvas-task5');
let ctxTask5 = canvasTask5.getContext('2d');

ctxTask5.beginPath();
ctxTask5.moveTo(100, 50);
ctxTask5.lineTo(50, 100);
ctxTask5.lineTo(150, 100);
ctxTask5.lineTo(100, 50);
ctxTask5.stroke();



let canvasTask6 = document.getElementById('canvas-task6');
let ctxTask6 = canvasTask6.getContext('2d');

ctxTask6.beginPath();
ctxTask6.moveTo(50, 50);
ctxTask6.lineTo(150, 50);
ctxTask6.lineTo(130, 65);
ctxTask6.moveTo(150, 50);
ctxTask6.lineTo(130, 35);
ctxTask6.stroke();



let canvasTask7 = document.getElementById('canvas-task7');
let ctxTask7 = canvasTask7.getContext('2d');

ctxTask7.rect(25, 25, 125, 100);
ctxTask7.stroke();



let canvasTask8 = document.getElementById('canvas-task8');
let ctxTask8 = canvasTask8.getContext('2d');

ctxTask8.moveTo(100, 50);
ctxTask8.lineTo(50, 150);
ctxTask8.lineTo(150, 150);
ctxTask8.fill();


// На фигуры
let canvasTask9 = document.getElementById('canvas-task9');
let ctxTask9 = canvasTask9.getContext('2d');

ctxTask9.fillRect(25, 25, 100, 100);



let canvasTask10 = document.getElementById('canvas-task10');
let ctxTask10 = canvasTask10.getContext('2d');

ctxTask10.strokeRect(25, 25, 100, 100);



let canvasTask11 = document.getElementById('canvas-task11');
let ctxTask11 = canvasTask11.getContext('2d');

ctxTask11.fillRect(25, 25, 100, 100);
ctxTask11.clearRect(40, 40, 50, 50);



let canvasTask12 = document.getElementById('canvas-task12');
let ctxTask12 = canvasTask12.getContext('2d');

ctxTask12.rect(25, 25, 125, 100);
ctxTask12.stroke();



let canvasTask13 = document.getElementById('canvas-task13');
let ctxTask13 = canvasTask13.getContext('2d');

ctxTask13.rect(25, 25, 125, 100);
ctxTask13.fill();


// На окружности
function getRadians(degrees) {
	return (Math.PI/180)*degrees;  // перевод градусов в радианы
}

let canvasTask14 = document.getElementById('canvas-task14');
let ctxTask14 = canvasTask14.getContext('2d');

ctxTask14.arc(100, 100, 50, 0, getRadians(360));
ctxTask14.stroke();



let canvasTask15 = document.getElementById('canvas-task15');
let ctxTask15 = canvasTask15.getContext('2d');

ctxTask15.arc(100, 100, 50, 0, getRadians(360));
ctxTask15.fill();



let canvasTask16 = document.getElementById('canvas-task16');
let ctxTask16 = canvasTask16.getContext('2d');

ctxTask16.arc(100, 100, 50, 0, getRadians(180));
ctxTask16.stroke();



let canvasTask17 = document.getElementById('canvas-task17');
let ctxTask17 = canvasTask17.getContext('2d');

ctxTask17.arc(100, 100, 50, 0, getRadians(180));
ctxTask17.lineTo(150, 100);
ctxTask17.stroke();



let canvasTask18 = document.getElementById('canvas-task18');
let ctxTask18 = canvasTask18.getContext('2d');

ctxTask18.arc(100, 100, 50, 0, getRadians(180));
ctxTask18.fill();



let canvasTask19 = document.getElementById('canvas-task19');
let ctxTask19 = canvasTask19.getContext('2d');

ctxTask19.arc(100, 100, 50, 0, getRadians(90));
ctxTask19.fill();


// На смену цвета
let canvasTask20 = document.getElementById('canvas-task20');
let ctxTask20 = canvasTask20.getContext('2d');

ctxTask20.beginPath();
ctxTask20.moveTo(50, 50);
ctxTask20.lineTo(150, 50);
ctxTask20.strokeStyle = 'red';
ctxTask20.stroke();


let canvasTask21 = document.getElementById('canvas-task21');
let ctxTask21 = canvasTask21.getContext('2d');

ctxTask21.beginPath();
ctxTask21.moveTo(50, 50);
ctxTask21.lineTo(150, 50);
ctxTask21.strokeStyle = 'red';
ctxTask21.stroke();
ctxTask21.beginPath();
ctxTask21.moveTo(50, 60);
ctxTask21.lineTo(150, 60);
ctxTask21.strokeStyle = 'green';
ctxTask21.stroke();



let canvasTask22 = document.getElementById('canvas-task22');
let ctxTask22 = canvasTask22.getContext('2d');

ctxTask22.rect(50, 50, 100, 100);
ctxTask22.fillStyle = 'green';
ctxTask22.fill();



let canvasTask23 = document.getElementById('canvas-task23');
let ctxTask23 = canvasTask23.getContext('2d');

ctxTask23.fillStyle = 'green';
ctxTask23.fillRect(75, 25, 50, 50);
ctxTask23.fillStyle = 'red';
ctxTask23.fillRect(75, 100, 50, 50);


// На циклы
let canvasTask24 = document.getElementById('canvas-task24');
let ctxTask24 = canvasTask24.getContext('2d');

for (let i = 1; i <= 10; i++) {
    ctxTask24.moveTo(50, 10*i + 40);
	ctxTask24.lineTo(150, 10*i + 40);
}
ctxTask24.stroke();



let canvasTask25 = document.getElementById('canvas-task25');
let ctxTask25 = canvasTask25.getContext('2d');

for (let i = 1; i <= 10; i++) {
    ctxTask25.moveTo(40, 10*i + 40);
	ctxTask25.lineTo(150, 10*i + 40);
}
for (let i = 1; i <= 10; i++) {
    ctxTask25.moveTo(10*i + 40, 40);
    ctxTask25.lineTo(10*i + 40, 150);
}
ctxTask25.stroke();
