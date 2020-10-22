$('#block1').click(function() {
    $(this).effect('blind', 500);
});


$('#block2').click(function() {
    $(this).effect('blind', {direction: 'horizontal'}, 500);
});


$('#block3').click(function() {
    $(this).effect('bounce', 1000);
});


$('#block4').click(function() {
    $(this).effect('bounce', {direction: 'horizontal'}, 1000);
});


$('#block5').click(function() {
    $(this).effect('clip', 500);
});


$('#block6').click(function() {
    $(this).effect('clip', {direction: 'horizontal'}, 500);
});


$('#block7').click(function() {
    $(this).effect('drop', 500);
});


$('#block8').click(function() {
    $(this).effect('drop', {direction: 'horizontal'}, 500);
});


$('#block9').click(function() {
    $(this).effect('drop', {direction: 'down'}, 500);
});


$('#block10').click(function() {
    $(this).effect('drop', {direction: 'up'}, 500);
});



$('#block11').click(function() {
    $(this).effect('explode', 500);
});


$('#block12').click(function() {
    $(this).effect('explode', {pieces: 4}, 500);
});


$('#block13').click(function() {
    $(this).effect('fold', 1000);
});


$('#block14').click(function() {
    $(this).effect('fold', {size: 100}, 1000);
});


$('#block15').click(function() {
    $(this).effect('fold', {horizFirst: true, size: 25}, 1000);
});


$('#link16').mouseover(function() {
    $('#block16').effect('highlight', {color: 'black'}, 1000);
});


$('#block17').click(function() {
    $(this).effect('puff', {percent: 300}, 500);
});


$('#block18').click(function() {
    $(this).effect('pulsate', 1000);
});


$('#block19').click(function() {
    $(this).effect('shake', 1000);
});

$('#block20').click(function() {
    $(this).effect('shake', {direction: 'up', distance: 50, times: 6}, 2000);
});


$('#block21').click(function() {
    $(this).effect('slide', {mode: 'hide'}, 1000);
});


$('#block22').click(function() {
    $(this).effect('slide', {mode: 'hide', direction: 'right'}, 1000);
});


$('#block23').click(function() {
    $(this).effect('slide', {mode: 'hide', direction: 'down'}, 1000);
});


$('#block24').click(function() {
    $(this).effect('slide', {mode: 'hide', direction: 'up'}, 1000);
});


$('#block25').click(function() {
    $(this).effect('transfer', {to: '#block25-two'}, 1000);
});


$('#accordion').accordion();


$('#tabs1').tabs();


$('#tabs2').tabs({event: 'mouseover'});


$('#tabs3').tabs({collapsible: true});


$('#datepicker1').datepicker();


$('#datepicker2').datepicker({dateFormat: "dd.mm.yy"});


$('#datepicker3').datepicker({
    dateFormat: "dd.mm.yy", 
    dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь","Ноябрь", "Декабрь" ],
    firstDay: 1
});


$("#datepicker4")
    .datepicker({
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь","Ноябрь", "Декабрь" ],
        firstDay: 1
    })
    .datepicker("option", "dateFormat", 'dd.mm.yy');
    
$('#set-date').click(function() {
    $("#datepicker4").datepicker("setDate", "10.12.2012");
});

$('#show').click(function() {
    $("#datepicker4").datepicker("show");
});

$('#hide').click(function() {
    $("#datepicker4").datepicker("hide");
});


$('#tooltip').tooltip();


$('#dialog1').dialog();


$("#dialog2").dialog({
    autoOpen: false,
    show: "blind",
    hide: "explode"
});

$('#show2').click(function() {
    $( "#dialog2" ).dialog("open");
});

$('#hide2').click(function() {
    $( "#dialog2" ).dialog("close");
});


$("#dialog3").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        Ok: function(){
            alert('Вы нажали на кнопку OK!');
            $(this).dialog("close");
        }
    }
});

$('#show3').click(function(){
    $( "#dialog3" ).dialog("open");
});

$('#hide3').click(function(){
    $( "#dialog3" ).dialog("close");
});


$("#dialog4").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        "Кнопка Ok": function(){
            alert('Вы нажали на кнопку OK - сейчас окно закроется!');
            $(this).dialog( "close" );
        },
        "Кнопка No": function(){
            alert('Вы нажали на кнопку No!');
        },
        "Мне все равно": function(){
            alert('Вам все равно, удалять эти файлы или нет!');
        }
    }
});

$('#show4').click(function() {
    $("#dialog4").dialog("open");
});

$('#hide4').click(function() {
    $("#dialog4").dialog("close");
});


let availableTags = ['Беларусь', 'Бельгия', 'Бирма'];

$("#tags").autocomplete({source: availableTags});
