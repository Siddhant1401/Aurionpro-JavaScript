/*const c = 9
console.log("Value",c)*/

/*var a
console.log(a)
a = "Sid"
console.log(a)

var b = 'sid'
console.log(b);

const c = 'hello'
console.log(c);
{
    let b = 'xyz'
    console.log(b);

    var a = 1000
    console.log(a, typeof a);

    const c ='bye'
    console.log(c);
}
console.log(b, typeof b);
console.log(a, typeof a);
console.log(c, typeof c);

var f = null
console.log( f,typeof f);

var g = true;
console.log(g, typeof g);*/



//const a = [1,2,3,4,5]
/*let b = [6,7,8,9,0]
console.log(a[0]);
console.log(b[0]);
console.log(a==b);
a = b
a[0] = 100
console.log(a[0]);
console.log(b[0]);
console.log(a==b);*/

/*let additon = (number1, number2) => {
    //console.log("addition");
    if(typeof number1 == "number" && typeof number2 =="number"){
        console.log(typeof number1+number2);
    }else{
        console.log('Invalid');
    }
   
}

let subtraction = (number1, number2) => {
    if(typeof number1 == "number" && typeof number2 =="number"){
        console.log(number1-number2);
    }else{
        console.log('Invalid');
    }
    console.log("subtraction");
}

const randomOf = (param,number1,number2) => {
    param(number1,number2)
   // console.log(typeof param);
}

randomOf(additon,5,6);
randomOf(subtraction, 11, 2);*/

let functionGenerator = (functionName) => {
    switch(functionName){
        case "addition" : return ["",addition]
        case "subtraction" : return ["", subtraction]
        default : return function(){return "Invalid Input"}
    }
}

let addition = (number1, number2) => {
    if(typeof number1 == "number" && typeof number2 == "number"){
        console.log("Additon is  ", number1+number2);
    }
}

let subtraction = (number1,number2) => {
    if(typeof number1 == "number" && typeof number2 == "number"){
        console.log("Subtraction is ",number1-number2);
    }
}

let [msg,add] = functionGenerator("addition")
add(10,4)

let [msg1,sub] = functionGenerator("subtraction")
sub(10,4)

/*const myObj = {
    fname: 'sid',
    lanme: 'gggg',
    xyz: function (a, b) {
        return a + b
    }(2, 3),

    abc: (a, b) => { return (a + b) },
    mno: function (a, b) {
        return (function (a,b) {
            return a*b
        }
        )(a,b)
    }(2, 3)


}
console.log(myObj.mno);*/

// let myObj1 = {
//     fname: 'ram',
//     lanme: 'sita'
// }

// let myObj2 = {
//     fname: 'ramesh',
//     lanme: 'suresh'
// }

// console.log("myobj1 :", myObj1);
// console.log("myobj2 :", myObj2);

// let temp = myObj1
// myObj1 = myObj2
// myObj2 = temp

// console.log("After Swapping");
// console.log("Myobj1 : ", myObj1);
// console.log("Myobj2 : ", myObj2);

