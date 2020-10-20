// Задача на slideUp, slideDown
$('.hide_task1').click(function () {
    $('.task1').slideUp(2000);
});

$('.show_task1').click(function () {
    $('.task1').slideDown(2000);
});

// Задача на slideToggle
$('.hide_task2').click(function () {
    let $self = $(this);
    $('.task2').slideToggle(2000, function () {
        if ($self.html() === 'Свернуть') {
            $self.html('Развернуть');
        } else {
            $self.html('Свернуть');
        }
    });
});

// Задача на fadeIn, fadeOut
$('.hide_task3').click(function () {
    $('.task3').fadeOut(2000);
});

$('.show_task3').click(function () {
    $('.task3').fadeIn(2000);
});

$('.fadeHide_task3').click(function () {
    $('.task3').fadeTo(2000, 0.5);
});

$('.fadeShow_task3').click(function () {
    $('.task3').fadeTo(2000, 1);
});

// Задача на fadeToggle
$('.hide_task4').click(function () {
    let $self = $(this);
    $('.task4').fadeToggle(2000, function() {
        if ($self.html() == 'Спрятать') {
            $self.html('Показать');
        } else {
            $self.html('Спрятать');
        }
    });
});

// Задача на show, hide
$('.hide_task5').click(function () {
    $('.task5').hide(1000);
});

$('.show_task5').click(function () {
    $('.task5').show(1000);
});

// Задача на animate
$('.box_task6').one('click', function() {
    $(this).animate({width: '+=100px'}, 1000);
});


$('.box_task7').click(function() {
    $(this).animate({width: '+=200px'}, 1000);
});


$('.box_task8').click(function() {
    $(this).animate({width: '+=100px', height: '+=100px'}, 1000);
});


$('.box_task9').click(function() {
    $(this).animate({marginLeft: '+=100px'}, 1000);
});