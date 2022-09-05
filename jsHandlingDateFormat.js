let dtNow = new Date();
let mySpecificDate = new Date(2022, 10, 10, 5, 30, 0);//monthIndex (0 to 11).
console.log(dtNow, mySpecificDate);
console.log("toDateString()",dtNow.toDateString());
console.log("toGMTString()",dtNow.toGMTString());
console.log("toISOString()",dtNow.toISOString());
console.log("toJSON()",dtNow.toJSON());
console.log("toUTCString()",dtNow.toUTCString());
console.log("toLocaleString()",dtNow.toLocaleString());
console.log("toLocaleDateString()",dtNow.toLocaleDateString());
console.log("toLocaleTimeString()",dtNow.toLocaleTimeString());

//to match specific formats
console.log("toLocaleString(en-US)",dtNow.toLocaleString("en-US"));
console.log("toLocaleString(de-DE)",dtNow.toLocaleString("de-DE"));
console.log("toLocaleString(pt-br)",dtNow.toLocaleString("pt-br"));

