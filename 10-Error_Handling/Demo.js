let e = new Error("Alert")
//console.log(e);
console.log(e.message);
e.name = "NewError"
console.log(e.name);
console.log(e.stack);

