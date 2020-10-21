$('p:has(b)').wrap('<div>');

$('p.www').prepend('!').add(':header').css('color', 'red');

//$(':checkbox:not([disabled])').prop('checked', true);

$('#test').prev().html('!').end().next().html('?');

$('li:eq(1)').addClass('.www').wrapInner('<i>').after('<li>привет</li>');

$('li:eq(9)').parent().prev().wrap('<div class="www">');

$('div').children(':not(h2)').css('color', 'red');

$('p').css('color', 'red').filter('.www').html('!');

$('p.www').css('color', 'red').first().html('!').end().last().html('?');

$('h2').nextUntil('h2').next().prevUntil('h2').filter('p').css('color', 'red');

$('p').wrap('<div>').wrapInner('<div>');

$('p').parent().not('div').children('p').wrap('<div class="www">');

$(':not(div.www) > p').unwrap().wrap('<div class="zzz">');

$('#test').children('p').append('!').not('.www').css('color', 'red');

$('li').slice(-4, -1).html('!');

$('li.www').css('color', 'red').filter('.bbb').remove();

$('#test').parentsUntil('.www').append('<p>!</p>');

$('#test').click(function () {
    $(this).parentsUntil('.www').find('p').css('color', 'red');
});

$('li').slice(0, 10).css('color', 'red');

$('li').slice(4, 10).css('color', 'red');

$('li').slice(-10).css('color', 'red').filter(':even').wrapInner('<b>');

let $checkboxes = $(':checkbox');
$checkboxes.on('click', function () {
    if ($(':checkbox:checked').length == 2) {
        $checkboxes.attr('disabled', 'true');
    }
});

$(':checkbox').each(function (index, elem) {
    elem.checked = !elem.checked;
});

$('input:not(.last)').each(function () {
    let $elem = $(this);
    $elem.attr('placeholder', $elem.val()).removeAttr('value');
});

$("a[href^='http://']").attr('target', '_blank');

$('input.last').on('blur', function () {
    let $input = $(this);
    $(':checkbox').each(function (i) {
        let $elem = $(this);
        if (i + 1 === $input.val() * 1) {
            $elem.prop('checked', true);
        } else {
            $elem.prop('checked', false);
        }
    });
});
