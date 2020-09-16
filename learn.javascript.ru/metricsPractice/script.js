let elemTask1 = document.querySelector('.task1');
let submitTask1 = elemTask1.nextElementSibling;
let submitTask2 = submitTask1.nextElementSibling;

submitTask1.addEventListener('click', () => {
    alert('Толщина вверхней границы элемента: ' + elemTask1.clientTop + 'px');
});

submitTask2.addEventListener('click', () => {
    alert('Толщина левой границы элемента: ' + elemTask1.clientLeft + 'px');
});



let elemTask3 = document.querySelector('.task3');
let submitTask3 = elemTask3.nextElementSibling;
let submitTask4 = submitTask3.nextElementSibling;
let submitTask5 = submitTask4.nextElementSibling;
let submitTask6 = submitTask5.nextElementSibling;

submitTask3.addEventListener('click', () => {
    alert('Полная ширина с учетом границы и padding: ' + elemTask3.offsetWidth + 'px');
});

submitTask4.addEventListener('click', () => {
    alert('Полная высота с учетом границы и padding: ' + elemTask3.offsetHeight + 'px');
});

submitTask5.addEventListener('click', () => {
    alert('Полная ширина без учета границы, но с padding: ' + elemTask3.clientWidth + 'px');
});

submitTask6.addEventListener('click', () => {
    alert('Полная высота без учета границы, но с padding: ' + elemTask3.clientHeight + 'px');
});



let elemTask7 = document.querySelector('.task7');
let submitTask7 = elemTask7.nextElementSibling;

submitTask7.addEventListener('click', () => {
    let objStyleTask7 = getComputedStyle(elemTask7);
    alert('Ширина и высота, без учета границы и padding: ' + objStyleTask7.width + ' и ' + objStyleTask7.height);
});



let elemTask8 = document.querySelector('.task8');
let submitTask8 = elemTask8.nextElementSibling;
let submitTask10 = submitTask8.nextElementSibling;
let submitTask11 = submitTask10.nextElementSibling;

submitTask8.addEventListener('click', () => {
    alert('Элемент прокручен сверху на: ' + elemTask8.scrollTop);
});

submitTask10.addEventListener('click', () => {
    elemTask8.scrollTop = 100;
});

submitTask11.addEventListener('click', () => {
    elemTask8.scrollTop += 100;
});



let elemTask9 = document.querySelector('.task9');
let submitTask9 = elemTask9.nextElementSibling;

submitTask9.addEventListener('click', () => {
    alert('Элемент прокручен слева на: ' + elemTask9.scrollLeft);
});



let elemTask12 = document.querySelector('.task12');
let submitTask12 = elemTask12.nextElementSibling;
let submitTask14 = submitTask12.nextElementSibling;

submitTask12.addEventListener('click', () => {
    alert('Реальная высота элемента с учетом прокрутки: ' + elemTask12.scrollHeight + 'px');
});

submitTask14.addEventListener('click', () => {
    let totalHeight = elemTask12.scrollHeight;
    let resultHeight = totalHeight - 200;
    elemTask12.scrollTop = resultHeight;
});



let elemTask13 = document.querySelector('.task13');
let submitTask13 = elemTask13.nextElementSibling;

submitTask13.addEventListener('click', () => {
    alert('Реальная ширина элемента с учетом прокрутки: ' + elemTask13.scrollWidth + 'px');
});



let elemTask15 = document.querySelector('.task15');
let submitTask15 = elemTask15.nextElementSibling;

submitTask15.addEventListener('click', () => {
    alert(pageYOffset);
});


let elemTask16 = document.querySelector('.task16');
let submitTask16 = elemTask16.nextElementSibling;

submitTask16.addEventListener('click', () => {
    alert(pageXOffset);
});



let submitTask17 = document.querySelector('.task17');
let submitTask18 = document.querySelector('.task18');

submitTask17.addEventListener('click', () => {
    window.scrollTo(300, 500);
});

submitTask18.addEventListener('click', () => {
    window.scrollBy(0, 300);
});



let submitTask19 = document.querySelector('.task19');

submitTask19.addEventListener('click', () => {
    window.scrollTo(0, document.body.clientHeight);
});



let submitTask20 = document.querySelector('.task20');

submitTask20.addEventListener('click', () => {
    window.scrollBy(0, 400);
});



let submitTask21 = document.querySelector('.task21');

submitTask21.addEventListener('click', () => {
    if (document.body.scrollHeight - document.body.scrollTop === document.body.clientHeight) {
        window.scrollTo(0, 100);
    }
});



let elemTask22 = document.querySelector('.task22');

elemTask22.addEventListener('click', function() {
    let fullWidthTask22 = this.offsetWidth;
	let fullHeightTask22 = this.offsetHeight;
	this.style.width = (fullWidthTask22 * 2) + 'px';
    this.style.height = (fullHeightTask22 * 2) + 'px';
});
