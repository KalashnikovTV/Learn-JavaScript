let a = 0;
if (a > 0) {
    let ggg1 = function () {
        console.log('!');
    };
} else {
    let ggg2 = function () {
        console.log('!!');
    };
}



let ggg3 = function (n, f) {
    return f(n);
};
funcNew = function (a) {
    return Math.pow(a, 2);
};
let num = 7;
console.log(ggg3((ggg3(num, funcNew)), funcNew));



let ggg4 = function (a, b) {
    return a() + b();
};
let f11 = function () {
    return 3;
};
let f22 = function () {
    return 4;
};
console.log(ggg4(f11, f22));



let ggg5 = function (a, b, c) {
    return b(a) + c(a);
};
let square = function (n) {
    return Math.pow(n, 2);
};
let cub = function (n) {
    return Math.pow(n, 3);
};
console.log(ggg5(3, square, cub));



let each = function (startArr, f) {
    return f(startArr);
};
let arr = [64, 49, 36, 25, 16];
let myFunc = function (a) {
    let newArr = [];
    for (let i = 0; i < a.length; i++) {
        newArr[i] = Math.sqrt(a[i]);
    }
    return newArr;
}
console.log(each(arr, myFunc));



let each2 = function (numArr, funcArray) {
    let newArr = [];
    for (let i = 0; i < numArr.length; i++) {
        let current = funcArray[i % funcArray.length](numArr[i]);
        newArr.push(current);
    }
    return newArr;
}

let f1 = function (a) {
    return a + 3;
};
let f2 = function (a) {
    return a + 2;
};
let f3 = function (a) {
    return a + 1;
};
let funcAll = [f1, f2, f3];
let startArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(each2(startArray, funcAll));



function counter() {
    let i = 1;
    return function () {
        return i++;
    };
}

let func = counter();

console.log(func());
console.log(func());
console.log(func());



let btnTask8 = document.querySelectorAll('.task8');
let task8 = function(){
	let k = 1;
	return function() {
		this.innerHTML = k;
		return k++;
	}
};

for (let i = 0; i < btnTask8.length; i++) {
	btnTask8[i].addEventListener('click', task8(this));
}



let colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let paragTask9 = document.querySelectorAll('.task9');
let task9 = function(){
	let k = 0;
	return function() {
        this.style.color = colors[k];
        k++;
        if (k == colors.length) {
            k = 0;
        }
	};
};

for (let i = 0; i < paragTask9.length; i++) {
	paragTask9[i].addEventListener('click', task9(this));
}



let f0 = function(){
	let a = 0;
	let b = 1;
	let temp;
	return function() {
		this.nextElementSibling.innerHTML = a;
		temp = a;
		a = b;
		b = temp +a;
	}
};

let butsCollect = document.querySelectorAll('.task10');
for (let i = 0; i < butsCollect.length; i++) {
	butsCollect[i].addEventListener('click', f0());
}



let k1 = function() {
	let alreadyUsed = [];
	return function() {
		let newNum = Math.floor(Math.random() * 100 + 1);
		for (let i = 0; i < alreadyUsed.length; i++) {
			if (alreadyUsed[i] == newNum) {
                return;
            }
		}
		parag.innerHTML += newNum + ', ';
		alreadyUsed.push(newNum);
	};
};

let but = document.querySelector('.btn-task12').addEventListener('click', k1());
let parag = document.querySelector('.parag-task12');
