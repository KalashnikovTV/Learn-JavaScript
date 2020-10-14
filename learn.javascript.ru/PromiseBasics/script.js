// Функции resolve и reject
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let load = true;
        if (load) {
            resolve('done');
        } else {
            reject('error');
        }
    }, 500);
});

promise.then(
    result => {alert('function good Task1');},
    error => {alert('error Task1');}
);



let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let load = false;
        if (load) {
            resolve('done');
        } else {
            reject('error');
        }
    }, 2000);
});

promise2.then(
    result => {alert('function good Task2');},
    error => {alert('error Task2');}
);


// Попрактикуемся
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let promise3 = new Promise(function(resolve, reject) {
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
    resul1t => {alert('all good Task3');},
    error => {alert('error Task3');}
);


// Метод catch
let promise4 = new Promise(function(resolve, reject) {
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
        result => {alert('all good Task4');}
    )
    .catch(
        error => {alert('error Task4');}
    );


// Цепочки промисов
let promise5 = new Promise(function(resolve, reject) {
    let num = 2;
    setTimeout(() => {
        resolve(num);
    }, 1000);
});

promise5.then(
    function(result) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(Math.pow(result, 2));
            }, 3000);
        });
    }
).then(
    function(result) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(Math.pow(result, 2));
            }, 3000);
        });
    }
).then(
    function(result) {
        alert(result);
    }
);


// Обработка ошибок
let promise6 = new Promise(function(resolve, reject) {
    let num = 2;
    setTimeout(() => {
        //resolve(num);
        reject(num);
    }, 1000);
});

promise6.then(
    function(result) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(Math.pow(result, 2));
            }, 3000);
        });
    }
).then(
    function(result) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(Math.pow(result, 2));
            }, 3000);
        });
    },
    function(error) {
        alert(error);
        throw new Error('awful error');
    }
).then(
    function(result) {
        alert(result);
    }
).catch(
    function(error) {
        console.log(error.message);
    }
);


// Работа с Promise.all
