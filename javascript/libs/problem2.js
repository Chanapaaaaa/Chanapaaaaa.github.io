var number_inputs = [];
readInput()
function readInput() {
    var number = prompt("Enter an integer (a negative integer to quit)");
    const number_float = parseFloat(number);
    const number_int = parseInt(number)
    console.log(number_int)
    if ((number_int > 0) && (number_float % number_int == 0)) {
        number_inputs.push(number_int)
        readInput()
    } else if (number_int < 0) {
        if (number_inputs.length === 0) {
            alert("For the list is empty, the average is 0, the minimum is 0, and the maximum is 0");
            return;
        }
        displayStats();
        return;
    } else {
        readInput()
    }
}

function displayStats() {
    const number_input = number_inputs
    number_inputs.sort(compareNumbers);
    console.log(number_inputs)
    const minimum = number_inputs[0]
    const  maximum = number_inputs[number_inputs.length - 1]
    const sum = number_inputs.reduce((total, currentValue) => total + currentValue, 0);
    const avg = sum / number_inputs.length;

    alert("For the list " + number_input + ", the average is " + avg.toFixed(2) + ", the minimum is " + minimum + ", and the maximum is " + maximum);
    return;
}

function compareNumbers(a, b) {
    return a - b;
}

function isPrime(n) {
    for (let i = 2; i > n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}