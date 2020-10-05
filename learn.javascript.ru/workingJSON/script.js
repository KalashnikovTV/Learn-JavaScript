// Работа с JSON.parse
let arr = '["Коля", "Вася", "Петя"]';
let json = JSON.parse(arr);
console.log(json[2]);

// Работа с JSON.stringify
let obj = {a: 'aaa', b: 'bbb'};
let json2 = JSON.stringify(obj);
console.log(json2);



let user = {
    name: "Василий Иванович",
    age: 35
};
let json3 = JSON.stringify(user);
console.log(json3);
let read = JSON.parse(json3);
console.log(read);
