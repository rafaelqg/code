let crypto = require("crypto");
const algorithm = "aes-256-ctr";
const password = "super_pass";
const message = "Don't worry about the things...";

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password);
  var crypted = cipher.update(text,"utf8","hex");
  crypted += cipher.final("hex");
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password);
  var dec = decipher.update(text,"hex","utf8");
  dec += decipher.final("utf8");
  return dec;
}
 
let hw = encrypt(message);
// outputs hello world
console.log("Encrypted text", hw);
console.log("Decrypted text", decrypt(hw));