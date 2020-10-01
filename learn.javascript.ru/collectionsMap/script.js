let map1 = new Map();
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
map1.set(arr1, 'sting1');
map1.set(arr2, 'sting2');
map1.set(arr3, 'sting3');

for (let [key, elem] of map1) {
    console.log(key);
    console.log(elem);
}



let map2 = new Map();
let arr4 = [1, 2, 3];
map2.set(arr4, 'sting4');
let keys = map2.keys();

for (let key of keys) {
    console.log(key);
}



let map3 = new Map();
let arr5 = [1, 2, 3];
map3.set(arr5, 'sting5');
let values = map3.values();

console.log(values);
for (let value of values) {
    console.log(value);
}



let map4 = new Map();
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
map4.set(arr6, 'sting6');
map4.set(arr7, 'string7');
console.log(map4.size);



let parag = document.querySelectorAll('.task6');
let map6 = new Map();
for (let i = 0; i < parag.length; i++) {
    let map = new Map();
    map.set(parag[i], i);
    console.log(map);
    parag[i].addEventListener('click', function() {
        this.innerHTML += i+1;
    });
}



let inputs = document.querySelectorAll('input');
let map = new Map();

for (let input of inputs) {
    map.set(input, {values: [], index: -1});

    input.addEventListener('blur', function() {
        let {values, index} = map.get(this);
        values.push(this.value);
        map.set(this, {values, index: index + 1});
        
        this.value = '';
        console.log(map.get(this));
    });

    input.addEventListener('keydown', function(event) {
        if (event.key == 'ArrowLeft') {
            let {values, index} = map.get(this);

            if (index > -1) {
                this.value = values[index];
                map.set(this, {values: values, index: index - 1});
            }

            event.preventDefault();
        }

        if (event.key == 'ArrowRight') {
            let {values, index} = map.get(this);

            if (index < values.length - 1) {
                this.value = values[index + 1];
                map.set(this, {values: values, index: index + 1});
            }

            event.preventDefault();
        }
    });
}
