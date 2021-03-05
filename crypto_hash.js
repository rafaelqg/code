//npm install crypto
const crypto = require('crypto');
const message="With node.js we can create hash with several algoritms";

//SHA: Secure Hash Algoritm
//MD: Message Digest

result = crypto.createHash("md5").update(message).digest();
console.log("MD5", result ,result.length, result.toString('hex'));

result = crypto.createHash("sha1").update(message).digest();
console.log("SHA1", result ,result.length, result.toString('hex'));

result = crypto.createHash("sha256").update(message).digest();
console.log("SHA256", result ,result.length, result.toString('hex'));

result = crypto.createHash("sha512").update(message).digest();
console.log("SHA512", result ,result.length, result.toString('hex'));
