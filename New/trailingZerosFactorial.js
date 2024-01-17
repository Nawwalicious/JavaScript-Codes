var trailingZerosFactorial = function(n) {
    function fact(number) {
        if (number <= 0n) {
            return 1n;
        } else {
            return number * fact(number - 1n);
        }
    }

    let factN = fact(BigInt(n));
    let str = ''+factN;
    let count = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '0') {
            count++;
        } else {
            break;
        }
    }

    return [count, factN];
};

console.log("Count Of 0 is:", trailingZerosFactorial(3));
