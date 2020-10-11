// Объект event.dataTransfer
let elems1 = document.querySelectorAll('.elem1');
let parent1 = document.querySelector('.parent1');

elems1.forEach(function(elem, index) {
    elem.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', index);
    });
});

parent1.addEventListener('dragover', function(event) {
    event.preventDefault();
});

parent1.addEventListener('drop', function(event) {
    console.log(event.dataTransfer.getData('text'));
    this.appendChild(elems1[event.dataTransfer.getData('text')]);
    this.innerHTML += event.dataTransfer.getData('text');
});



let elems3 = document.querySelectorAll('.elem3');
let parents3 = document.querySelectorAll('.parent3');

elems3.forEach(function(elem, index) {
    elem.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', index);
    });
});


parents3.forEach(function(parent) {
    parent.addEventListener('dragover', function(event) {
        event.preventDefault();
    });
    parent.addEventListener('drop', function(event) {
        this.appendChild(elems3[event.dataTransfer.getData('text')]);
    });
});



let elems4 = document.querySelectorAll('.elem4');
let parent4 = document.querySelector('.parent4');
let currentElem;

elems4.forEach(function(elem, index) {
    elem.addEventListener('dragstart', function(event) {
        currentElem = this;
    });
});

parent4.addEventListener('dragover', function(event) {
    event.preventDefault();
});

parent4.addEventListener('drop', function(event) {
    currentElem.remove();
});


// Изображение вместо копии элемента
let elems5 = document.querySelectorAll('.elem5');
let parent5 = document.querySelector('.parent5');

let img = new Image();
img.src = '../eventDataTransfer/AJX9h7PBnIc.jpg';

elems5.forEach(function(elem, index) {
    elem.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', index);

        event.dataTransfer.setDragImage(img, event.offsetX, event.offsetY);
    });
});

parent5.addEventListener('dragover', function(event) {
    event.preventDefault();
});

parent5.addEventListener('drop', function(event) {
    this.appendChild(elems1[event.dataTransfer.getData('text')]);
});



// Вид курсора при перетягивании
let elems6 = document.querySelectorAll('.elem6');
let parents = document.querySelectorAll('.curs');

elems6.forEach(function(elem, index) {
    elem.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', index);

    });
});

for (let i = 0; i < parents.length; i++) {
    parents[0].addEventListener('dragover', function(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    });
    parents[1].addEventListener('dragover', function(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });
    parents[2].addEventListener('dragover', function(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'link';
    });
    parents[3].addEventListener('dragover', function(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'none';
    });

    parents[i].addEventListener('drop', function(event) {
        this.appendChild(elems6[event.dataTransfer.getData('text')]);
    });
}
