let obj1 = {
    a: 1,
    b: 2
};

let sym1 = Symbol();
obj1[sym1] = 'aaa';
for (let elem in obj1) {
    console.log(obj1[elem]);
}

console.log(obj1[sym1]);



let obj2 = {
    a: 1,
    b: 2
};
let sym2 = Symbol();

obj2[sym2] = () => alert('!');
console.log(obj2);



let obj3 = {
    a: 1,
    b: 2,
    c: 3

};
let func3 = Symbol();

obj3[func3] = function () {
    let sum = 0;
    for (let key in obj3) {
        sum += obj3[key];
    }
    return sum;
};

console.log(obj3[func3]());



let arr4 = [1, 2, 3, 4];
let func4 = Symbol();

arr4[func4] = function () {
    let sum = 0;
    for (let key in arr4) {
        sum += arr4[key];
    }
    return sum;
};

console.log(arr4[func4]());



let arr5 = [1, 2, 3, 4];
let func5 = Symbol.for('func5');

arr5[func5] = function () {
    let sum = 0;
    for (let key in arr5) {
        sum += arr5[key];
    }
    return sum;
};

console.log(arr5[func5]());