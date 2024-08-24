inputNumber()
function inputNumber() {
    var number = prompt("Enter a positive integer");
    number_float = parseFloat(number);
    number_int = parseInt(number)
    if ((number_int > 0) && (number_float % number_int == 0)) {
        showPrimes(number_int)
    } else {
        inputNumber()
    }
}
function showPrimes(n) {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) continue;
        primes.push(i);
    }
    alert("For n = " + n + " prime numbers are " + primes.join(","));
    return;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}