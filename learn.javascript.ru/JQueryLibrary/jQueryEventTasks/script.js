// События через отдельные методы
$('p.task1').click(function () {
    alert($(this).html());
});


$('a.task2').mouseover(function () {
    $(this).html($(this).html() + $(this).attr('href'));
});


$('a.task3').mouseover(function func() {
    $(this).html($(this).html() + $(this).attr('href'));
    $(this).unbind('mouseover', func);
});


$('input.task4').blur(function () {
    $('#test').text($(this).val());
});


$('input.task5').on('click', function func() {
    alert($(this).val());
    $(this).off('click', func);
});


$('p.task6').click(function () {
    $(this).html($(this).html() * $(this).html());
});


$('p.task7').on('click', function func() {
    $(this).html($(this).html() * $(this).html());
    $(this).off('click', func);
    $(this).on('dblclick', function func2() {
        $(this).html($(this).html() * 2);
        $(this).off('dblclick', func2);
    });
});

// Задачи на one
$('p.task8').one('click', function () {
    $(this).append('!');
});

// Задачи на делегирование через on
$('ul.task9').on('click', 'li', function () {
    $(this).html($(this).html() + '!');
});

$('#task9').click(function () {
    $('li').eq(0).clone().html('пункт').appendTo('ul');
});



$('input.task10:eq(2)').click(function () {
    $('tr:eq(0)').clone().html('<td>' + $('input.task10:eq(0)').val() +'</td><td>' + $('input.task10:eq(1)').val() + '</td>').appendTo('table');
});

$('table').on('click', 'td', function () {
    $(this).html(prompt('Введите новые данные'));
});
