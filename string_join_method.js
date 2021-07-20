const cities=["Florianópolis","München","Griffith ","Tokyo","New York"];

//how to create a string output from data?
let output="";
cities.forEach(city=>{
    output+=city+"\n";
});
//OR....
let outputUsingJoin=cities.join("\n");
console.log("output build with a foreach", output);
console.log("output build with join()", outputUsingJoin);
