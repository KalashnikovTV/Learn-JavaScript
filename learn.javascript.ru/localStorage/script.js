let textarea = document.getElementById('textarea');

textarea.addEventListener('change', function () {
    localStorage.setItem('str', textarea.value);
});

textarea.value = localStorage.getItem('str');



let text = document.getElementById('text'),
    left = document.getElementById('left'),
    right = document.getElementById('right'),
    arr,
    a;

if (localStorage['arr']) {
    let json = localStorage.getItem('arr');
    arr = JSON.parse(json);
    text.value = arr[arr.length - 1];
    a = arr.length - 1;
} else {
    arr = [];
}

text.addEventListener('change', function () {
    arr.push(this.value);
    a = arr.length - 1;
    let json = JSON.stringify(arr);
    localStorage.setItem('arr', json);
});

left.addEventListener('click', function () {
    if (arr.length > 0 && a !== 0) {
        text.value = arr[a - 1];
        a--;
    }
});

right.addEventListener('click', function () {
    if (arr.length > 0 && a < arr.length - 1) {
        text.value = arr[a + 1];
        a++;
    }
});
