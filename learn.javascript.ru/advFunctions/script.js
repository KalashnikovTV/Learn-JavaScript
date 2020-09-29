let arrFirst = [1, 2, 3, 4, 5];
let arrResult = [];

arrFirst.forEach(item => {
    arrResult.push(item * item);
});
console.log(arrResult);



let arrSecond = [1, 2, 3, 6, 9];
let sum = 0;

arrSecond.forEach(item => {
    sum += item;
});
console.log(sum);



let arrThird = [1, 2, 4, 6, 9];
let result = arrThird.map(function(item) {
    return item * item;
});
console.log(result);



let arrFour = [5, 6, 7, 8, 9];
let resultFour = arrFour.every(function(item) {
    if (item > 0) {
        return true;
    } else {
        return false;
    }
});
console.log(resultFour);



let arrFive = [5, 6, -7, 8, 9];
let resultFive = arrFive.some(function(item) {
    if (item < 0) {
        return true;
    } else {
        return false;
    }
});
console.log(resultFive);



let arr6 = [1, -3, 5, 6, -7, 8, 9, -11];
let result6 = arr6.filter(function(item) {
    if (item < 0) {
        return true;
    } else {
        return false;
    }
});
console.log(result6);



let arr7 = [1, -3, 5, 6, -7, 8, 9, -12];
let result7 = arr7.filter(function(item) {
    if (item % 2 == 0) {
        return true;
    } else {
        return false;
    }
}); 
console.log(result7);



let arr8 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
let result8 = arr8.filter(function(item) {
    if (item.length > 5) {
        return true;
    } else {
        return false;
    }
});
console.log(result8);



let arr9 = [1, 'string', [3, 4], 5, [6, 7]];
let result9 = arr9.filter(function(item) {
    if (Array.isArray(item)) {
        return true;
    } else {
        return false;
    }
});
console.log(result9);



let arr10 = [5, -3, 6, -5, 0, -7, 8, 9, -10];
let result10 = arr10.filter(function(item) {
    if (item < 0) {
        return true;
    } else {
        return false;
    }
});
console.log(result10.length);



let arr11 = [5, -3, 6, -5, 0, -7, 8, 9];
let result11 = arr11.reduce(function(sum, item) {
    return sum + item;
});
console.log(result11);



let arr12 = [1, 2, 3, 0, 4, 5, 6];
let answer = 0;
let result12 = arr12.reduce(function(sum, item) {
    if (item == 0) {
        answer = sum;
    } else {
        return sum + item;
    }
});
if (answer == undefined) {
    answer = result12;
}
console.log(answer);



let arr13 = [1, 2, 3, 0, 4, 5, 6];
let answer2 = 0;
let result13 = arr13.reduceRight(function(sum, item) {
    if (item == 0) {
        answer2 = sum;
    } else {
        return sum + item;
    }
});
if (answer2 == undefined) {
    answer2 = result13;
}
console.log(answer2);



let arr14 = [1, 2, 3, 0, 5, 5, 6];
let num = 1;
let result14 = arr14.reduce(function(sum, item) {
    if (sum > 10) {
        console.log(num);
    } else {
        num++;
        return sum + item;
    }
});



let arr15 = [1, 2, 3, 0, 4, 5, 6];
let num2 = 1;
let result15 = arr15.reduceRight(function(sum, item) {
    if (sum > 10) {
        console.log(num2);
    } else {
        num2++;
        return sum + item;
    }
});



let arr16 = [1, -2, 3, 0, 4, -5, 6, -11];
let positiveNum = arr16.filter(function(item) {
    if (item >= 0) {
        return true;
    } else {
        return false;
    }
});
let sqrtNum = positiveNum.map(function(item) {
     return Math.sqrt(item);
});
console.log('Все полож. элем.: ' + positiveNum + ' Корень из этих элем.: ' + sqrtNum);
