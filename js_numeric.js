
let intVal = 1;
let floatVal = 1.5;

console.log("=== The JS Number datatype: int or float? ===");

console.log(intVal, typeof(intVal));
console.log(floatVal, typeof(floatVal));

console.log("=== parseInt/parseFlat ===");
intVal = parseInt(intVal);
floatVal = Number.parseFloat(floatVal);

console.log("=== typeof ===");
console.log(intVal, typeof(intVal));
console.log(floatVal, typeof(floatVal));

console.log("=== isNaN ===");
console.log(intVal, "isNaN: ", Number.isNaN(intVal));
console.log(floatVal,"isNaN: ", Number.isNaN(floatVal));

console.log("=== isInteger ===");
console.log(intVal, "isInteger: ", Number.isInteger(intVal));
console.log(floatVal,"isInteger: ", Number.isInteger(floatVal));
