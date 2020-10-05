// На '.', символы
console.log('ahb acb aeb aeeb adcb axeb'.replace(/a.b/g, '!'));

console.log('aba aca aea abba adca abea'.replace(/a..a/g, '!'));

console.log('aba aca aea abba adca abea'.replace(/ab.a/g, '!'));

// На '+', '*', '?', ()
console.log('aa aba abba abbba abca abea'.replace(/ab+a/g, '!'));

console.log('aa aba abba abbba abca abea'.replace(/ab*a/g, '!'));

console.log('aa aba abba abbba abca abea'.replace(/ab?a/g, '!'));

console.log('aa aba abba abbba abca abea'.replace(/ab*a/g, '!'));

console.log('ab abab abab abababab abea'.replace(/(ab)+/g, '!'));

// На экранировку
console.log('a.a aba aea'.replace(/a\.a/g, '!'));

console.log('2+3 223 2223'.replace(/2\+3/g, '!'));

console.log('23 2+3 2++3 2+++3 345 567'.replace(/2\++3/g, '!'));

console.log('23 2+3 2++3 2+++3 445 677'.replace(/2\+*3/g, '!'));

console.log('*+ *q+ *qq+ *qqq+ *qqq qqq+'.replace(/\*q+\+/g, '!'));

// На жадность
console.log('aba accca azzza wwwwa'.replace(/a.+?a/g, '!'));



// На {}
console.log('aa aba abba abbba abbbba abbbbba'.replace(/ab{2,4}a/g, '!'));

console.log('aa aba abba abbba abbbba abbbbba'.replace(/ab{0,3}a/g, '!'));

console.log('aa aba abba abbba abbbba abbbbba'.replace(/ab{4,}a/g, '!'));

// На \s, \S, \w, \W, \d, \D
console.log('a1a a2a a3a a4a a5a aba aca'.replace(/a\da/g, '!'));

console.log('a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d+a/g, '!'));

console.log('aa a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d*a/g, '!'));

console.log('avb a1b a2b a3b a4b a5b abb acb'.replace(/a\Db/g, '!'));

console.log('ave a#b a2b a$b a4b a5b a-b acb'.replace(/a\Wb/g, '!'));

console.log('ave a#a a2a a$a a4a a5a a-a aca'.replace(/\s/g, '!'));

// На [], '^' - не, [a-zA-Z], кириллицу
console.log('aba aea aca aza axa'.replace(/a[bex]a/g, '!'));

console.log('aba aea aca aza axa a.a a+a a*a'.replace(/a[b.+*]a/g, '!'));

console.log('a1a a2a a3a a4a a5a a6a a7a aba'.replace(/a[3-7]a/g, '!'));

console.log('aaa aba aca ada ana a6a aga'.replace(/a[a-g]a/g, '!'));

console.log('aaa aba aca ada afa aza aga'.replace(/a[a-fj-z]a/g, '!'));

console.log('aaa aBa aca aDa afa aZa aga'.replace(/a[a-fA-Z]a/g, '!'));

console.log('aba aea aca aza axa a-a a#a'.replace(/a[^ex]a/g, '!'));

console.log('wйw wяw wёw wqw'.replace(/w[а-яА-ЯЁё]w/g, '!'));

console.log('aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-z]+a/g, '!'));

console.log('aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-zA-z]+a/g, '!'));

console.log('aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-z0-9]+a/g, '!'));

console.log('ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'.replace(/[а-яА-ЯЁё]+/g, '!'));

// На '^', '$'
console.log('aaa aaa aaa'.replace(/^aaa/g, '!'));

console.log('aaa aaa aaa'.replace(/aaa$/g, '!'));

// На '|'
console.log('aeeea aeea aea axa axxa axxxa'.replace(/ae+a|ax+a/g, '!'));

console.log('aeeea aeea aea axa axxa axxxa'.replace(/ae{2}a|ax+a/g, '!'));

// На обратный слеш \
console.log('a\\a abc'.replace(/a\\a/g, '!'));

console.log('a\\a a\\\\a a\\\\\\a'.replace(/a\\{3}a/g, '!'));

// На экранировку посложнее
console.log('bbb /aaa\\ bbb /ccc\\'.replace(/\/[a-z]+\\/g, '!'));


// На карманы при замене
console.log('aaa@bbb eee7@kkk'.replace(/(\w+)@(\w+)/g, '$2@$1'));

console.log('a1b2c3'.replace(/(\d+)/g, '$1$1'));

// Задачи на test и match
console.log(/^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test('my_mail@mail.ru'));

console.log('my_mail@mail.ru'.match(/([a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3})/));

console.log(/^([a-z.-_]+\.[a-z]{2,3})$/.test('my-site.com'));

console.log(/^http:\/\/[a-z.-_]+\.[a-z]{2,3}$/.test('http://site.ru'));

console.log(/^https?:\/\/[a-z.-_]+\.[a-z]{2,3}$/.test('https://site.ru'));

console.log(/^https?/.test('http://site.ru'));

console.log(/\.(php|txt|html)$/.test('index.php'));

console.log(/\.jpe?g$/.test('index.jpeg'));

console.log(/^\d{12}$/.test('1234567891312312323'));

let arr = [];
let sum = 0;
let str="46 vf 45 ty";
arr = str.match(/\d/g);

for (let i = 0; i < arr.length; i++) {
	sum = sum + parseInt(arr[i]);
}
console.log(sum); 

// Задачи на replace
let str1 = "http://site.ru aa aaa http://site.com";
console.log(str1.replace(/http:\/\/site\.[a-z]{2,3}/g, "<a href=\"http:\/\/site\.ru\">site\.ru<\/a>"));

let str2 = "12 aa aaa 56";
console.log(str2.replace(/\s{2}/g, " "));   

let str3 ="/*dfdf*/ sadsad";
console.log(str3.replace(/\/\*.*?\*\//g, ""));

let str4 ="<!--dfdf--> sadsad <!--ghgh-->";
console.log(str4.replace(/<!--([\s\S]*?)-->/g, ""));


// На позитивный и негативный просмотр
console.log('aaab'.replace(/aaa(?=b)/g, '!'));

console.log('aaaw aaab'.replace(/aaa(?!b)/g, '!'));

// На replace
let res1 = '10 6 3 2'.replace(/\d+/g, function(match) {
	return match * match;
});
console.log(res1);


let res2 = "2aaa'3'bbb'4'".replace(/\d+(?=')/g, function (match) {
	return match * match;
});
console.log(res2);


let res3 = "2aaa'3'{{текст}}'4'".replace(/(т)(е)(к)(с)(т)(?=}})/g, '$5$4$3$2$1');
console.log(res3);


let res4 = '23 + 35 = '.replace(/(\d+)\s\+\s(\d+)\s= /g, function(match, match1, match2) {
	let sum = +match1 + +match2;
	return match + sum;
});
console.log(res4);

// Головоломки
console.log(/^(19\d\d|20\d\d|2100)$/.test('2101'));  

console.log(/^([01]\d|2[0-3]):[0-5]\d$/.test('24:00'));

console.log(/^([01]\d|2[0-3]):[0-5]\d\s[ap]m$/.test('24:00'));

console.log('aaa zzqzqaq hsdds'.replace(/\W*\w*(\w)\1\w*\W*/g, ''));

console.log('dsf xxx xxx sd'.replace(/\b(\w+)\s+\1/g, "$1"));

console.log('dsf xxx xxx xxx xxx xxx sd'.replace(/\b(\w+)\b(?:\s+\1\b)+/g, '$1'));
