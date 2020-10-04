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
