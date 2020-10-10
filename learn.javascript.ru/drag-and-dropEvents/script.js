// Перетягиваемый элемент
let elem1 = document.querySelector('.elem1');

elem1.addEventListener('dragstart', function() {
    this.style.borderColor = 'red';
});



let elem2 = document.querySelector('.elem2');

elem2.addEventListener('dragend', function() {
    this.style.borderColor = 'green';
});



let elem3 = document.querySelector('.elem3');

elem3.addEventListener('drag', function() {
    console.log('!');
});


// Принимающий элемент
let parent4 = document.querySelector('.parent4');

parent4.addEventListener('dragover', function(event) {
    event.preventDefault();
});

parent4.addEventListener('drop', function() {
    this.style.borderColor = 'red';
});



let parent5 = document.querySelector('.parent5');

parent5.addEventListener('dragenter', function() {
    this.style.border = '2px dotted black';
});



let elem6 = document.querySelector('.elem6');
let parent6 = document.querySelector('.parent6');

parent6.addEventListener('dragenter', function() {
    this.innerHTML = '!';
});

parent6.addEventListener('dragleave', function() {
    this.innerHTML = 'Принимающий div6';
});



let elem7 = document.querySelector('.elem7');
let parent7 = document.querySelector('.parent7');

elem7.addEventListener('dragstart', function() {
    parent7.style.border = '2px dotted black';
});

elem7.addEventListener('dragend', function() {
    parent7.style.border = '2px solid black';
});
