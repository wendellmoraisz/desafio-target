function createFibonacciSequence(initialValue, nextValue){
    return initialValue + nextValue;
};

function fibonacciVerify(number){
    const fibonacciValues = [0, 1];
    for (let i = 1; i <= number; i++){
        fibonacciValues.push(createFibonacciSequence(fibonacciValues[i - 1], fibonacciValues[i]));
        if (fibonacciValues[i] > number) return false;
        if (fibonacciValues.includes(number)) return true;
    };
};

console.log(fibonacciVerify(2585));