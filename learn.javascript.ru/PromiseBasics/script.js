// Функции resolve и reject
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let load = true;
        if (load) {
            resolve('done');
        } else {
            reject('error');
        }
    }, 500);
});

promise.then(
    result => {
        alert('function good Task1');
    },
    error => {
        alert('error Task1');
    }
);



let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let load = false;
        if (load) {
            resolve('done');
        } else {
            reject('error');
        }
    }, 2000);
});

promise2.then(
    result => {
        alert('function good Task2');
    },
    error => {
        alert('error Task2');
    }
);


// Попрактикуемся
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let promise3 = new Promise(function (resolve, reject) {
    let i = 0;
    start();

    function start() {
        let interval = getRandomInt(1, 10);

        setTimeout(() => {
            i++;
            console.log(i, interval);

            if (interval <= 5) {
                resolve('result');
            } else if (interval > 5 && interval <= 10) {
                reject('error');
            }
        }, interval * 1000);
    }
});

promise3.then(
    resul1t => {
        alert('all good Task3');
    },
    error => {
        alert('error Task3');
    }
);


// Метод catch
let promise4 = new Promise(function (resolve, reject) {
    let i = 0;
    start();

    function start() {
        let interval = getRandomInt(1, 10);

        setTimeout(() => {
            i++;
            console.log(i, interval);

            if (interval <= 5) {
                resolve('result');
            } else if (interval > 5 && interval <= 10) {
                reject('error');
            }
        }, interval * 1000);
    }
});

promise4
    .then(
        result => {
            alert('all good Task4');
        }
    )
    .catch(
        error => {
            alert('error Task4');
        }
    );


// Цепочки промисов
let promise5 = new Promise(function (resolve, reject) {
    let num = 2;
    setTimeout(() => {
        resolve(num);
    }, 1000);
});

promise5.then(
    function (result) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(Math.pow(result, 2));
            }, 3000);
        });
    }
).then(
    function (result) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(Math.pow(result, 2));
            }, 3000);
        });
    }
).then(
    function (result) {
        alert(result);
    }
);


// Обработка ошибок
let promise6 = new Promise(function (resolve, reject) {
    let num = 2;
    setTimeout(() => {
        //resolve(num);
        reject(num);
    }, 1000);
});

promise6.then(
    function (result) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(Math.pow(result, 2));
            }, 3000);
        });
    }
).then(
    function (result) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(Math.pow(result, 2));
            }, 3000);
        });
    },
    function (error) {
        alert(error);
        throw new Error('awful error');
    }
).then(
    function (result) {
        alert(result);
    }
).catch(
    function (error) {
        console.log(error.message);
    }
);


// Работа с Promise.all
function getRand(num) {
    return Math.floor(Math.random() * num);
}

let array7 = [
    new Promise((resolve, reject) => {
        let rand = getRand(5);
        console.log('Task7 первый промис: ' + rand);
        setTimeout(
            () => resolve(rand), rand * 1000);
    }),
    new Promise((resolve, reject) => {
        let rand = getRand(5);
        console.log('Task7 второй промис: ' + rand);
        setTimeout(
            () => resolve(rand), rand * 1000);
    }),
    new Promise((resolve, reject) => {
        let rand = getRand(5);
        console.log('Task7 третий промис: ' + rand);
        setTimeout(
            () => resolve(rand), rand * 1000);
    }),
];

Promise.all(array7).then(
    result => console.log('Сумма промисов Task7: ' + Number(result[0] + result[1] + result[2]))
);


// Работа с Promise.race
let array8 = [
    new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(1), getRand(5) * 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(2), getRand(5) * 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(3), getRand(5) * 1000);
    }),
];

Promise.race(array8).then(
    result => console.log('Рез-т работы первого сработавшего промиса Task8: ' + result)
);


// Promise async await
function getNum() {
    return new Promise((resolve, reject) =>
        setTimeout(
            () => resolve(getRandomInt(1, 5)), 3000)
    );
}

async function pow() {
    let result = await getNum();
    console.log('Квадрат getNum Task9: ' + Math.pow(result, 2));
}
pow();



function getNum1() {
    return new Promise((resolve, reject) =>
        setTimeout(
            () => resolve(getRandomInt(1, 5)), 3000)
    );
}

function getNum2() {
    return new Promise((resolve, reject) =>
        setTimeout(
            () => resolve(getRandomInt(6, 10)), 5000)
    );
}

async function getNumbers() {
    let result1 = await getNum1();
    let result2 = await getNum2();
    console.log('Сумма полученных чисел с await Task10: ' + Number(result1 + result2));
}
getNumbers();


// Загрузка картинок через промисы
let images = [
    '../PromiseBasics/ldBQSSTQw_8.jpg',
    '../PromiseBasics/ldBQSSTQw_8.jpg',
    '../PromiseBasics/ldBQSSTQw_8.jpg',
    '../PromiseBasics/ldBQSSTQw_8.jpg',
];

function loadImage(path) {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.src = path;

        image.onload = () => resolve(image);
        image.onerror = () => reject('error path');
    });
}

Promise.all(images.map(loadImage)).then(
    images => {
        for (let image of images) {
            document.body.appendChild(image);
        }
    }
).catch(error => console.log(error));
