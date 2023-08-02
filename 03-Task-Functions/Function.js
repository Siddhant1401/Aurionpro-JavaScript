let functionGenerator = (functionName) => {
    switch (functionName) {
        case "addition": return ["Addition : ", addition]
        case "subtraction": return ["Subtraction :", subtraction]
        case "multiplication": return ["Multiplication : ", multiplication]
        case "division": return ["Division : ", division]
        default : return ["Invalid Operation", defaultFuntion]
    }
}

let addition = (...elementOfArray) => {
    var sum = 0;
    for (let i = 0; i < elementOfArray.length; i++) {
        if (typeof elementOfArray[i] == "number") {
            sum = sum + elementOfArray[i]
        }
        else {
            return 0
        }
    }
    return sum;

}

let subtraction = (...elementOfArray) => {
    var subtract = 0;
    for (let i = 0; i < elementOfArray.length; i++) {
        if (typeof elementOfArray[i] == "number") {
            subtract = subtract - elementOfArray[i]
        }
        else {
            return 0
        }
    }
    return subtract;
}

let multiplication = (...elementOfArray) => {
    var product = 1;
    for (let i = 0; i < elementOfArray.length; i++) {
        if (typeof elementOfArray[i] == "number") {
            product = product * elementOfArray[i]
        }
        else {
            return 0
        }
    }
    return product
}

let division = (...elementOfArray) => {
    var divide = 0;
    for (let i = 0; i < elementOfArray.length; i++) {
        if (typeof elementOfArray[i] == "number") {
            divide = divide / eleementOfArray[i]
        } else {
            return 0
        }
    }
    return divide;
}

let defaultFuntion = () =>{
    return "Invalid Operation";
}


let elementsOfArray = [1, 2, 3, 4, 5]
let [msg, check] = functionGenerator("addition")
console.log(msg, check(...elementsOfArray));