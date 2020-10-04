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
