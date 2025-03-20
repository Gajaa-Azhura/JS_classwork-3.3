let number1 = document.getElementById('num1');
let number2 = document.getElementById('num2');

function compare() {
    document.getElementById('greater').innerHTML = '';
    document.getElementById('lesser').innerHTML = '';
    document.getElementById('equalto').innerHTML = '';
    document.getElementById('notequal').innerHTML = '';

    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('notequal').innerHTML = 'Please enter valid numbers.';
    } else if (num1 > num2) {
        document.getElementById('greater').innerHTML = 'Number 1 is greater than Number 2';
    } else if (num1 < num2) {
        document.getElementById('lesser').innerHTML = 'Number 2 is greater than Number 1';
    } else {
        document.getElementById('equalto').innerHTML = 'Number 1 and Number 2 are equal';
    }
}