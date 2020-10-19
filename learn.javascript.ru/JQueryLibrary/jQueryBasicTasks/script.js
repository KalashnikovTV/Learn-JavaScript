// Задачи на html, text, css
$('h2').html('!');

$('h3').css('color', 'red');

$('h2').css({
	'color': 'blue',
	'font-size': '30px'
});

// Задачи на простые селекторы, +, ~
$('.test').css('color', 'red');

$('h2.test').css('color', 'red');

$('p + p').css('color', 'red');

$('li + li.www').css('color', 'red');

$('h2 i').css('color', 'red');

$('h2 > i').css('color', 'red');

// На селекторы jQuery
$(':header').css('color', 'red');

$('h2:not(.test)').css('color', 'red');

$(':header:not(.test)').css('color', 'red');

$(':header + :header').css('color', 'red');

$(':header.test + :header.test').css('color', 'red');

$(':empty').css('color', 'red');

$('p:first').css('color', 'red');

$('p:last').css('color', 'red');

$('li:contains("пункт")').css('color', 'red');

$('h2:has(i)').css('color', 'red');

$('h2 > i').css('color', 'red');

// Задачи на селекторы jQuery
$('li:eq(3)').css('color', 'red');

$('li:gt(9)').css('color', 'red');

$('li:lt(9)').css('color', 'red');

$('li:gt(8)').css('color', 'red');

$('li:first').css('color', 'red');

$('li:last').css('color', 'red');

$('ol li:first').css('color', 'red');

$('ol li:last').css('color', 'red');

$('ol li:eq(9)').css('color', 'red');

$('li:odd').css('color', 'red');

$('li:even').css('color', 'red');

$('ol li:odd').css('color', 'red');

$('ol li:even').css('color', 'red');

// Задачи на parent()
$('li.www').parent().css('color', 'red');

// Задачи на each
$('p').each(function () {
	alert($(this).html());
});

$(':header').each(function () {
	alert($(this).html());
});

$('li').each(function (index) {
	$(this).html(index);
});

$('li').each(function (index) {
	$(this).append(index);
});

// Задачи на манипулирование элементами страницы через jQuery
// Задачи на оборачивание элементов (wrap)
$('h2').wrap('<div>');

$('h2').wrap('<div class="test"></div>');

$('h2').wrapInner('<i>');

$('h2').wrapAll('<i>');

$('div > p').unwrap();

// Задачи на вставку элементов
$('h2').before('<p>!</p>');

$('h2').after('<p>?</p>');

$('h2').before('<p>!</p>').after('<p>?</p>');

$('h2').prepend('!');

$('h2').append('?');

$('h2').prepend('!').append('?').css('color', 'red');

$('h2').replaceWith($('h2').text());

// Задачи на удаление элементов
$('h2').remove();

$('h2').empty();

// Задачи на атрибуты
$('.www a').attr('href');

$('a:first').attr('href');

$('a').each(function () {
	$(this).attr('href');
});

$('a').attr('href', '!');

$('a').attr('target', '_blank');

$('a').each(function () {
	let $elem = $(this);
	$elem.html($elem.attr('href'));
});

$('a').each(function () {
	let $elem = $(this);
	$elem.html($elem.attr('href'));
});

$('a').each(function () {
	let $elem = $(this);
	$elem.attr('title', $elem.html());
});

// Задачи на работу с классами
$('li').attr('class', 'test');

$('li.www').removeAttr('class');

$('li').each(function () {
	let $elem = $(this);
	if ($elem.attr('class') != 'www') {
		$elem.attr('class', 'www');
	} else {
		$elem.removeAttr('class');
	}
});

$('a').each(function () {
	if ($(this).attr('class') == 'www') {
		console.log('Есть ссылка с классом www');
	}
});

// Задачи на атрибуты форм
alert($('input.in').val());

alert($('textarea.text').val());

$('input').each(function () {
	console.log($(this).val());
});

$('textarea.text').val('!');

$("input.number").each(function () {
	let $elem = $(this);
	let value = $elem.val();
	$elem.val(value * value);
});

$('checkbox').prop('checked', false);

$('checkbox').prop('checked', true);

$('checkbox').each(function () {
	$(this).prop('checked', !$(this).prop('checked'));
});

$("checkbox:last").prop('checked', false);

// Задачи на размеры
$('#wraper').children(':lt(3)').each(function () {
	let width = $(this).width();
	let height = $(this).height();
	console.log("Ширина: " + width + " Высота: " + height);
});

$('#wraper').children(':lt(3)').each(function () {
	let width = $(this).innerWidth();
	let height = $(this).innerHeight();
	console.log("Ширина: " + width + " Высота: " + height);
});

$('#wraper').children(':lt(3)').each(function () {
	let width = $(this).outerWidth();
	let height = $(this).outerHeight();
	console.log("Ширина: " + width + " Высота: " + height);
});

// Задачи на работу с набором элементов jQuery
// Задачи на работу с набором
$('li').not('.test');

$('li').first();

$('li').last();

$('li').eq(4);

$('li').eq(-2);

$('li').slice(2, 10);

$('li').filter('.www');

// Задачи на соседей
$('.test').next();

$('.test').prev();

$('.test').nextAll();

$('.test').prevAll();

$('.www').nextUntil('.test');

$('.test').prevUntil('.www');

$('li.www').siblings();

$('li.www').siblings('.test');

$('li.www').siblings(':not(.test)');

// Задачи на родителей
$('.test').parent();

$('b').parent().css('color', 'red');

$('b').closest('div').css('color', 'red');

// Задачи на find, add, andSelf, end
$('h2.www').css('color', 'red').find('.test').css('fontSize', '30px');

$('.www').css('color', 'red').find('p').append('!');

$('p.www').prepend('!').append('!!').add('h2').css('color', 'red');

// Задачи на is
$('h2').is('h2.test');

$(':header').nextAll().each(function () {
	if ($(this).is('p')) {
		$(this).append($(':header').html());
	}
});

$(':header').nextAll().each(function () {
	if (!$(this).is('p')) {
		$(':header').after('<p>' + $(':header').html() + '</p>');
	}
});
