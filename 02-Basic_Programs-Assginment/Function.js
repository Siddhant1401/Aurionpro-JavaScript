let functionGenerator = (functionName) => {
    switch (functionName) {
        case "primeNumber": return [primeNumber]
        case "sumOfFibonnaciSeries": return [sumOfFibonnaciSeries]
        case "countOfEvenOddZero": return [countOfEvenOddZero]
        case "factorialNumber": return [factorialNumber]
        default: return ["Invalid", null]
    }
}

let primeNumber = (number1) => {
    var isValid = true;
    if (typeof number1 == "number") {
        for (let i = 2; i < number1; i++) {
            if (number1 % i == 0) {
                isValid = false;
                break;
            }
        }

        if (isValid == true) {
            console.log(number1, "is prime");
        }
        else {
            console.log(number1, "is not prime");
        }

    }
    else {
        console.log("Invalid Input");
    }
}

let [prime] = functionGenerator("primeNumber")
prime(1)

let sumOfFibonnaciSeries = (number1) => {
    if (typeof number1 == "number") {
        var sampleNumber1 = 0;
        var sampleNumber2 = 1;
        var temp;
        for (let i = 0; i < number1; i++) {
            temp = sampleNumber1 + sampleNumber2
            sampleNumber1 = sampleNumber2
            sampleNumber2 = temp
        }
        console.log("Sum of Fibonnaci Series is ", sampleNumber2);
    }
    else {
        console.log("Invalid Input");
    }
}

let [sum] = functionGenerator("sumOfFibonnaciSeries")
sum(7)

let countOfEvenOddZero = (numberArray) => {
    var eventCount = 0
    var oddCount = 0
    var zeroCount = 0

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] == 0) {
            zeroCount++
        }
        else if (numberArray[i] % 2 == 0) {
            eventCount++
        }
        else {
            oddCount++
        }
    }
    Array = [eventCount, oddCount, zeroCount]
    return Array
}

let numArray = [0, 0, 1, 2, 3, 4]
let [check] = functionGenerator("countOfEvenOddZero")
let array = check(numArray)
console.log("Even Count is  ", array[0]);
console.log("Odd Count is  ", array[1]);
console.log("Zera Count is  ", array[2]);

let factorialNumber = (number1) => {
    if (typeof number1 == "number") {
        let ans = 1

        if (number1 == 0) {
            return 1;
        }
        else {
            for (let i = 1; i <= number1; i++) {
                ans = ans * i;
            }
            console.log("Factorial of", number1, " is ", ans);
        }
    }
    else {
        console.log("Invalid Input");
    }
}

let [factorial] = functionGenerator("factorialNumber")
factorial(5)