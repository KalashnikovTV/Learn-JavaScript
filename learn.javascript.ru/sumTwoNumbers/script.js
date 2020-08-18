var firstNumber,
    secondNumber;

function enterNumbers() {
    alert('Считаем сумму двух чисел!');
    firstNumber = +prompt('Введите первое число: ');
    while (isNaN(firstNumber) || firstNumber == null || firstNumber == '') {
        firstNumber = +prompt('Введите первое число: ');
    }
    secondNumber = +prompt('Введите второе число: ');
    while (isNaN(secondNumber) || secondNumber == null || secondNumber == '') {
        secondNumber = +prompt('Введите второе число: ');
    }
}
enterNumbers();

function sumNumber() {
    var result = (firstNumber + secondNumber).toFixed(1);
    alert('Сумма двух чисел: ' + result + ' (округление до десятых)');
}
sumNumber();