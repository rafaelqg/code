let commaSeparatedValues="Donald duck, Goofy, Pluto";
let valuesFromCSV=commaSeparatedValues.split(",");
console.log("Values from CSV:", valuesFromCSV);

let htmlContent="<select><option>Donald duck</option><option>Goofy</option><option>Pluto</option></select>";
let valuesFromHTML=htmlContent.split("<option>");
console.log(valuesFromHTML);
valuesFromHTML.forEach( (el,i,array)=>{
    array[i]=el.split("</option>");
    console.log("working value", array[i]);
    array[i]=array[i][0];
});
console.log("Working list:", valuesFromHTML);
valuesFromHTML=valuesFromHTML.splice(1,valuesFromHTML.length);
console.log("Values extracted from HTML:", valuesFromHTML);
